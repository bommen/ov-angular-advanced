import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ov-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() href!: string;
  constructor() {}

  ngOnInit(): void {}
}
