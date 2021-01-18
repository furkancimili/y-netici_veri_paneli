/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakaleEkleComponent } from './makaleEkle.component';

describe('MakaleEkleComponent', () => {
  let component: MakaleEkleComponent;
  let fixture: ComponentFixture<MakaleEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaleEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
