import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOnActionComponent } from './load-on-action.component';

describe('LoadOnActionComponent', () => {
  let component: LoadOnActionComponent;
  let fixture: ComponentFixture<LoadOnActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOnActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOnActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
