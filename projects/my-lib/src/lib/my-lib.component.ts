import {Component, Input, OnInit} from '@angular/core';
import {Md5} from 'ts-md5';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>{{name}}</p>
    <p>{{md5Name}}</p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() {
  }

  @Input() name = '1222';
  public md5Name = '';

  ngOnInit(): void {
    this.md5Name = Md5.hashStr(this.name);
  }

}
/*


*/
