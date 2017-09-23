import { Note, NoteName, getNoteFromPosition } from './note';

/**
 * Represents a scale of notes.
 */
export class Scale {

	name: string;
	tonic: NoteName;
	notes: Note[];
	pattern: number[];

}

/**
 * Generates the notes in a particular scale using the pattern specified by that scale.
 * @param scale The scale to generate the notes in.
 */
export function GenerateScaleNotes(scale: Scale) {
	for (let octave = 1; octave <= 6; octave++) {
		const tonic = { name: scale.tonic, octave: octave } as Note;
		for (let i = 0; i < scale.pattern.length; i++) {
			const note = getNoteFromPosition(tonic.position + scale.pattern[i]);
			scale.notes.push(note);
		}
	}
}

/**
 * Generates a Blues Scale
 * @param tonic The starting note of the scale. All other notes are generated by offsetting this note in the pattern of the scale.
 */
export function GenerateBluesScale(tonic: NoteName): Scale {
	const scale = { name: 'Blues Scale', notes: [], pattern: [0, 3, 5, 6, 7, 10] } as Scale;
	GenerateScaleNotes(scale);
	return scale;
}

/**
 * Generates a Minor Pentatonic Scale
 * @param tonic The starting note of the scale. All other notes are generated by offsetting this note in the pattern of the scale.
 */
export function GenerateMinorPentatonicScale(tonic: NoteName): Scale {
	const scale = { name: 'Minor Pentatonic Scale', notes: [], pattern: [0, 3, 5, 7, 10] } as Scale;
	GenerateScaleNotes(scale);
	return scale;
}

/**
 * Generates a Major Pentatonic Scale
 * @param tonic The starting note of the scale. All other notes are generated by offsetting this note in the pattern of the scale.
 */
export function GenerateMajorPentatonicScale(tonic: NoteName): Scale {
	const scale = { name: 'Major Pentatonic Scale', notes: [], pattern: [0, 2, 4, 7, 9] } as Scale;
	GenerateScaleNotes(scale);
	return scale;
}