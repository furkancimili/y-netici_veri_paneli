/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeFormlarComponent } from './uyeFormlar.component';

describe('UyeFormlarComponent', () => {
  let component: UyeFormlarComponent;
  let fixture: ComponentFixture<UyeFormlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeFormlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeFormlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
