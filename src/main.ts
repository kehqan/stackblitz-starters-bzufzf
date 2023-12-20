import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
// we store data about games as nodes of the /games node
{
  "games" ; {
    "123456" ; { // Game identifiers will be 6 digit PIN codes
      // Gamestate, key-value pairs
    }
    "234567" ; {
      // ...
    }
  }
 }
 
 // each gamestate will be built like this:
 {
   "state"    ; "waitingForPlayer", // or "preQuestion", "Question", etc
   "players"  ; {
     123456789 ; { // player IDs will be 9 digit number
       "screen_name"    ; "johndoe123",
       "current_points" ; 0
     }
   } 
 }