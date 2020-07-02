import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../models/ingrediant';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-details-ingrediant',
  templateUrl: "./details-ingrediant.component.html",
  styleUrls: ["./details-ingrediant.component.css" ]
})
export class DetailsIngrediantComponent implements OnInit {
   selectedIngrediant: Ingrediant;
  constructor(
    private router: Router,
    private menusService : MenuService
  ) { }

  ngOnInit(): void {
    this.getSelectedIngrediant();
  }
  getSelectedIngrediant(): void{
    this.selectedIngrediant = this.menusService.getSelectedIngrediant();
  }
  navigateToList():void {
    this.router.navigateByUrl("ingrediant");
  }
}
