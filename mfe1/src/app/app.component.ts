import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="mfe1-container">
      <h2>MFE1 Remote App</h2>
      <p>This is loaded via Native ESM Federation</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .mfe1-container {
      padding: 20px;
      border: 2px solid #3f51b5;
      border-radius: 8px;
      margin: 20px;
    }
    .title, .description {
      font-size: 16px;
      font-weight: normal;
      margin: 8px 0;
    }
  `]
})
export class AppComponent {
}
