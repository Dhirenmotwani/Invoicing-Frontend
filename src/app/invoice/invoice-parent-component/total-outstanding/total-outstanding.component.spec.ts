import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOutstandingComponent } from './total-outstanding.component';

describe('TotalOutstandingComponent', () => {
  let component: TotalOutstandingComponent;
  let fixture: ComponentFixture<TotalOutstandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalOutstandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
