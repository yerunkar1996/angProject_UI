import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompanyProfileComponent } from './about-company-profile.component';

describe('AboutCompanyProfileComponent', () => {
  let component: AboutCompanyProfileComponent;
  let fixture: ComponentFixture<AboutCompanyProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCompanyProfileComponent]
    });
    fixture = TestBed.createComponent(AboutCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
