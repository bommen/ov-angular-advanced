import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent, MockPipe, ngMocks } from 'ng-mocks';
import { IconComponent } from '../icon/icon.component';

import { RatingComponent } from './rating.component';
import { Star } from './shared/star.service';
import { StarsPipe } from './shared/stars.pipe';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let stars: Star[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RatingComponent,
        MockPipe(StarsPipe, () => stars),
        MockComponent(IconComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
  });

  const iconDebugElements = () =>
    fixture.debugElement.queryAll(By.directive(IconComponent));

  const icons = (): IconComponent[] =>
    iconDebugElements().map(({ componentInstance }) => componentInstance);

  it('should pass the rate to the stars pipe', () => {
    component.rate = 0;
    const pipe = ngMocks.findInstance(StarsPipe);
    spyOn(pipe, 'transform');
    fixture.detectChanges();
    expect(pipe.transform).toHaveBeenCalledOnceWith(0);
  });

  it('should render 5 empty stars', () => {
    stars = [0, 0, 0, 0, 0];
    fixture.detectChanges();
    expect(icons().every(({ icon }) => icon === 'star-o')).toBe(true);
  });

  it('should render 5 full stars', () => {
    stars = [1, 1, 1, 1, 1];
    fixture.detectChanges();
    expect(icons().every(({ icon }) => icon === 'star')).toBe(true);
  });

  it('should render 2 full, 1 half and 2 empty stars', () => {
    stars = [1, 1, 0.5, 0, 0];
    fixture.detectChanges();
    expect(
      icons().every(({ icon }, index) => {
        if (index < 2) return icon === 'star';
        if (index === 2) return icon === 'star-half-o';
        return 'star-o';
      })
    ).toBe(true);
  });

  it('should set a custom orange color', () => {
    stars = [0, 0, 0, 0, 0];
    fixture.detectChanges();
    expect(
      iconDebugElements().every(
        ({ componentInstance, nativeElement }) =>
          componentInstance.color === 'none' &&
          nativeElement.style.color === 'orange'
      )
    ).toBe(true);
  });

  it('should set a size of xs', () => {
    stars = [0, 0, 0, 0, 0];
    fixture.detectChanges();
    expect(icons().every(({ size }) => size === 'xs')).toBe(true);
  });

  it('should the count', () => {
    component.count = 100;
    fixture.detectChanges();
    const countSpan: HTMLSpanElement =
      fixture.nativeElement.querySelector('.count');
    expect(countSpan.innerText).toEqual('(100)');
  });
});
