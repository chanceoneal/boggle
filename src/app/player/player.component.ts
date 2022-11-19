import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import * as _ from 'lodash-es';

@Component({
	selector: 'boggle-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.less'],
})
export class PlayerComponent implements OnInit {
	name: string = '';
	wordCount: number = 0;
	@Input() isClient: boolean;
	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {
		if (this.isClient) {
			const dialogRef = this.dialog.open(DialogComponent, {
				disableClose: true,
				data: { name: this.name },
			});
			dialogRef.afterClosed().subscribe((result) => {
				console.log(`Dialog result: ${result}`);
				this.name = result;
			});
		}
	}

	getWordCount(count: number) {
		this.wordCount = count;
	}
}
