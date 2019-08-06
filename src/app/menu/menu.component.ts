import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  option = 'breakfast';
  constructor() { }

  ngOnInit() {
  }

  setOption(option)
  {
    this.option = option;
  }

}
