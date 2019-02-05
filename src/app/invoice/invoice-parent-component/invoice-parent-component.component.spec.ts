import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceParentComponentComponent } from './invoice-parent-component.component';

describe('InvoiceParentComponentComponent', () => {
  let component: InvoiceParentComponentComponent;
  let fixture: ComponentFixture<InvoiceParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
