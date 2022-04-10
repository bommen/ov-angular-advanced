import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ov-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;

  constructor() {}

  ngOnInit(): void {}
}
