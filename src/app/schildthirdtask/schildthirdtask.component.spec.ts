import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchildthirdtaskComponent } from './schildthirdtask.component';

describe('SchildthirdtaskComponent', () => {
  let component: SchildthirdtaskComponent;
  let fixture: ComponentFixture<SchildthirdtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchildthirdtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchildthirdtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
