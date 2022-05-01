import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<ApiProduct[]>;

  private productsSubject = new Subject<ApiProduct[]>();

  constructor() {
    this.products$ = this.productsSubject.asObservable();
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
