import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FchildthirdtaskComponent } from './fchildthirdtask.component';

describe('FchildthirdtaskComponent', () => {
  let component: FchildthirdtaskComponent;
  let fixture: ComponentFixture<FchildthirdtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FchildthirdtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FchildthirdtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
