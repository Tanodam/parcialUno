import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

const routes: Routes = [{path: '' ,component: CabeceraComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
