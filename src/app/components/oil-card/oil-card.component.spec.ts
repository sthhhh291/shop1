import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilCardComponent } from './oil-card.component';

describe('OilCardComponent', () => {
  let component: OilCardComponent;
  let fixture: ComponentFixture<OilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
