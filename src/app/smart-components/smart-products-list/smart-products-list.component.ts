import { AfterViewInit, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import {
  ApiProduct,
  ProductService
} from '../../services/product/product.service';
import { ProductDefault } from '../../ui-components/molecules/product-default/product-default.component';
import {
  AddToCartEvent,
  ProductUnion
} from '../../ui-components/organisms/products-list/products-list.component';

const apiProductToProduct = ({
  category,
  ...apiProduct
}: ApiProduct): ProductDefault => ({
  ...apiProduct,
  subtitle: category,
  type: 'product',
  isLimited: apiProduct.quantity.max / apiProduct.quantity.step < 6,
});

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit, AfterViewInit {
  products$!: Observable<ProductUnion[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products$ = combineLatest([
      this.productService.products$,
      this.cartService.cart$,
    ]).pipe(
      map(([products, cart]) =>
        ['1', '2', '3', '4'].map((id) => {
          const apiProduct = products.byId[id];
          const product = apiProductToProduct(apiProduct);
          product.cartInfo = cart.products.byId[product.id];
          return product;
        })
      )
    );
  }

  ngAfterViewInit(): void {
    this.productService.get();
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {
    this.cartService.add(product, quantity);
  }
}

