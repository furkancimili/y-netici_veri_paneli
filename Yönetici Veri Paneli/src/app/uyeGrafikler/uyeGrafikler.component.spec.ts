/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeGrafiklerComponent } from './uyeGrafikler.component';

describe('UyeGrafiklerComponent', () => {
  let component: UyeGrafiklerComponent;
  let fixture: ComponentFixture<UyeGrafiklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeGrafiklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeGrafiklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
