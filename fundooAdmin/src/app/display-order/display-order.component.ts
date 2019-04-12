import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.scss']
})
export class DisplayOrderComponent implements OnInit {

  constructor() { }
  @Input() card;
  @Input() index;
  ngOnInit() {
  }

}
