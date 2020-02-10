import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/USER.service';

@Component({
  selector: 'RoomList-root',
  templateUrl: './RoomList.component.html'
})
export class RoomListComponent implements OnInit
{
  hotel_users: any=[];
  public myModel: string = '1';
  //public odano: string = '';
  //public no: number;
  public isim: string = '';
  
  constructor(private service: UserService, private router: Router) { }
  AllRooms()
  {
 //this.service.GetRoom(this.odano).subscribe((data:any) => this.hotel_users = data);
    this.service.GetRoom().subscribe((data) => this.hotel_users = data);
  }
  EmptyRooms()
  {
    this.service.GetRooms(this.myModel,this.isim).subscribe((data) => this.hotel_users = data);
  }
  ngOnInit()
  {
    this.AllRooms();
    this.EmptyRooms();
    
  }

}
