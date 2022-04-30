import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProductsListComponent } from './smart-products-list.component';

describe('SmartProductsListComponent', () => {
  let component: SmartProductsListComponent;
  let fixture: ComponentFixture<SmartProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
