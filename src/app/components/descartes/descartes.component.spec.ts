import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartesComponent } from './descartes.component';

describe('DescartesComponent', () => {
  let component: DescartesComponent;
  let fixture: ComponentFixture<DescartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
