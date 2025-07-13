import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesCardComponent } from './phones-card.component';

describe('PhonesCardComponent', () => {
  let component: PhonesCardComponent;
  let fixture: ComponentFixture<PhonesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
