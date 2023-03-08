import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentprojectComponent } from './currentproject.component';

describe('CurrentprojectComponent', () => {
  let component: CurrentprojectComponent;
  let fixture: ComponentFixture<CurrentprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
