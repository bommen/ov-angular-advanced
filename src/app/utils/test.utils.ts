import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const testUtils = (fixture: ComponentFixture<any>) => ({
  debugElement: (type: Type<any>): DebugElement =>
    fixture.debugElement.query(By.directive(type)),
  component: <T>(type: Type<T>): T =>
    fixture.debugElement.query(By.directive(type))?.componentInstance ?? null,
  components: <T>(type: Type<T>): T[] =>
    fixture.debugElement
      .queryAll(By.directive(type))
      ?.map(({ componentInstance }) => componentInstance),
  querySelector: <T extends HTMLElement>(query: string): T =>
    fixture.nativeElement.querySelector(query),
  querySelectorAll: <T extends HTMLElement>(query: string): T[] =>
    fixture.nativeElement.querySelectorAll(query),
  inputValue: (input: HTMLInputElement, value: string) => {
    input.value = value;
    input.dispatchEvent(new Event('input'));
  },
  changeValue: (
    element: Pick<HTMLSelectElement, 'dispatchEvent' | 'value'>,
    value: string
  ) => {
    element.value = value;
    element.dispatchEvent(new Event('change'));
  },
});

export type TestUtils = ReturnType<typeof testUtils>;
// export const debugElement = (fixture) =>

// export const componentInstance = <T>(type: Type<T>): T =>
// debugElement(type).componentInstance;
