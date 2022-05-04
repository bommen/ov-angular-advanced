import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { productReducer, ProductState } from './product.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<ProductState>('product', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [],
})
export class ProductStateModule {}
