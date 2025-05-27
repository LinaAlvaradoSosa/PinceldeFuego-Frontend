import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalAdmiComponent } from './pages/principal-admi/principal-admi.component';
import { AdmiProductosComponent } from './pages/admi-productos/admi-productos.component';
import { AdmiMensajesComponent } from './pages/admi-mensajes/admi-mensajes.component';

export const routes: Routes = [
    {path: "" , component: HomeComponent },
    {path: "galeria", component: GaleriaComponent},
    {path: "artista", component:ArtistaComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "login-PinceldeFuego-JairoAlonsoBarbosa", component: LoginComponent},
    {path: "principalAdmi", component: PrincipalAdmiComponent},
    {path:"productos", component: AdmiProductosComponent},
    {path:"mensajes", component: AdmiMensajesComponent}
];
