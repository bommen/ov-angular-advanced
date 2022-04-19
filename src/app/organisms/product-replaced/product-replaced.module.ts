import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReplacedComponent } from './product-replaced.component';
import { MessageModule } from '../../atoms/message/message.module';
import { ButtonModule } from '../../atoms/button/button.module';
import { TitleModule } from '../../atoms/title/title.module';

@NgModule({
  declarations: [ProductReplacedComponent],
  imports: [CommonModule, MessageModule, ButtonModule, TitleModule],
  exports: [ProductReplacedComponent],
})
export class ProductReplacedModule {}
