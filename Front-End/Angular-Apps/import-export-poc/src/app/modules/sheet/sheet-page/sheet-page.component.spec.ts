import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetPageComponent } from './sheet-page.component';

describe('SheetPageComponent', () => {
  let component: SheetPageComponent;
  let fixture: ComponentFixture<SheetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
