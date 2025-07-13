import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsCardComponent } from './repairs-card.component';

describe('RepairsCardComponent', () => {
  let component: RepairsCardComponent;
  let fixture: ComponentFixture<RepairsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
