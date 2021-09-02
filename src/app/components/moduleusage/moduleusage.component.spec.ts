import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleusageComponent } from './moduleusage.component';

describe('ModuleusageComponent', () => {
  let component: ModuleusageComponent;
  let fixture: ComponentFixture<ModuleusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleusageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
