import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanimaldataComponent } from './addanimaldata.component';

describe('AddanimaldataComponent', () => {
  let component: AddanimaldataComponent;
  let fixture: ComponentFixture<AddanimaldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddanimaldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanimaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
