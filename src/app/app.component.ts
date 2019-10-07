import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messagingForm: FormGroup;
  name = '';

  constructor() {
    this.messagingForm = new FormGroup({
      'name': new FormControl(name, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }
}
