

/**
 * Represents the name of a note on a musical scale.
 */
export enum NoteName { A, As, B, C, Cs, D, Ds, E, F, Fs, G, Gs }

const _a4Freq: number = 440;
const _a4NoteName: NoteName = NoteName.A;
const _a4Octave: number = 4;
const _a4Position: number = (this._a4Octave * 12) + this._a4NoteName;

// MAGIC NUMBER USED TO CALCULATE FREQUENCIES OF NOTES
const _twelfthRootOf2: number = 1.059463094359;



/**
 * Represents a musical note.
 */
export class Note {

	name: NoteName;
	octave: number;

	get position(): number {
		return getPositionFromNote(this);
	}

	set position(val: number) {
		const note = getNoteFromPosition(val);
		this.name = note.name;
		this.octave = note.octave;
	}

	get frequency(): number {
		return frequencyFromNote(this);
	}

	set frequency(val: number) {
		const note = noteFromFrequency(val);
		this.name = note.name;
		this.octave = note.octave;
	}

}

/**
 * Returns the position of the specified note.
 * @param note The note to get the position for.
 */
export function getPositionFromNote(note: Note): number {
	return ((note.octave * 12) + note.name);
}

/**
 * Returns the note at the given position.
 * @param position The position used to generate a note.
 */
export function getNoteFromPosition(position: number): Note {
	const octave = (position / 12) + 1;
	const noteName = position - (Math.floor(position / 12) * 12);
	const note = new Note();
	note.name = noteName;
	note.octave = octave;
	return note;
}

/**
 * Gets the offset between note1 and note2
 * @param note1 The first note
 * @param note2 The second note
 */
export function getHalfStepOffset(note1: Note, note2: Note): number {
	return note1.position - note2.position;
}

/**
 * Gets the frequency for the specified note.
 * @param note The note to get the frequency for.
 */
export function frequencyFromNote(note: Note): number {
	const offset = (_a4Position - note.position) * -1;
	const freq = _a4Freq * (Math.pow(_twelfthRootOf2, offset));
	return freq;
}

/**
 * Gets the note at the specified frequency.
 * @param freq The frequency to get the note at.
 */
export function noteFromFrequency(freq: number): Note {
	// TODO: Figure out how to do this.
	return null;
}
