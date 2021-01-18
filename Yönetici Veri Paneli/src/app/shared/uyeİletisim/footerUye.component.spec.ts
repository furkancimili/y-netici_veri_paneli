/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterUyeComponent } from './footerUye.component';

describe('FooterUyeComponent', () => {
  let component: FooterUyeComponent;
  let fixture: ComponentFixture<FooterUyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
