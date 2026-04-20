import { Component, signal } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback';


@Component({
  selector: 'app-root',
  imports: [FeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('feedback-app');
}
