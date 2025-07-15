import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCardComponent } from './labor-card.component';

describe('LaborCardComponent', () => {
  let component: LaborCardComponent;
  let fixture: ComponentFixture<LaborCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
