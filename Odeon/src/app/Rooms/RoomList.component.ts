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
  public myModel: string = '1';
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
  EmptyRooms()
  {
    this.service.GetRooms(this.myModel).subscribe((data) => this.hotel_users = data);
  }
  Dates(date1: Date, date2: Date): number
  {
    this.service.GetDate();
    let d1 = new Date(date1); let d2 = new Date(date2);
    let same = d1.getDate() == d2.getDate();
    if (same) return 0;
    
  }
  ngOnInit()
  {
    this.AllRooms();
    this.EmptyRooms();
    
  }

}
