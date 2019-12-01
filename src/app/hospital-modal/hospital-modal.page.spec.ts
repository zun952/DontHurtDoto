import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalModalPage } from './hospital-modal.page';

describe('HospitalModalPage', () => {
  let component: HospitalModalPage;
  let fixture: ComponentFixture<HospitalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
