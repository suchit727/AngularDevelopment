import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Component } from './d1.component';

describe('D1Component', () => {
  let component: D1Component;
  let fixture: ComponentFixture<D1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
