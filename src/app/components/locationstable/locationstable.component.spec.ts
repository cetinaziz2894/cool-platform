import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationstableComponent } from './locationstable.component';

describe('LocationstableComponent', () => {
  let component: LocationstableComponent;
  let fixture: ComponentFixture<LocationstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
