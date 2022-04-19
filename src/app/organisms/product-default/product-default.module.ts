import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './product-default.component';
import { ProductModule } from '../../molecules/product/product.module';
import { MessageModule } from '../../atoms/message/message.module';
import { IconModule } from '../../atoms/icon/icon.module';
import { ButtonModule } from '../../atoms/button/button.module';
import { QuantityPickerModule } from '../../molecules/quantity-picker/quantity-picker.module';

@NgModule({
  declarations: [ProductDefaultComponent],
  imports: [
    CommonModule,
    ProductModule,
    MessageModule,
    IconModule,
    ButtonModule,
    QuantityPickerModule,
  ],
  exports: [ProductDefaultComponent],
})
export class ProductDefaultModule {}
