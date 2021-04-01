import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthTaskComponent } from './ninth-task.component';

describe('NinthTaskComponent', () => {
  let component: NinthTaskComponent;
  let fixture: ComponentFixture<NinthTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinthTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
