import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'boggle-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.less'],
})
export class DialogComponent {
	constructor(
		private dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	randomName(): void {
		this.dialogRef.close('Random name :)');
	}
}
