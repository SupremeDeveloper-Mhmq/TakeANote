import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotesComponent } from './delete-notes.component';

describe('DeleteNotesComponent', () => {
  let component: DeleteNotesComponent;
  let fixture: ComponentFixture<DeleteNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
