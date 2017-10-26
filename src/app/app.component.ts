import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive = true;

  onclick(event) {
    event.stopPropagation();
    console.log(event);
  }

  clickMe() {
    console.log("i am propogating.")
  }
}
