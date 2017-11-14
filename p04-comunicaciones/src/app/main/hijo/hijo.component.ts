import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() hijoName: string;
  @Output() emitNo: EventEmitter<any>;
  sNombreElegido: string;

  constructor() {
    this.emitNo = new EventEmitter();
  }

  ngOnInit() {
  }

  btnNoMeGusta() {
    this.emitNo.emit(this.sNombreElegido);
  }

}
