import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public sAutora: string;
  public sLugar: string;

  constructor() { }

  ngOnInit() {
    this.sAutora = 'Raquel Crespo';
    this.sLugar = 'Gijón';
  }

}
