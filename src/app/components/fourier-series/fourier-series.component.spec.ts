import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourierSeriesComponent } from './fourier-series.component';

describe('FourierSeriesComponent', () => {
  let component: FourierSeriesComponent;
  let fixture: ComponentFixture<FourierSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourierSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourierSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
