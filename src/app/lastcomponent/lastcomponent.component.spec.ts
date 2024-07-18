import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastcomponentComponent } from './lastcomponent.component';

describe('LastcomponentComponent', () => {
  let component: LastcomponentComponent;
  let fixture: ComponentFixture<LastcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastcomponentComponent]
    });
    fixture = TestBed.createComponent(LastcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
