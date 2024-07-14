import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Alibou',
      email: 'alibou@mail.com',
      message: 'Hello Alibou!',
    });

    this.insert({
      name: 'John',
      email: 'john@mail.com',
      message: 'Hello John!',
    });

    this.insert({
      name: 'Mary',
      email: 'mary@mail.com',
      message: 'Hello Mary!',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
