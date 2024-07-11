import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCompComponent } from './custom-comp.component';

describe('CustomCompComponent', () => {
  let component: CustomCompComponent;
  let fixture: ComponentFixture<CustomCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCompComponent]
    });
    fixture = TestBed.createComponent(CustomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
