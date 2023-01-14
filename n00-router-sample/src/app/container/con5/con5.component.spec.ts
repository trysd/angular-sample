import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Con5Component } from './con5.component';

describe('Con5Component', () => {
  let component: Con5Component;
  let fixture: ComponentFixture<Con5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Con5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Con5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
