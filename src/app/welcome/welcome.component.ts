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
  @ViewChild('dynamicSource', {
    read: ViewContainerRef
  }) viewContainerRefSoruce: ViewContainerRef
  @ViewChild('dynamicPredicted', {
    read: ViewContainerRef
  }) viewContainerRefPredicted: ViewContainerRef
  algoForm: FormGroup;
  graphLocation: string;
  currentUrl: string = "";
  submitted: boolean;
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
      this.http.get('http://localhost:8000/randomForest/accu/').subscribe((resp => {
        console.log(resp);
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "Random Forest";
        this.addGraphComponent("http://localhost:8000/randomForest/test/", "http://localhost:8000/randomForest/predict/");
      }));
    }
  }

  onDescisionTree() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      //      this.http.get('http://localhost:8000/descisionTree/accu?docName=' + documentName).subscribe((resp => {
      this.http.get('http://localhost:8000/descisionTree/accu/').subscribe((resp => {
        console.log(resp);
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "Descisio Tree";
        this.addGraphComponent("http://localhost:8000/descisionTree/test/", "http://localhost:8000/descisionTree/predict/");
      }));
    }
    this.submitted = true;
  }

  onKnn() {
    if (this.algoForm.valid) {
      //let myParams = new URLSearchParams();
      let documentName = (this.algoForm.value.fileUpload.replace(/^.*\\/, ""));
      // this.router.navigate(['/welcome']);
      this.http.get('http://localhost:8000/knnProccess/accu/').subscribe((resp => {
        console.log(resp);
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "Descisio Tree";
        this.addGraphComponent("http://localhost:8000/knnProccess/test/", "http://localhost:8000/knnProccess/predict/");
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
        // this.addGraphComponent();
      }));
    }
  }

  addGraphComponent(urlSource, urlPredicted) {
    /* source data graph */
    if (this.viewContainerRefPredicted) {
      this.viewContainerRefPredicted.clear();
    }
    if (this.viewContainerRefSoruce) {
      this.viewContainerRefSoruce.clear();
    }
    const factory = this.factoryResolver.resolveComponentFactory(GraphContainerComponent);
    const component = factory.create(this.viewContainerRefSoruce.parentInjector);
    this.viewContainerRefSoruce.insert(component.hostView);
    component.instance.sourceUrl = urlSource;
    component.instance.typeOfGraph = "Test Data";

    /* predicted data graph */
    const factoryPred = this.factoryResolver.resolveComponentFactory(GraphContainerComponent);
    const componentPred = factoryPred.create(this.viewContainerRefPredicted.parentInjector);
    this.viewContainerRefPredicted.insert(componentPred.hostView);
    componentPred.instance.sourceUrl = urlPredicted;
    componentPred.instance.typeOfGraph = "Predicted Data";
  }

  // graphLocationCreater(url) {
  //   if(!url) {
  //     url = "";
  //   }
  //   return this.sanit.bypassSecurityTrustResourceUrl("http://localhost:8000/testGraph/");
  // }

}
