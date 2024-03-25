import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Registro } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask  } from 'ngx-mask';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';



 
@NgModule({
  declarations: [
    AppComponent,
    Registro,
    ListaComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MdbModalModule
      
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
