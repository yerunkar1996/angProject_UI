import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompEmployeeComponent } from './about-comp-employee.component';

describe('AboutCompEmployeeComponent', () => {
  let component: AboutCompEmployeeComponent;
  let fixture: ComponentFixture<AboutCompEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCompEmployeeComponent]
    });
    fixture = TestBed.createComponent(AboutCompEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
