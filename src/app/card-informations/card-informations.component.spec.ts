import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationsComponent } from './card-informations.component';

describe('CardInformationsComponent', () => {
  let component: CardInformationsComponent;
  let fixture: ComponentFixture<CardInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInformationsComponent]
    });
    fixture = TestBed.createComponent(CardInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
