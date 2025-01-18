import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  /**
   * Exit from the Application
   */
  exitApplication() {
 
    //window.location.href = 'https://www.msn.com/'; // Navigates to a blank page
    window.location.href = window.location.origin
  }
}
