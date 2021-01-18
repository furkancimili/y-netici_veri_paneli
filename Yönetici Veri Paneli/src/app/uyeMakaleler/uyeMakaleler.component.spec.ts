/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeMakalelerComponent } from './uyeMakaleler.component';

describe('UyeMakalelerComponent', () => {
  let component: UyeMakalelerComponent;
  let fixture: ComponentFixture<UyeMakalelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeMakalelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeMakalelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
