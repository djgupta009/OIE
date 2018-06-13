import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalCheckComponent } from './mammal-check.component';

describe('ViewAgeComponent', () => {
  let component: ViewAgeComponent;
  let fixture: ComponentFixture<ViewAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
