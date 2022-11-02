import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('title') title: string = 'Button';
  @Input('theme') theme: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
