import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductoComponent } from './producto/producto.component';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { CampodeportComponent } from './campodeport/campodeport.component';
import {AppRoutingModule} from './app-routing.module';
import { ConsumoComponent } from './consumo/consumo.component';
import { CampodeportDetalleComponent } from './campodeport/campodeport-detalle/campodeport-detalle.component';
import { CampodeportEdicionComponent } from './campodeport/campodeport-edicion/campodeport-edicion.component';
import { CampodeportInicioComponent } from './campodeport/campodeport-inicio/campodeport-inicio.component';
import { CampodeportListaComponent } from './campodeport/campodeport-lista/campodeport-lista.component';

import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    FooterComponent,
    HeaderComponent,
    ProductoComponent,
    ComboBoxDirective,
    CampodeportComponent,
    ConsumoComponent,
    CampodeportDetalleComponent,
    CampodeportEdicionComponent,
    CampodeportInicioComponent,
    CampodeportListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
