import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOutOfStockComponent } from './product-out-of-stock.component';
import { ProductModule } from '../../molecules/product/product.module';
import { MessageModule } from '../../atoms/message/message.module';
import { IconModule } from '../../atoms/icon/icon.module';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
  declarations: [ProductOutOfStockComponent],
  imports: [
    CommonModule,
    ProductModule,
    MessageModule,
    IconModule,
    ButtonModule,
  ],
  exports: [ProductOutOfStockComponent],
})
export class ProductOutOfStockModule {}
