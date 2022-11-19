import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCubeComponent } from './letter-cube.component';

describe('LetterCubeComponent', () => {
	let component: LetterCubeComponent;
	let fixture: ComponentFixture<LetterCubeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LetterCubeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LetterCubeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
