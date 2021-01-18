/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyePaneliComponent } from './uyePaneli.component';

describe('UyePaneliComponent', () => {
  let component: UyePaneliComponent;
  let fixture: ComponentFixture<UyePaneliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyePaneliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyePaneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
