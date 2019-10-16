import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWriteOffStockPage } from './all-write-off-stock.page';

describe('AllWriteOffStockPage', () => {
  let component: AllWriteOffStockPage;
  let fixture: ComponentFixture<AllWriteOffStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWriteOffStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWriteOffStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
