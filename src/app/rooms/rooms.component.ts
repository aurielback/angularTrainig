import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RondelList, Room, RoomList } from './room';

@Component({
  selector: 'rnd-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit{

  hotelName: string = 'Hilton';

  numberOfRooms: number = 0;

  hideRooms = false;
  hideRondel = false;
  hidenRondelList = false;

  rondel = {
    firstName: 'Rondel',
    secondName: 'Kromel'
  }

  rooms: Room = {
    totalRooms : 30,
    availableRooms : 10,
    bookedRooms : 20
  }

  roomList: RoomList[] = [];

  rondelList: RondelList[] = [];

  selectedRoom!: RoomList;
  selectedRondel!: RondelList;


  constructor() {
    this.rondelList =[{
      rondelNumber: 1,
      rondelFirstName: 'Jakub1',
      rondelLastName: 'Romel',
      rondelAge: 26,
      rondelRating: 1.6
    },
    {
      rondelNumber: 2,
      rondelFirstName: 'Jakub2',
      rondelLastName: 'Romel',
      rondelAge: 27,
      rondelGoToNextLevel: true,
      rondelRating: 7.6
    },
    {
      rondelNumber: 3,
      rondelFirstName: 'Jakub3',
      rondelLastName: 'Romel',
      rondelAge: 28,
      rondelRating: 10.0
    },
    {
      rondelNumber: 3,
      rondelFirstName: 'Jakub3',
      rondelLastName: 'Romel',
      rondelAge: 28,
      rondelRating: 3.8
    },
    {
      rondelNumber: 3,
      rondelFirstName: 'Jakub3',
      rondelLastName: 'Romel',
      rondelAge: 28,
      rondelRating: 4.6
    },
    {
      rondelNumber: 3,
      rondelFirstName: 'Jakub3',
      rondelLastName: 'Romel',
      rondelAge: 28,
      rondelRating: 2.6
    }];

    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Debil',
      price: 20,
      photos: 'debil.pl',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2022')
    },
    {
      roomNumber: 2,
      roomType: 'Biedacki Room',
      amenities: 'Mee',
      price: 20,
      photos: 'dedasdasdbil.pl',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2022')
    },
    {
      roomNumber: 3,
      roomType: 'Sredni Room',
      amenities: 'Kee',
      price: 20,
      photos: 'dsa.pl',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2022')
    }];
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fnToggle() {
    this.hideRooms = !this.hideRooms;
  }

  fnToggle2() {
    this.hideRondel = !this.hideRondel;
  }

  onRondel(){
    this.hidenRondelList = !this.hidenRondelList;
  }

  selectRoom(room : RoomList){
    this.selectedRoom = room;
  }

  selectRondel(rondel : RondelList){
    this.selectedRondel = rondel;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 10, 
      roomType: 'HiperSuperDeluxe',
      amenities: 'exampleAmeniti',
      price: 15000,
      photos: 'photo',
      checkInTime: new Date('10-Nov-20'),
      checkOutTime: new Date('11-Jan-30')
    }
    console.log(room);
    this.roomList = [...this.roomList, room];
  }
}
