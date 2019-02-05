import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersInfoTableComponent } from './customers-info-table.component';

describe('CustomersInfoTableComponent', () => {
  let component: CustomersInfoTableComponent;
  let fixture: ComponentFixture<CustomersInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
