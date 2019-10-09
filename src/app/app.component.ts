import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messagingForm: FormGroup;
  outputMessage = '';

  constructor() {
    this.messagingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  onSubmit(): void {
    this.outputMessage = `Olá ${this.messagingForm.get('name').value}!`
  }
}
