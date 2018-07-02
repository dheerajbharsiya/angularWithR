import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onFormSubmit = () => {
    if (this.signInForm.valid) {
      let myParams = new URLSearchParams();

      let options = new RequestOptions({ params: JSON.stringify(this.signInForm.value) });
      // this.router.navigate(['/welcome']);
      this.http.get('https://api.myjson.com/bins/lhwvq', options).subscribe((resp => {
        console.log(resp);
      }));
    }

  }

}
