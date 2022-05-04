import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { productReducer, ProductState } from './product.reducer';
import { productFeatureKey } from './product.selector';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<ProductState>(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [],
})
export class ProductStateModule {}
