import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input('count') count: number;
  downText: any = 'Down';
  upText: any = 'Down';
  rows: any[] = [];
  selectedID: number | undefined;

  constructor() {
    this.count = 4;
    // this.rows = [];
    this.counted();
  }

  ngOnInit(): void {
    // this.counter(this.count);
    this.counted();
  }
  get counter() {
    this.counted();
    return this.rows;
  }
  counted() {
    this.rows = [];
    for (let i = 0; i < this.count; i++) {
      this.rows.push({ id: i });
      console.log('Block statement execution no.' + i);
    }
  }
  click(selectedIDNumber: number) {
    this.selectedID = selectedIDNumber;
    // console.log(JSON.stringify(this.rows));
  }
}
