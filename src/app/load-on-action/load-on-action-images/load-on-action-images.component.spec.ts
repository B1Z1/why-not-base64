import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOnActionImagesComponent } from './load-on-action-images.component';

describe('LoadOnActionImagesComponent', () => {
  let component: LoadOnActionImagesComponent;
  let fixture: ComponentFixture<LoadOnActionImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOnActionImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOnActionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
