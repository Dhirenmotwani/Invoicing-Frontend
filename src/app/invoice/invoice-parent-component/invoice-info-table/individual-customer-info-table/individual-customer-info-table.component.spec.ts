import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCustomerInfoTableComponent } from './individual-customer-info-table.component';

describe('IndividualCustomerInfoTableComponent', () => {
  let component: IndividualCustomerInfoTableComponent;
  let fixture: ComponentFixture<IndividualCustomerInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCustomerInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCustomerInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
