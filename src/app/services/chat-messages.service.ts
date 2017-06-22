import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatMessage } from '../models';

@Injectable()
export class ChatMessagesService {

  constructor(private _af: AngularFireDatabase) { }

  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]> {
    return this._af.list('/messages/' + roomId, {
      query: {
        limitToLast: 4
      }
    });
  }

  createNewMessage(roomId: string, newMessage: ChatMessage): Promise<any> {
    newMessage.created = new Date().toUTCString();
    return new Promise((resolve) => {
      this._af.list('messages/' + roomId).push(newMessage).then(() => {
        resolve();
      });
    });
  }

}
