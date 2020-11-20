import { Component, OnInit } from '@angular/core';
import { flyInOut ,expand} from '../animation/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
  ,
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand(),
    ]
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
