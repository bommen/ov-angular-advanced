import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { normalize, Normalized } from '../../utils/normalization.utils';
import { ApiProductMock } from './product.mock';

export interface ApiProduct {
  id: string;
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
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<Normalized<ApiProduct>>;

  private productsSubject = new Subject<Normalized<ApiProduct>>();

  constructor() {
    this.products$ = this.productsSubject.asObservable();
  }

  get() {
    // API call
    setTimeout(() => {
      this.productsSubject.next(
        normalize([
          ApiProductMock.PRIMARY,
          ApiProductMock.MAX_CONTENT,
          ApiProductMock.MIN_CONTENT,
          ApiProductMock.LANDSCAPE,
        ])
      );
    });
  }
}
