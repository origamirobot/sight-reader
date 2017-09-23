import { Component, OnInit } from '@angular/core';
import { Strng, StringCore, StringEnd } from '../models/strng';
import { Note, NoteName } from '../models/note';

@Component({
	selector: 'app-ukulele',
	templateUrl: './ukulele.component.html',
	styleUrls: ['./ukulele.component.less']
})
export class UkuleleComponent implements OnInit {


	strings: Strng[] = [
		{ rootNote: { name: NoteName.A, octave: 4 }, core: StringCore.nylon, end: StringEnd.loopEnd },
		{ rootNote: { name: NoteName.E, octave: 4 }, core: StringCore.nylon, end: StringEnd.loopEnd },
		{ rootNote: { name: NoteName.C, octave: 4 }, core: StringCore.nylon, end: StringEnd.loopEnd },
		{ rootNote: { name: NoteName.G, octave: 4 }, core: StringCore.nylon, end: StringEnd.loopEnd }
	] as Strng[];

	scaleLength: number = 16;

	constructor() { }

	ngOnInit() {

	}

}
