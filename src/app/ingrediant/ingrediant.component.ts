import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Ingrediant } from '../models/ingrediant';

@Component({
  selector: 'app-ingrediant',
  templateUrl: "./ingrediant.component.html",
  styles: ["./ingrediant.component.css"]
})
export class IngrediantComponent implements OnInit {
  ingrediants: Ingrediant [];
  constructor(
    private router : Router,
    private menusService: MenuService
  ) { }

  ngOnInit(): void {
    this.getIngrediants();
  }
  getIngrediants() :void{
    this.ingrediants = this.menusService.getIngrediants();
  }
 navigateToDetails(ingrediant : Ingrediant): void {
   this.menusService.setSelectedIngrediant(ingrediant);
   this.router.navigateByUrl("ingrediants/details");
 }
}
