import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersButtonsComponent } from './customers-buttons.component';

describe('CustomersButtonsComponent', () => {
  let component: CustomersButtonsComponent;
  let fixture: ComponentFixture<CustomersButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
