import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  readonly messages = [
    ''
  ];

  constructor() {
    this.messages = ['1'];
  }
}
