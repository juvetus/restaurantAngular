import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { IngrediantComponent } from './ingrediant/ingrediant.component';
import { DetailsIngrediantComponent } from './details-ingrediant/details-ingrediant.component';


@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    NavigationComponent,
    FooterComponent,
    ListeMenuComponent,
    IngrediantComponent,
    DetailsIngrediantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
