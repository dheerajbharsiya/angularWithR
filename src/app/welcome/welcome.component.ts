import { Component, OnInit, Sanitizer, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { GraphContainerComponent } from '../graph-container/graph-container.component';
// import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private http: Http, private factoryResolver: ComponentFactoryResolver) { }
  @ViewChild('dynamic', { 
    read: ViewContainerRef 
  }) viewContainerRef: ViewContainerRef
  algoForm: FormGroup;
  graphLocation: string;
  currentUrl: string = "";
  public algo: { accuracy: number, name: string } = {
    accuracy: 0,
    name: ''
  };
  ngOnInit() {
    this.algoForm = new FormGroup({
      'fileUpload': new FormControl(null, [Validators.required])
    });
  }

  /* onFormSubmit = () => {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/?docName=' + documentName).subscribe((resp => {
        console.log(resp);
      }));
    }

  } */

  onRandomForest() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/?docName=' + documentName).subscribe((resp => {
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "Random Forest";
      }));
    }
  }

  onDescisionTree() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/descisionTree/?docName=' + documentName).subscribe((resp => {
        console.log(resp);
        // this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        // this.algo.name = "Descisio Tree";
       // this.addGraphComponent();
      }));
    }
  }

  onKnn() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/knnProccess/?docName=' + documentName).subscribe((resp => {
        console.log(resp);
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "K Nearest Neighbour";
      }));
    }
  }

  testHigh() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/testGraph/').subscribe((resp => {
        console.log(resp);
        //this.graphLocationCreater("http://localhost:8000/testGraph/");        // this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        // this.algo.name = "K Nearest Neighbour";
        //this.currentUrl = "http://localhost:8000/testGraph/";
      this.addGraphComponent();
      }));
    }
  }

  addGraphComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(GraphContainerComponent);
    const component = factory.create(this.viewContainerRef.parentInjector)
    this.viewContainerRef.insert(component.hostView)
  }

  // graphLocationCreater(url) {
  //   if(!url) {
  //     url = "";
  //   }
  //   return this.sanit.bypassSecurityTrustResourceUrl("http://localhost:8000/testGraph/");
  // }

}
