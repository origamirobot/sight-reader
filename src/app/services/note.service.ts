import { Injectable } from '@angular/core';
import { Note, NoteName, frequencyFromNote, noteFromFrequency } from '../models/note';


@Injectable()
export class NoteService {

	/**
	 * Gets the semi-tonal offset between notes 1 and 1.
	 * @param note1 The first note.
	 * @param note2 The second note.
	 */
	getHalfStepOffset(note1: Note, note2: Note): number {
		return note1.position - note2.position;
	}

	/**
	 * Takes the specified note, and returns the frequncy of that note.
	 * @param note The note to get the frequency for.
	 */
	frequencyFromNote(note: Note): number {
		return frequencyFromNote(note);
	}

	/**
	 * Takes the specified frequency and returns the Note.
	 * @param freq The frequency to generate a note from.
	 */
	noteFromFrequency(freq: number): Note {
		return noteFromFrequency(freq);
	}

	/**
	 * Takes a note name, and returns a note name at the specified offset.
	 * @param note The note name to start at.
	 * @param offset The number of semi-tones to offset.
	 */
	offsetNote(note: NoteName, offset: number): NoteName {
		let prevNote = note;
		let index = 0;
		let position = note as number;
		const reverse = (offset < 0);

		while (true) {
			index = reverse ? index - 1 : index + 1;
			position = reverse ? position - 1 : position + 1;

			if (position < 0) {
				position = 12;
			}
			if (position > 12) {
				position = 0;
			}

			prevNote = position as NoteName;
			if (index == offset) {
				return prevNote;
			}
		}
	}

}
