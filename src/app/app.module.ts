import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessagesService } from './services';
import { NavbarComponent } from './navbar/navbar.component';

const firebaseConfig = {
  apiKey: "*********************",
    authDomain: "****************",
    databaseURL: "****************",
    projectId: "****************",
    storageBucket: "****************",
    messagingSenderId: "****************"
};

@NgModule({
  declarations: [
    AppComponent,
    SelectRoomComponent,
    ChatComponent,
    ChatMessageFormComponent,
    ChatMessageListComponent,
    ChatMessageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SelectRoomComponent
      },
      {
        path: 'chat/:roomId',
        component: ChatComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
   MaterialModule
  ],
  providers: [
    ChatMessagesService, AngularFireDatabase
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
