import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algo-result',
  templateUrl: './algo-result.component.html',
  styleUrls: ['./algo-result.component.scss']
})
export class AlgoResultComponent implements OnInit {
  @Input() algo: any;
  constructor() { }
  ngOnInit() {
  }

}
