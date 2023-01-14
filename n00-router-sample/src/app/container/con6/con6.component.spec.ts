import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Con6Component } from './con6.component';

describe('Con6Component', () => {
  let component: Con6Component;
  let fixture: ComponentFixture<Con6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Con6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Con6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
