import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
