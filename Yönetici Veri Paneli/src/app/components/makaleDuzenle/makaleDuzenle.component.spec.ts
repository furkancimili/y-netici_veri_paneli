/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakaleDuzenleComponent } from './makaleDuzenle.component';

describe('MakaleDuzenleComponent', () => {
  let component: MakaleDuzenleComponent;
  let fixture: ComponentFixture<MakaleDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaleDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
