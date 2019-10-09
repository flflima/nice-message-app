import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  readonly messages = [
    'Olá $$!',
    'Como vai $$?',
    'Bela roupa $$!'
  ];

  buildMessage(value: string = ''): string {
    const pos = this.getRandom(0, this.messages.length);
    return this.messages[pos].replace('$$', value);
  }

  private getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
