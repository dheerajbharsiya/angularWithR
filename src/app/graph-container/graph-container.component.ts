import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-graph-container',
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss']
})
export class GraphContainerComponent implements OnInit {
  @Input() sourceUrl: any;
  @Input() typeOfGraph: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sourceUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceUrl);
  }

}
