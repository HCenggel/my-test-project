import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<lib-my-lib [name]="name"></lib-my-lib>'
})
export class AppComponent implements OnInit {
  public name = 'Tom - ';

  ngOnInit(): void {
    this.name += (Math.random() * 1000).toFixed(0);
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}