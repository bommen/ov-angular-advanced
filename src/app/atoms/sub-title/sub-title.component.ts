import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ov-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
