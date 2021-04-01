import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsecondtaskComponent } from './childsecondtask.component';

describe('ChildsecondtaskComponent', () => {
  let component: ChildsecondtaskComponent;
  let fixture: ComponentFixture<ChildsecondtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsecondtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsecondtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
