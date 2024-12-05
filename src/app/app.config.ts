import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { DecimalPipe } from '@angular/common';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoaderInterceptor } from './shared/interceptor/loader-interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    DecimalPipe,
  ]
  
};

