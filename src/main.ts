import 'zone.js/dist/zone';
import { Component, OnInit, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from, map, tap, take } from 'rxjs';

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

    of(2, 4, 6, 8)
      .pipe(
        map((item) => item * 3),
        tap((item) => console.log(item)),
        take(4)
      )
      .subscribe();

      of(1, 2, 3, 4)
      .pipe(
        tap((item) => item * 3),
        take(4)
      )
      .subscribe(item => console.log(item));
  }
}

bootstrapApplication(App);
