import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './ui-components/atoms/spinner/spinner.component';
import { LoadingEvent, PageLoaderService } from './utils/page-loader.service';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loadingEvents: Subject<LoadingEvent>;

  beforeEach(async () => {
    loadingEvents = new Subject();
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MockComponent(SpinnerComponent)],
      providers: [
        {
          provide: PageLoaderService,
          useValue: {
            loading$: loadingEvents,
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const getSpinner = (): SpinnerComponent =>
    fixture.debugElement.query(By.directive(SpinnerComponent))
      ?.componentInstance ?? null;

  const getRouter = () => fixture.nativeElement.querySelector('router-outlet');

  it('should render a component', () => {
    expect(getRouter()).not.toBeNull();
  });

  describe('When loading', () => {
    beforeEach(() => {
      loadingEvents.next('start');
      fixture.detectChanges();
    });

    it('should not render a component', () => {
      expect(getRouter()).toBeNull();
    });

    it('should show a spinner', () => {
      expect(getSpinner()).not.toBeNull();
    });

    it("should render text if it's taking too long", () => {
      loadingEvents.next('timeout');
      fixture.detectChanges();

      expect(getSpinner().text).toEqual(component.loadingText);
    });

    it('should stop loading when the page is ready', () => {
      loadingEvents.next('end');
      fixture.detectChanges();
      expect(getSpinner()).toBeNull();
      expect(getRouter()).not.toBeNull();
    });
  });
});
