import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChildRoutesComponent } from './page-child-routes.component';

describe('PageChildRoutesComponent', () => {
  let component: PageChildRoutesComponent;
  let fixture: ComponentFixture<PageChildRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChildRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChildRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
