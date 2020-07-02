import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecettesComponent } from './recettes/recettes.component';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { IngrediantComponent } from './ingrediant/ingrediant.component';
import { DetailsIngrediantComponent } from './details-ingrediant/details-ingrediant.component';


const routes: Routes = [
  {path:"", component: ListeMenuComponent},
  {path:"recette", component:RecettesComponent},
  {path:"reservation" , component:ReservationComponent},
  {path: "ingrediant" , component:IngrediantComponent},
  {path :"ingrediants/details" , component:DetailsIngrediantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
