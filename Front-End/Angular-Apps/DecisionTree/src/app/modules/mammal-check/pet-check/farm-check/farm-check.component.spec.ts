import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfitComponent } from './unfit.component';

describe('UnfitComponent', () => {
  let component: UnfitComponent;
  let fixture: ComponentFixture<UnfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
