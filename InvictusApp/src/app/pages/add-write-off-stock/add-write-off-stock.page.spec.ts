import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWriteOffStockPage } from './add-write-off-stock.page';

describe('AddWriteOffStockPage', () => {
  let component: AddWriteOffStockPage;
  let fixture: ComponentFixture<AddWriteOffStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWriteOffStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWriteOffStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
