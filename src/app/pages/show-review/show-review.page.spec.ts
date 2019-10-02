import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewPage } from './show-review.page';

describe('ShowReviewPage', () => {
  let component: ShowReviewPage;
  let fixture: ComponentFixture<ShowReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
