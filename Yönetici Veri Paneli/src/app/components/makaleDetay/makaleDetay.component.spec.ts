/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakaleDetayComponent } from './makaleDetay.component';

describe('MakaleDetayComponent', () => {
  let component: MakaleDetayComponent;
  let fixture: ComponentFixture<MakaleDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaleDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
