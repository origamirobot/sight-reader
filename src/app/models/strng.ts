import { Note, NoteName } from './note';


/**
 * Represents the type of material a string can be made from.
 */
export enum StringCore {
	steel,
	nylon,
	gut,
	silk
}

/**
 * Represents the type of ending a string has.
 */
export enum StringEnd {
	plainEnd,
	loopEnd,
	ballEnd
}

/**
 * Represents a string on a chordophone type instrument.
 */
export class Strng {

	rootNote: Note;
	octave: number;
	core: StringCore;
	end: StringEnd;
	guage: number;
	scaleLength: number;

	/**
	 * Fret the specified fret number, and return the note at that fret.
	 * @param fret
	 */
	fret(fretNumber: number): Note {
		const notes = generateStringNotes(this.rootNote, fretNumber);
		if (fretNumber === 0) {
			return this.rootNote;
		}
		return notes[notes.length - 1];
	}



}

export function generateStringNotes(rootNote: Note, amount: number): Note[] {
	const notes = [] as Note[];
	let currentOctave = rootNote.octave;
	let prevNote = rootNote.name;
	for (let i = 1; i <= amount; i++) {
		let note = prevNote + 1;
		if (prevNote === NoteName.Gs) {
			currentOctave++;
			note = NoteName.A;
		}
		const name = { name: note, octave: currentOctave } as Note;
		notes.push(name);
		prevNote = note;
	}
	return notes;
}
