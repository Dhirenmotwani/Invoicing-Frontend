import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParentComponentComponent } from './customer-parent-component.component';

describe('CustomerParentComponentComponent', () => {
  let component: CustomerParentComponentComponent;
  let fixture: ComponentFixture<CustomerParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
