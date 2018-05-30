import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanCheckComponent } from './ocean-check.component';

describe('OceanCheckComponent', () => {
  let component: OceanCheckComponent;
  let fixture: ComponentFixture<OceanCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
