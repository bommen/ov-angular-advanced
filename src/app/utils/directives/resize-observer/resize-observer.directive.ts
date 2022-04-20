import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { distinctUntilChanged, map, Observable, Subscription } from 'rxjs';

type ResizeObserverConfig = Record<string, number>;

@Directive({
  selector: '[ovResizeObserver]',
})
export class ResizeObserverDirective implements OnInit, OnDestroy {
  @Input('ovResizeObserver') config!: ResizeObserverConfig;

  @Output() resize = new EventEmitter<string>();

  private subscription!: Subscription;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    /**
     * Sort decending based on values and not keys.
     */
    const keys = Object.keys(this.config).sort(
      (a, b) => this.config[b] - this.config[a]
    );

    this.subscription = new Observable<number>((observer) => {
      const resizeObserver = new ResizeObserver(([{ contentRect }]) =>
        observer.next(contentRect.width)
      );
      resizeObserver.observe(this.elementRef.nativeElement);
      /**
       * Disconnect the resizeObserver on unsubscribe.
       */
      return () => {
        resizeObserver.disconnect();
      };
    })
      .pipe(
        map(
          (width) => keys.find((key) => this.config[key] <= width) ?? keys[0]
        ),
        distinctUntilChanged()
      )
      .subscribe((key) => this.ngZone.run(() => this.resize.emit(key)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
