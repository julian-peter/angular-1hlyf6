import 'zone.js/dist/zone';
import { Component, OnInit, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe({
      next: (item) => console.log(item),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}

bootstrapApplication(App);
