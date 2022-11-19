import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'boggle-letter-cube',
	templateUrl: './letter-cube.component.html',
	styleUrls: ['./letter-cube.component.less'],
})
export class LetterCubeComponent implements OnInit {
	@Input() value!: string;
	@Input() gameStarted!: boolean;
	constructor() {}

	ngOnInit(): void {}
}
