import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ov-sub-title',
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./sub-title.component.scss'],
})
export class SubTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
