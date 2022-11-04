import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  states: any[] = [
    {key: 'Approve All', value: true},
    {key: 'Message All', value: false},
  ]

  constructor() { }

  ngOnInit(): void {}

  filterUsersByActivity(value: any): void {
    console.log(value);
  }

}
