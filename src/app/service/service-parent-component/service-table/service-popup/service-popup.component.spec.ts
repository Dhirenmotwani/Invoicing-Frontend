import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePopupComponent } from './service-popup.component';

describe('ServicePopupComponent', () => {
  let component: ServicePopupComponent;
  let fixture: ComponentFixture<ServicePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
