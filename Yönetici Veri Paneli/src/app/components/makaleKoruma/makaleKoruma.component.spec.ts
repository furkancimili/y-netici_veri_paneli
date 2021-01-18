/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakaleKorumaComponent } from './makaleKoruma.component';

describe('MakaleKorumaComponent', () => {
  let component: MakaleKorumaComponent;
  let fixture: ComponentFixture<MakaleKorumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleKorumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaleKorumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
