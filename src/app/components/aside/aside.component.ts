import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  asideItems = [
    {icon: '/assets/images/icons/dashboard.svg', title: 'Dashboard', active: false},
    {icon: '/assets/images/icons/suitcase-line.svg', title: 'Job Orders', active: false},
    {icon: '/assets/images/icons/building.svg', title: 'Clients', active: false},
    {icon: '/assets/images/icons/akar-icons_book-open.svg', title: 'Contacts', active: false},
    {icon: '/assets/images/icons/time.svg', title: 'Timesheets', active: false},
    {icon: '/assets/images/icons/time.svg', title: 'Registration', active: false},
    {icon: '/assets/images/icons/worker.svg', title: 'Workers', active: true},
    {icon: '/assets/images/icons/message-xl.svg', title: 'Messaging', active: false},
    {icon: '/assets/images/icons/dollar-circle-line.svg', title: 'Rates', active: false},
    {icon: '/assets/images/icons/grid-6.svg', title: 'Data Mgmt', active: false},
    {icon: '/assets/images/icons/settings.svg', title: 'Settings', active: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
