import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { IconModule } from 'src/app/atoms/icon/icon.module';
import { QuantityPickerComponent } from './quantity-picker.component';
import { ToQuantityOptionsPipe } from './shared/to-quantity-options.pipe';

@NgModule({
  declarations: [QuantityPickerComponent, ToQuantityOptionsPipe],
  imports: [CommonModule, ButtonModule, IconModule, ReactiveFormsModule],
  exports: [QuantityPickerComponent],
})
export class QuantityPickerModule {}
