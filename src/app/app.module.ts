import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { LetterCubeComponent } from './letter-cube/letter-cube.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { WordListComponent } from './word-list/word-list.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
	declarations: [
		AppComponent,
		LetterCubeComponent,
		BoardComponent,
		PlayerComponent,
		DialogComponent,
		WordListComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		SocketIoModule.forRoot(config),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
