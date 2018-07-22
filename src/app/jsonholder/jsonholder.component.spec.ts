/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonholderComponent } from './jsonholder.component';

describe('JsonholderComponent', () => {
  let component: JsonholderComponent;
  let fixture: ComponentFixture<JsonholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
