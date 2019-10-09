import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/services/messages/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messagingForm: FormGroup;
  outputMessage = '';

  readonly messagesService: MessagesService;

  constructor(messagesService: MessagesService) {
    this.messagingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.messagesService = messagesService;
  }

  onSubmit(): void {
    this.outputMessage = this.messagesService.buildMessage(this.messagingForm.get('name').value);
  }
}
