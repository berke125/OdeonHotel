import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/USER.service';

@Component({
  selector: 'RoomList-root',
  templateUrl: './RoomList.component.html'
})
export class RoomListComponent implements OnInit
{
  //hotel_users: any=[];
  colorFlag = false;
  hotel_users: any;
  public odano: string = '';
  public no: number;
  constructor(private service: UserService, private router: Router) { }
  AllRooms()
  {
 //this.service.GetRoom(this.odano).subscribe((data:any) => this.hotel_users = data);
    this.service.GetRoom().subscribe((data) => this.hotel_users = data);
  }
  ngOnInit()
  {
    this.AllRooms();
  }

}
