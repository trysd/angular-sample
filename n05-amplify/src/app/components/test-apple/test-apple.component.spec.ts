import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppleComponent } from './test-apple.component';

describe('TestAppleComponent', () => {
  let component: TestAppleComponent;
  let fixture: ComponentFixture<TestAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAppleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
