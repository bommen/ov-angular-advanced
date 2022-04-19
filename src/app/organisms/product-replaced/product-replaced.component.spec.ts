import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReplacedComponent } from './product-replaced.component';

describe('ProductReplacedComponent', () => {
  let component: ProductReplacedComponent;
  let fixture: ComponentFixture<ProductReplacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReplacedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
