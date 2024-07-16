import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinputsComponent } from './checkinputs.component';

describe('CheckinputsComponent', () => {
  let component: CheckinputsComponent;
  let fixture: ComponentFixture<CheckinputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinputsComponent]
    });
    fixture = TestBed.createComponent(CheckinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
