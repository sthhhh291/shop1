import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatesCardComponent } from './estimates-card.component';

describe('EstimatesCardComponent', () => {
  let component: EstimatesCardComponent;
  let fixture: ComponentFixture<EstimatesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
