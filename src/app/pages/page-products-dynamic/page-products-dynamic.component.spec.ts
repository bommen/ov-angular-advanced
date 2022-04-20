import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageProductsDynamicComponent } from './page-products-dynamic.component';

describe('PageProductsDynamicComponent', () => {
  let component: PageProductsDynamicComponent;
  let fixture: ComponentFixture<PageProductsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageProductsDynamicComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
