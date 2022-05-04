import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.actions';
@Component({
  selector: 'ov-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { product } = this.route.snapshot.data;
    if (!product) {
      this.store.dispatch(getProducts({ limit: 6 }));
    }
  }
}
