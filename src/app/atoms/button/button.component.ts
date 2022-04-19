import { Component, Input, OnInit } from '@angular/core';

export type SupportedType = 'inverted' | 'primary';

@Component({
  selector: 'ov-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: SupportedType = 'primary';
  @Input() ariaLabel!: string;

  constructor() {}

  ngOnInit(): void {}
}
