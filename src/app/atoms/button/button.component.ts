import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

export type SupportedType = 'inverted' | 'primary';

@Component({
  selector: 'ov-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() type: SupportedType = 'primary';
  @Input() ariaLabel!: string;
  @Input() disabled = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener(
      'click',
      this.haltDisabledEvents,
      true
    );
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener(
      'click',
      this.haltDisabledEvents
    );
  }

  /**
   *  https://github.com/angular/components/blob/master/src/material/button/button.ts
   */
  haltDisabledEvents = (event: Event): boolean => {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    return true;
  };
}
