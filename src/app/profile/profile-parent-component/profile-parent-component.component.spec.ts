import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParentComponentComponent } from './profile-parent-component.component';

describe('ProfileParentComponentComponent', () => {
  let component: ProfileParentComponentComponent;
  let fixture: ComponentFixture<ProfileParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
