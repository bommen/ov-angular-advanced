import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { SideDirective } from './shared/side.directive';

@Component({
  selector: 'ov-template-default',
  templateUrl: './template-default.component.html',
  styleUrls: ['./template-default.component.scss'],
})
export class TemplateDefaultComponent implements OnInit, AfterContentInit {
  @ContentChild(SideDirective) side?: SideDirective;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    // console.log(this.side);
  }
}
