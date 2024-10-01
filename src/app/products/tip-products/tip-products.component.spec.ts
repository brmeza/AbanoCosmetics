import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipProductsComponent } from './tip-products.component';

describe('TipProductsComponent', () => {
  let component: TipProductsComponent;
  let fixture: ComponentFixture<TipProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
