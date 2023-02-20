import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisprojectComponent } from './thisproject.component';

describe('ThisprojectComponent', () => {
  let component: ThisprojectComponent;
  let fixture: ComponentFixture<ThisprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
