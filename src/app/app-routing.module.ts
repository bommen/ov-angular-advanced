import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageChildRoutesModule } from './pages/page-child-routes/page-child-routes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/page-products/page-products.module').then(
            (m) => m.PageProductsModule
          ),
      },
    ]),
    PageChildRoutesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
