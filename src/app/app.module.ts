import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  scan,
  Subject,
} from 'rxjs';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './state/auth/auth.module';
import { SpinnerModule } from './ui-components/atoms/spinner/spinner.module';

/**
 * AppState is empty because we rely on lazy loading pages/features.
 */
export interface AppState {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Fake webshop',
      logOnly: environment.production,
    }),
    AuthModule,
    AppRoutingModule,
    SpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
