/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeduyurularComponent } from './uyeduyurular.component';

describe('UyeduyurularComponent', () => {
  let component: UyeduyurularComponent;
  let fixture: ComponentFixture<UyeduyurularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeduyurularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeduyurularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
