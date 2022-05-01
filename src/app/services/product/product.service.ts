import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, Subject } from 'rxjs';
import { ProductDefault } from '../../ui-components/molecules/product-default/product-default.component';
import { ProductUnion } from '../../ui-components/organisms/products-list/products-list.component';
import { Cart, CartService } from '../cart/cart.service';
import { ApiProductMock } from './product.mock';

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ApiRating;
  quantity: ApiQuantity;
}

export interface ApiRating {
  rate: number;
  count: number;
}

export interface ApiQuantity {
  min: number;
  step: number;
  max: number;
}

const combineProductsAndCart = (
  products: ProductUnion[],
  cart: Cart
): ProductUnion[] =>
  products.map((product: ProductUnion) => {
    if (product.type === 'product') {
      product.cartInfo = cart.items.find(
        ({ product: { id } }) => product.id === id
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<ProductUnion[]>;

  private productsSubject = new Subject<ApiProduct[]>();

  constructor(cartService: CartService) {
    this.products$ = combineLatest(
      [
        this.productsSubject.pipe(map(apiProductsToProductUnions)),
        cartService.cart$,
      ],
      combineProductsAndCart
    );
  }

  get() {
    // API call
    setTimeout(() => {
      this.productsSubject.next([
        ApiProductMock.PRIMARY,
        ApiProductMock.MAX_CONTENT,
        ApiProductMock.MIN_CONTENT,
        ApiProductMock.LANDSCAPE,
      ]);
    });
  }
}

interface Identifier {
  id: string;
}

interface Normalized<T extends Identifier> {
  byId: { [id: string]: T };
  allIds: string[];
}

const toArray = <T extends Identifier>({ byId, allIds }: Normalized<T>): T[] =>
  allIds.map((id) => byId[id]);

const normalize = <T extends Identifier>(collection: T[]): Normalized<T> =>
  collection.reduce(
    ({ allIds, byId }, t) => ({
      allIds: [...allIds, t.id],
      byId: {
        ...byId,
        [t.id]: t,
      },
    }),
    {
      byId: {},
      allIds: [],
    } as Normalized<T>
  );

const productsNormalized = normalize([
  {
    id: '2443',
    name: 'T-shirt',
    // ...
  },
  // ...
]);

const product = productsNormalized.byId['2443'];

const products = toArray(productsNormalized);
