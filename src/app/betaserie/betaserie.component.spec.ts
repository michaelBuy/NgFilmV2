import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaserieComponent } from './betaserie.component';

describe('BetaserieComponent', () => {
  let component: BetaserieComponent;
  let fixture: ComponentFixture<BetaserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetaserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
