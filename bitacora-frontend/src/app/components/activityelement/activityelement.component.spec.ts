import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityelementComponent } from './activityelement.component';

describe('ActivityelementComponent', () => {
  let component: ActivityelementComponent;
  let fixture: ComponentFixture<ActivityelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
