import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }
  algoForm: FormGroup;
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
        this.algo.accuracy = JSON.parse((resp as any)._body)[0];
        this.algo.name = "Descisio Tree";
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

}
