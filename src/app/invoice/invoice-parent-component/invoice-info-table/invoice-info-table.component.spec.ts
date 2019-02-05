import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInfoTableComponent } from './invoice-info-table.component';

describe('InvoiceInfoTableComponent', () => {
  let component: InvoiceInfoTableComponent;
  let fixture: ComponentFixture<InvoiceInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
