import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'example-multiple-directive-app';  
  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl("")
  });

  constructor() {
  }

  ngOnInit(): void {
    this.nestedForm.valueChanges.subscribe(v => console.log(v))
  }
}
