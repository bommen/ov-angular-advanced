import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

export interface Quantity {
  min: number;
  step: number;
  max: number;
}

@Component({
  selector: 'ov-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.scss'],
})
export class QuantityPickerComponent implements OnInit {
  @Input() quantity!: Quantity;

  @Input() showInput = false;

  @Output() selectQuantity = new EventEmitter<number>();

  @ViewChild('input', { static: false, read: ElementRef }) set input(element: {
    nativeElement: HTMLInputElement;
  }) {
    if (element) {
      element.nativeElement.focus();
      element.nativeElement.select();
    }
  }

  value!: number;

  ngOnInit(): void {
    this.value = this.quantity.min;
  }

  submitQuantity() {
    this.selectQuantity.emit(this.value);
  }

  selectChangeQuantity(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    if (value === 'More') {
      this.showInput = true;
    } else {
      this.value = parseInt(value);
    }
  }

  inputChangeQuantity(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.value = parseInt(value);
  }
}
