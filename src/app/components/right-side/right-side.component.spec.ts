/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RightSideComponent } from './right-side.component';

describe('RightSideComponent', () => {
  let component: RightSideComponent;
  let fixture: ComponentFixture<RightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
