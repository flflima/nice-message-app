import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('MessagesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });

  it(`should return a non empty message string`, () => {
    const service: MessagesService = new MessagesService();
    const message: string = service.buildMessage();
    expect(message.trim()).not.toEqual('');
  });

  it(`should return a non empty message string contaning 'Jose'`, () => {
    const service: MessagesService = new MessagesService();
    const message: string = service.buildMessage('Jose');
    expect(message.trim()).toContain('Jose');
  });
});
