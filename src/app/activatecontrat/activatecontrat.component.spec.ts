import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatecontratComponent } from './activatecontrat.component';

describe('ActivatecontratComponent', () => {
  let component: ActivatecontratComponent;
  let fixture: ComponentFixture<ActivatecontratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatecontratComponent]
    });
    fixture = TestBed.createComponent(ActivatecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
