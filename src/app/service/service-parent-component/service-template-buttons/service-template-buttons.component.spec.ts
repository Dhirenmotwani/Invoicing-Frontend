import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTemplateButtonsComponent } from './service-template-buttons.component';

describe('ServiceTemplateButtonsComponent', () => {
  let component: ServiceTemplateButtonsComponent;
  let fixture: ComponentFixture<ServiceTemplateButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTemplateButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTemplateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
