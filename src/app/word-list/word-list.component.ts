import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'boggle-word-list',
	templateUrl: './word-list.component.html',
	styleUrls: ['./word-list.component.less'],
})
export class WordListComponent implements OnInit {
	ALPHA_REGEX: RegExp = /[a-zA-Z]{3,}/g;
	wordList: string[] = [];
	currentWord: string = '';

	@Output() wordsFound = new EventEmitter<number>();
	constructor() {}

	ngOnInit(): void {}

	addWord(word: string) {
		if (
			word &&
			(word.length < 3 || word.length > 16) &&
			!this.ALPHA_REGEX.test(word)
		) {
			return;
		}

		const upperWord = word.replaceAll(' ', '').toUpperCase();
		const index = this.binarySearchForIndex(upperWord);
		this.wordList.splice(index, 0, upperWord);
		this.wordsFound.emit(this.wordList.length);
		this.currentWord = '';
	}

	binarySearchForIndex(word: string): number {
		let low = 0,
			high = this.wordList.length;

		while (low < high) {
			let mid = (low + high) >>> 1;
			if (this.wordList[mid] < word) low = mid + 1;
			else high = mid;
		}
		return low;
	}

	/**
	 *
	 * @param w1 First word to compare
	 * @param w2 Second word to compare
	 * @returns -1, 0, or 1 if w1 comes before, is the same as, or comes after w2
	 */
	compareWords(w1: string, w2: string): number {
		const lc = w1.localeCompare(w2);
		return lc < 0 ? -1 : lc > 0 ? 1 : 0;
	}
}
