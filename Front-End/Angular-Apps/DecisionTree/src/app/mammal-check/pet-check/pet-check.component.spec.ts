import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatHabitComponent } from './eat-habit.component';

describe('EatHabitComponent', () => {
  let component: EatHabitComponent;
  let fixture: ComponentFixture<EatHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
