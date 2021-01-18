/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeGirisComponent } from './uyeGiris.component';

describe('UyeGirisComponent', () => {
  let component: UyeGirisComponent;
  let fixture: ComponentFixture<UyeGirisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeGirisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
