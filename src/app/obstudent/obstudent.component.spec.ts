import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstudentComponent } from './obstudent.component';

describe('ObstudentComponent', () => {
  let component: ObstudentComponent;
  let fixture: ComponentFixture<ObstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
