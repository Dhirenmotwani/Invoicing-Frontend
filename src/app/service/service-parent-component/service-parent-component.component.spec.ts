import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceParentComponentComponent } from './service-parent-component.component';

describe('ServiceParentComponentComponent', () => {
  let component: ServiceParentComponentComponent;
  let fixture: ComponentFixture<ServiceParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
