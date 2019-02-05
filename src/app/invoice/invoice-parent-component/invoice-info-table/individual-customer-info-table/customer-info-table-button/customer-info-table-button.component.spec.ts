import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoTableButtonComponent } from './customer-info-table-button.component';

describe('CustomerInfoTableButtonComponent', () => {
  let component: CustomerInfoTableButtonComponent;
  let fixture: ComponentFixture<CustomerInfoTableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoTableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
