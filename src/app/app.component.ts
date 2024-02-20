import { AfterViewInit, Component,  ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
//import {RoomsComponent} from './rooms/rooms.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoomsComponent,RouterOutlet,CommonModule,ContainerComponent,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements AfterViewInit{
  // title = 'hostelapp';
  // role = 'Admin';


  @ViewChild('user',{read:ViewContainerRef}) vcr !: ViewContainerRef;

 
  ngAfterViewInit(): void {
    const componentRef= this.vcr.createComponent(RoomsComponent);
  }
}
