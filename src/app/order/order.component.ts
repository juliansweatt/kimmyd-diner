import { Component, OnInit } from '@angular/core';

interface BusinessHours {
  start_hour: Number,
  start_min: Number,
  stop_hour: Number,
  stop_min: Number
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  // Note, UTC hours +4h EST time (Ex: 9am EST = 13 UTC)
  hours: BusinessHours = {
    start_hour: 13,
    start_min: 0,
    stop_hour: 17,
    stop_min: 30
  }

  constructor() { }

  ngOnInit() {
  }

  isOpen(hours: BusinessHours) {
    var date = new Date();
    new Date().getUTCMinutes()
    if(date.getUTCHours() >= hours.start_hour && date.getUTCHours() <= hours.stop_hour) {
      if(date.getUTCMinutes() >= hours.start_min && date.getUTCMinutes() <= hours.stop_min) {
        return true;
      }
    }
    return false;
  }
}
