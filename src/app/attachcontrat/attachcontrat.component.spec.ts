import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachcontratComponent } from './attachcontrat.component';

describe('AttachcontratComponent', () => {
  let component: AttachcontratComponent;
  let fixture: ComponentFixture<AttachcontratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachcontratComponent]
    });
    fixture = TestBed.createComponent(AttachcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
