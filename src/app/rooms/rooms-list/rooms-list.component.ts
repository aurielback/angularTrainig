import { Component, Input } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'rnd-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})
export class RoomsListComponent {

  @Input() rooms : RoomList[] = [];

  constructor(){

  }

  
}
