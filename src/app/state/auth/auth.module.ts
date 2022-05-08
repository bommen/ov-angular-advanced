import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authReducer, AuthState } from './auth.reducer';
import { authFeatureKey } from './auth.selector';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<AuthState>(authFeatureKey, authReducer),
  ],
})
export class AuthModule {}
