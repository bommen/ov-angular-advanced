import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsListModule } from '../../ui-components/organisms/products-list/products-list.module';
import { SmartProductsListComponent } from './smart-products-list.component';

@NgModule({
  declarations: [SmartProductsListComponent],
  imports: [CommonModule, ProductsListModule],
  exports: [SmartProductsListComponent],
})
export class SmartProductsListModule {}
