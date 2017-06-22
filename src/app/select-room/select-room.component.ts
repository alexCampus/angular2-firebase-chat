import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'fc-select-room',
  templateUrl: 'select-room.component.html',
  styleUrls: ['select-room.component.css']
})
export class SelectRoomComponent implements OnInit {
  rooms: FirebaseListObservable<any>;

  constructor(private _af: AngularFireDatabase) { }

  ngOnInit() {
    this.rooms = this._af.list('/rooms');

  
  }

}
