import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-choices',
  templateUrl: './menu-choices.component.html',
  styleUrls: ['./menu-choices.component.scss']
})
export class MenuChoicesComponent implements OnInit {

  @Input() option: string;
  constructor() { }

  ngOnInit() {
  }

}
