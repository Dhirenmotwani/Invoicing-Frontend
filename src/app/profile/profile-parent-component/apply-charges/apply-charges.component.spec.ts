import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyChargesComponent } from './apply-charges.component';

describe('ApplyChargesComponent', () => {
  let component: ApplyChargesComponent;
  let fixture: ComponentFixture<ApplyChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
