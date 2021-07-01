import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { MenuComponent } from './component/menu/menu.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';//Incluir
import { ListadosModule } from './listados/listados.module';

@NgModule({
  declarations: [
    AppComponent,
    
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    DetalleComponent,
    FooterComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    ListadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }