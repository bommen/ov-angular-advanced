import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListDynamicComponent } from './products-list-dynamic.component';

describe('ProductsListDynamicComponent', () => {
  let component: ProductsListDynamicComponent;
  let fixture: ComponentFixture<ProductsListDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
