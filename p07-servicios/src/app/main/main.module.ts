import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BuscarLibrosComponent } from './buscar-libros/buscar-libros.component';
import { FormsModule } from '@angular/forms';
import { BuscarAsyncComponent } from './buscar-async/buscar-async.component';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { HttpModule } from '@angular/http';
import { BuscarHttpServiceComponent } from './buscar-httpService/buscar-httpService.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [MainComponent,
     BuscarLibrosComponent,
     BuscarAsyncComponent,
     BuscarGoogleComponent,
     BuscarHttpServiceComponent
    ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
