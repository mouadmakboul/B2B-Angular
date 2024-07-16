import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryupComponent } from './categoryup.component';

describe('CategoryupComponent', () => {
  let component: CategoryupComponent;
  let fixture: ComponentFixture<CategoryupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryupComponent]
    });
    fixture = TestBed.createComponent(CategoryupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
