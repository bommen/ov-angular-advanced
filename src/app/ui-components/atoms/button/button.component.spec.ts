import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  @Component({
    selector: 'ov-host',
    template: `<ov-button><div>Test</div></ov-button>`,
  })
  class HostComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, HostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  const button = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('button')!;

  it('should render a primary button by default', () => {
    fixture.detectChanges();
    expect(button().classList).toContain('primary');
  });

  it('should render the correct button type', () => {
    component.type = 'inverted';
    fixture.detectChanges();
    expect(button().classList).toContain('inverted');
  });

  it('should set the aria label', () => {
    component.ariaLabel = 'ariaLabel';
    fixture.detectChanges();
    expect(button().ariaLabel).toEqual('ariaLabel');
  });

  it('should set the disabled state', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(button().disabled).toBeTrue();
  });

  describe('Content', () => {
    let host: ComponentFixture<HostComponent>;

    beforeEach(async () => {
      host = TestBed.createComponent(HostComponent);
    });

    const button = () => host.debugElement.query(By.directive(ButtonComponent));
    const content = () => host.nativeElement.querySelector('div');

    it('should emit click event', () => {
      const clickSpy = jasmine.createSpy();

      button().nativeElement.onclick = clickSpy;

      host.detectChanges();

      content().click();

      expect(clickSpy).toHaveBeenCalledTimes(1);
    });

    it('should prevent click event if disabled', () => {
      const clickSpy = jasmine.createSpy();
      const { nativeElement, componentInstance } = button();
      nativeElement.onclick = clickSpy;
      componentInstance.disabled = true;

      host.detectChanges();

      content().click();

      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('API', () => {
    it('should support type', () => {
      const types: Record<ButtonComponent['type'], true> = {
        primary: true,
        inverted: true,
      };
      expect(types).toBeTruthy();
    });
  });
});
