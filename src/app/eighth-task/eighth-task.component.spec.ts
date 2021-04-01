import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthTaskComponent } from './eighth-task.component';

describe('EighthTaskComponent', () => {
  let component: EighthTaskComponent;
  let fixture: ComponentFixture<EighthTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
