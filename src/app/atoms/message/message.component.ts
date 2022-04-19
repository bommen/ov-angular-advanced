import { Component, Input, OnInit } from '@angular/core';

export type MessageType = 'ok' | 'warn' | 'error';

@Component({
  selector: 'ov-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() type!: MessageType;

  constructor() {}

  ngOnInit(): void {}
}
