import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceeditpoupComponent } from './serviceeditpoup.component';

describe('ServiceeditpoupComponent', () => {
  let component: ServiceeditpoupComponent;
  let fixture: ComponentFixture<ServiceeditpoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceeditpoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceeditpoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
