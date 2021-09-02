import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationspageComponent } from './locationspage.component';

describe('LocationspageComponent', () => {
  let component: LocationspageComponent;
  let fixture: ComponentFixture<LocationspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
