import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrduitcardComponent } from './prduitcard.component';

describe('PrduitcardComponent', () => {
  let component: PrduitcardComponent;
  let fixture: ComponentFixture<PrduitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrduitcardComponent]
    });
    fixture = TestBed.createComponent(PrduitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
