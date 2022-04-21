import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ProductDefault,
  ProductDefaultComponent,
} from '../../molecules/product-default/product-default.component';
import {
  ProductOutOfStock,
  ProductOutOfStockComponent,
} from '../../molecules/product-out-of-stock/product-out-of-stock.component';
import {
  ProductReplaced,
  ProductReplacedComponent,
} from '../../molecules/product-replaced/product-replaced.component';
import { ProductUnion } from '../products-list/products-list.component';
import { ProductsHostDirective } from './shared/products-host.directive';

interface AddToCartEvent {
  product: ProductDefault;
  quantity: number;
}

@Component({
  selector: 'ov-products-list-dynamic',
  templateUrl: './products-list-dynamic.component.html',
  styleUrls: ['./products-list-dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListDynamicComponent implements OnInit {
  @Input() products!: ProductUnion[];

  @Output() addToCart = new EventEmitter<AddToCartEvent>();

  @ViewChildren(ProductsHostDirective)
  productsHosts!: QueryList<ProductsHostDirective>;

  productIntersectionMargin = '-200px 0px -350px 0px';

  private subscriptions = new Subscription();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.productsHosts.forEach(
      ({ viewContainerRef, ovProductsHost: product }) => {
        viewContainerRef.clear();

        if (product.type === 'product') {
          this.createProductDefault(viewContainerRef, product);
          return;
        }

        if (product.type === 'product-replaced') {
          this.createProductReplaced(viewContainerRef, product);
          return;
        }

        if (product.type === 'product-out-of-stock') {
          this.createProductOutOfStock(viewContainerRef, product);
          return;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  productIntersect({ target, isIntersecting }: IntersectionObserverEntry) {
    if (isIntersecting) {
      target.classList.add('visible');
    } else {
      target.classList.remove('visible');
    }
  }

  private createProductDefault(ref: ViewContainerRef, product: ProductDefault) {
    const { instance } = ref.createComponent(ProductDefaultComponent!);
    /**
     * Handle inputs
     */
    instance.product = product;

    /**
     * Handle outputs
     */
    this.subscriptions.add(
      instance.addToCart.subscribe((quantity) =>
        this.addToCart.emit({
          product,
          quantity,
        })
      )
    );
  }

  private createProductReplaced(
    ref: ViewContainerRef,
    product: ProductReplaced
  ) {
    const { instance } = ref.createComponent(ProductReplacedComponent!);
    /**
     * Handle inputs
     */
    instance.product = product;
  }

  private createProductOutOfStock(
    ref: ViewContainerRef,
    product: ProductOutOfStock
  ) {
    const { instance } = ref.createComponent(ProductOutOfStockComponent!);
    /**
     * Handle inputs
     */
    instance.product = product;
  }
}
