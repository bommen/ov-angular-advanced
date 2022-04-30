import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../atoms/button/button.module';
import { IconModule } from '../../atoms/icon/icon.module';
import { QuantityPickerComponent } from './quantity-picker.component';
import { QuantityOptionsPipe } from './shared/quantity-options.pipe';

@NgModule({
  declarations: [QuantityPickerComponent, QuantityOptionsPipe],
  imports: [CommonModule, ButtonModule, IconModule, ReactiveFormsModule],
  exports: [QuantityPickerComponent],
})
export class QuantityPickerModule {}
