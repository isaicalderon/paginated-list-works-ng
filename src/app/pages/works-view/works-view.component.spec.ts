import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksViewComponent } from './works-view.component';

describe('WorksViewComponent', () => {
  let component: WorksViewComponent;
  let fixture: ComponentFixture<WorksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
