import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingBoardComponent } from './shipping-board.component';

describe('ShippingBoardComponent', () => {
  let component: ShippingBoardComponent;
  let fixture: ComponentFixture<ShippingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
