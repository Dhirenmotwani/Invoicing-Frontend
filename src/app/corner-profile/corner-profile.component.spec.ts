import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerProfileComponent } from './corner-profile.component';

describe('CornerProfileComponent', () => {
  let component: CornerProfileComponent;
  let fixture: ComponentFixture<CornerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
