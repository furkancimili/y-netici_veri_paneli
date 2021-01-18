/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeTabloComponent } from './uyeTablo.component';

describe('UyeTabloComponent', () => {
  let component: UyeTabloComponent;
  let fixture: ComponentFixture<UyeTabloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeTabloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeTabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
