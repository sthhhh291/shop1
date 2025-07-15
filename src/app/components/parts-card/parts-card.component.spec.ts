import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCardComponent } from './parts-card.component';

describe('PartsCardComponent', () => {
  let component: PartsCardComponent;
  let fixture: ComponentFixture<PartsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
