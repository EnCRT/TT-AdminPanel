import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-dd',
  templateUrl: './custom-dd.component.html',
  styleUrls: ['./custom-dd.component.scss']
})
export class CustomDdComponent implements OnInit {
  @Output() valueChecked: EventEmitter<any> = new EventEmitter<any>();

  @Input('title') title: string | null = null;
  @Input('theme') theme: string = 'transparent';
  @Input('options') options: any[] = [];
  @Input('paginator') paginator: boolean = false;
  

  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.theme);
  }

  menuOpen(option?: any): void {
    this.isOpened = !this.isOpened;
    if (option?.value != undefined && option?.value != null) {
      this.title = option.key;
      this.valueChecked.emit(option.value);
    }
  }
}
