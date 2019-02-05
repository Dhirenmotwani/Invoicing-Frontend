import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyInfoTitleComponent } from './society-info-title.component';

describe('SocietyInfoTitleComponent', () => {
  let component: SocietyInfoTitleComponent;
  let fixture: ComponentFixture<SocietyInfoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyInfoTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyInfoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
