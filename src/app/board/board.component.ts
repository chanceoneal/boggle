import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
import { LETTER_CUBES } from '../letter-cubes';
@Component({
	selector: 'boggle-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
	width = 4;
	height = 4;
	board: string[][] = new Array(this.width);
	letterInventory: Record<string, number> = {};
	gameStarted = false;

	constructor() {}

	ngOnInit(): void {
		const letterCubes = _.cloneDeep(LETTER_CUBES);
		for (let i = 0; i < this.width; i++) {
			this.board[i] = [];
			for (let j = 0; j < this.height; j++) {
				let cIndex = Math.floor(Math.random() * letterCubes.length);
				let lIndex = Math.floor(
					Math.random() * letterCubes[cIndex].length
				);
				let letter = letterCubes[cIndex][lIndex];
				this.board[i].push(letter);
				_.set(
					this.letterInventory,
					letter,
					_.has(this.letterInventory, letter)
						? _.get(this.letterInventory, letter) + 1
						: 1
				);
				_.pullAt(letterCubes, cIndex);
			}
		}
	}
}
