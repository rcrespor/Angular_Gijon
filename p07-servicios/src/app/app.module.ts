import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { LibrosMockService } from './services/libros-mock.service';
import { LibrosService } from './services/libros.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LibrosMockService,
    LibrosService
  ],
  bootstrap: [AppComponent] // es la forma especial de importar el componente principal
})
export class AppModule { }
