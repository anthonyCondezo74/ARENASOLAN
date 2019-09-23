import { ConsultaComponent } from './consulta/consulta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampodeportComponent } from './campodeport/campodeport.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { ProductoComponent } from './producto/producto.component';
import { CampodeportInicioComponent } from './campodeport/campodeport-inicio/campodeport-inicio.component';
import { CampodeportEdicionComponent } from './campodeport/campodeport-edicion/campodeport-edicion.component';
import { CampodeportDetalleComponent } from './campodeport/campodeport-detalle/campodeport-detalle.component';


const appRoutes: Routes = [
    {path: 'campodeport', component: CampodeportComponent,children:[
        {path:'',component:CampodeportInicioComponent},
        {path:'nuevo',component:CampodeportEdicionComponent},
        {path:':id',component:CampodeportDetalleComponent},
        {path:':id/editar',component:CampodeportEdicionComponent}
    ]},
    {path: 'producto', component: ProductoComponent},
    { path: 'consumo', component: ConsumoComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: '', redirectTo: 'campodeport',pathMatch: 'full'  },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}