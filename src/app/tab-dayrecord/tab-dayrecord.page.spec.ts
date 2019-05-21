import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDayrecordPage } from './tab-dayrecord.page';

describe('TabDayrecordPage', () => {
  let component: TabDayrecordPage;
  let fixture: ComponentFixture<TabDayrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabDayrecordPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDayrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
