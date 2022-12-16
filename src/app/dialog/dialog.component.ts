import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

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
