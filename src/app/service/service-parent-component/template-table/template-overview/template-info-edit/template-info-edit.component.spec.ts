import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInfoEditComponent } from './template-info-edit.component';

describe('TemplateInfoEditComponent', () => {
  let component: TemplateInfoEditComponent;
  let fixture: ComponentFixture<TemplateInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
