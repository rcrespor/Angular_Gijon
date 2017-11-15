import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent,
    ListaV4Component,
    ContadorComponent

  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
