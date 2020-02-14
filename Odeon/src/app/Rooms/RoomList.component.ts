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
  public myModel: string = '';
  //public odano: string = '';
  //public no: number;
  public isim: string = '';
  public sayac: number = 0;
  constructor(private service: UserService, private router: Router) { }
  AllRooms()
  {
    //this.service.GetRoom(this.odano).subscribe((data:any) => this.hotel_users = data);
    this.service.GetRoom().subscribe((data) => { this.hotel_users = data; this.Bos_Oda_Saydir() });
  }
  EmptyRooms()
  {
    this.service.GetRooms(this.myModel, this.isim).subscribe((data) => this.hotel_users = data);

  }
  Bos_Oda_Saydir()
  {
    this.sayac = 0;
    for (let i = 0; i < this.hotel_users.length; i++) {

      if (this.hotel_users[i].No == 0) {
        this.sayac++;
      }
    }
  }
  ngOnInit()
  {
    this.AllRooms();
    this.EmptyRooms();
    
  }

}
