import { Component, OnInit, Input } from '@angular/core';
import { Strng } from '../models/strng';
import { Note, NoteName } from '../models/note';
import { generateFrets, Fret } from '../models/fret';

var document: any;
declare var $: Function;

@Component({
	selector: 'app-fret-board',
	templateUrl: './fret-board.component.html',
	styleUrls: ['./fret-board.component.less']
})
export class FretBoardComponent implements OnInit {


	@Input()
	numberOfFrets: number = 15;

	@Input()
	scaleLength: number = 26;


	frets: Fret[];

	constructor() { }

	ngOnInit() {
		const boardWidth = $('.board').innerWidth() as number;
		const boardHeight = $('.board').innerHeight() as number;
		this.frets = generateFrets(this.numberOfFrets, this.scaleLength, boardWidth);
		setTimeout(() => {
			$('.fret').innerHeight(boardHeight);
		}, 500);
	}

}
