import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaySubject, Subject } from 'rxjs';
import { testUtils, TestUtils } from '../../../utils/test.utils';
import { IfBreakpointDirective } from '../../utils/directives/if-breakpoint/if-breakpoint.directive';
import {
  Breakpoint,
  BreakpointService,
} from '../../utils/services/breakpoint/breakpoint.service';
import { SideDirective } from './shared/side.directive';
import { TemplateDefaultComponent } from './template-default.component';

describe('TemplateDefaultComponent', () => {
  let utils: TestUtils;
  let breakpoint$: Subject<Breakpoint>;

  @Component({
    selector: 'ov-host',
    template: `
      <ov-template-default>
        <div header>Header</div>
        <div main>Main</div>
        <div footer>Footer</div>
      </ov-template-default>
    `,
  })
  class Host {}

  @Component({
    selector: 'ov-host',
    template: `
      <ov-template-default>
        <ng-template ovSide>
          <div>Side</div>
        </ng-template>
      </ov-template-default>
    `,
  })
  class HostWithSide {}

  beforeEach(async () => {
    breakpoint$ = new ReplaySubject<Breakpoint>(1);
    await TestBed.configureTestingModule({
      declarations: [
        HostWithSide,
        Host,
        TemplateDefaultComponent,
        IfBreakpointDirective,
        SideDirective,
      ],
      providers: [
        {
          provide: BreakpointService,
          useValue: { breakpoint$ },
        },
      ],
    }).compileComponents();
  });

  describe('Default', () => {
    let fixture: ComponentFixture<Host>;

    beforeEach(() => {
      fixture = TestBed.createComponent(Host);
      utils = testUtils(fixture);
      fixture.detectChanges();
    });

    it('should support a header slot', () => {
      expect(utils.querySelector('.header [header]').textContent).toEqual(
        'Header'
      );
    });

    it('should support a main slot', () => {
      expect(utils.querySelector('.main [main]').textContent).toEqual('Main');
    });

    it('should support a footer slot', () => {
      expect(utils.querySelector('.footer [footer]').textContent).toEqual(
        'Footer'
      );
    });

    it('should not render the sidebar slot', () => {
      expect(utils.querySelector('.side')).toBeNull();
    });
  });

  describe('With sidebar', () => {
    let fixture: ComponentFixture<HostWithSide>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostWithSide);
      utils = testUtils(fixture);
    });

    (['xs', 'sm', 'md'] as Breakpoint[]).forEach((breakpoint) =>
      it(`should not render a sidebar on ${breakpoint}`, () => {
        breakpoint$.next(breakpoint);
        fixture.detectChanges();
        expect(utils.querySelector('.side')).toBeNull();
      })
    );

    (['lg', 'xl'] as Breakpoint[]).forEach((breakpoint) =>
      it(`should not render a sidebar on ${breakpoint}`, () => {
        breakpoint$.next(breakpoint);
        fixture.detectChanges();
        expect(utils.querySelector('.side')).not.toBeNull();
      })
    );
  });
});
