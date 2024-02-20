import { AfterViewInit, Component ,OnInit, SkipSelf, ViewChild} from '@angular/core';
import{Room } from './rooms';
import{RoomList } from './rooms'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent,HeaderComponent]
})
export class RoomsComponent  implements OnInit,AfterViewInit{


  hotelname="suriyahotel";
  NumberOfRooms =10;
  hiderooms=false;

  SelectedRoom !:RoomList;
   rooms:Room ={
  availableRooms :10 ,
  BookedRooms:5,
  totalRooms:15
};
roomlist: RoomList[] =[];

//roomservice = new roomservice;
constructor( @SkipSelf() private roomService:RoomsService)
{ 
    this.roomlist = this.roomService.getRooms();
}

Toggle()
{this.hiderooms=!this.hiderooms}

ngOnInit(): void {
  //console.log(this.headerComponent);
  
}
ngAfterViewInit(): void {
  this.headerComponent.title = "he ram";
  
}


selectRoom(room:RoomList){
  this.SelectedRoom= room;
}


@ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
}
