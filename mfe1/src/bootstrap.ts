import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/app.routes';

// Export both AppComponent and ROUTES
export { AppComponent, ROUTES };

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error('Error bootstrapping MFE1:', err));