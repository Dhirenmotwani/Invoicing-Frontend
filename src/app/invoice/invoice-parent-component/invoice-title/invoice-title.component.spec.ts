import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTitleComponent } from './invoice-title.component';

describe('InvoiceTitleComponent', () => {
  let component: InvoiceTitleComponent;
  let fixture: ComponentFixture<InvoiceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
