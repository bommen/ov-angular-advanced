import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { MessageComponent } from '../../atoms/message/message.component';
import { ProductComponent } from '../product/product.component';
import { ProductOutOfStockComponent } from './product-out-of-stock.component';

describe('ProductOutOfStockComponent', () => {
  let component: ProductOutOfStockComponent;
  let fixture: ComponentFixture<ProductOutOfStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductOutOfStockComponent,
        MockComponents(
          ProductComponent,
          ButtonComponent,
          IconComponent,
          MessageComponent
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
