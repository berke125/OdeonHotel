import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Odeon'
  title2 = JSON.parse(localStorage.getItem('User'));
  constructor() { }

  ngOnInit() {
  }

}
