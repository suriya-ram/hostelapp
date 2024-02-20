import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }


  roomlist:RoomList[]=[{
    roomNumber:101,
    roomtype: 'deluxe room',
    amenities: 'Air conditioner,Wi-fi',
    price: 500,
    photos:   "https://unsplash.com/photos/a-person-standing-on-top-of-a-sandy-hill-2gVgVf5CNAE",
    checkintime: new Date('11-Nov-2021'),
  
    checkoutime: new Date('11-Nov-2021'),
  
    rating:4.5,
  },
  {  
    roomNumber:102,
    roomtype: 'Ultra-deluxeroom',
    amenities: 'Semi-furnished,Air conditioner,Wi-fi',
    price: 1500,
    photos:   "https://unsplash.com/photos/a-person-standing-on-top-of-a-sandy-hill-2gVgVf5CNAE",
    checkintime: new Date('11-Sep-2021'),
  
    checkoutime: new Date('11-Sep-2021'),
    rating:2.5, 
  
  }]

  getRooms()
  {
   return  this.roomlist;
  }
}
