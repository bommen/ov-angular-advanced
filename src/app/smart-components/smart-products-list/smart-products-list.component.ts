import { AfterViewInit, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Cart, CartService } from '../../services/cart/cart.service';
import {
  ApiProduct,
  ProductService,
} from '../../services/product/product.service';
import { ProductDefault } from '../../ui-components/molecules/product-default/product-default.component';
import {
  AddToCartEvent,
  ProductUnion,
} from '../../ui-components/organisms/products-list/products-list.component';

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
    this.products$ = combineLatest(
      [
        this.productService.products$.pipe(map(apiProductsToProductUnions)),
        this.cartService.cart$,
      ],
      combineProductsAndCart
    );
  }

  ngAfterViewInit(): void {
    this.productService.get();
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {
    this.cartService.add(product, quantity);
  }
}

const combineProductsAndCart = (
  products: ProductUnion[],
  cart: Cart
): ProductUnion[] =>
  products.map((product: ProductUnion) => {
    if (product.type === 'product') {
      product.cartInfo = cart.items.find(
        ({ product: id }) => product.id === id
      );
    }
    return product;
  });

const apiProductsToProductUnions = (
  apiProducts: ApiProduct[]
): ProductUnion[] =>
  apiProducts.map(
    ({ category, ...apiProduct }): ProductDefault => ({
      ...apiProduct,
      subtitle: category,
      type: 'product',
      isLimited: apiProduct.quantity.max / apiProduct.quantity.step < 6,
    })
  );
