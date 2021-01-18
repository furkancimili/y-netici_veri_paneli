/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakalelerComponent } from './makaleler.component';

describe('MakalelerComponent', () => {
  let component: MakalelerComponent;
  let fixture: ComponentFixture<MakalelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakalelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakalelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
