import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOnActionBase64Component } from './load-on-action-base64.component';

describe('LoadOnActionBase64Component', () => {
  let component: LoadOnActionBase64Component;
  let fixture: ComponentFixture<LoadOnActionBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOnActionBase64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOnActionBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
