import { Component } from '@angular/core';

@Component({
	selector: 'boggle-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'boggle';
	players = 4;

	getName(): string {
		return 'Chance';
	}
}
