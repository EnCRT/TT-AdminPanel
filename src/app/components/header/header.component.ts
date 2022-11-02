import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  systemName: string = 'Dev';
  userName: string = 'GR Admin';

  constructor() { }

  ngOnInit(): void {
  }

}
