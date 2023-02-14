import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityoverviewComponent } from './activityoverview.component';

describe('ActivityoverviewComponent', () => {
  let component: ActivityoverviewComponent;
  let fixture: ComponentFixture<ActivityoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
