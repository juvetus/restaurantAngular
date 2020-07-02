import { Injectable } from '@angular/core';
import { Ingrediant } from '../models/ingrediant';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  ingrediants:Ingrediant []= [
     new Ingrediant(
       "Entrée	(Salade tropicale de crevettes à l'ananas",
       "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
       "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
       "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
       [ "Entrée", "Plat" , "Dessert"],
        "../assets/images/boulette.png",
       35
     ),
     new Ingrediant(
      "Entrée	(Salade tropicale de crevettes à l'ananas",
      "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      [ "Entrée", "Plat" , "Dessert"],
       "../assets/images/boulette.png",
      35
    ),
    new Ingrediant(
      "Entrée	(Salade tropicale de crevettes à l'ananas",
      "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      [ "Entrée", "Plat" , "Dessert"],
       "../assets/images/boulette.png",
      35
    ),
    new Ingrediant(
      "Entrée	(Salade tropicale de crevettes à l'ananas",
      "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      [ "Entrée", "Plat" , "Dessert"],
       "../assets/images/boulette.png",
      35
    ),
    new Ingrediant(
      "Entrée	(Salade tropicale de crevettes à l'ananas",
      "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      [ "Entrée", "Plat" , "Dessert"],
       "../assets/images/boulette.png",
      35
    ),
    new Ingrediant(
      "Entrée	(Salade tropicale de crevettes à l'ananas",
      "Ingrédients:	Pour 4 Personnes 200g de crevettes décortiquées ou 500g de crevettes entières ,1/3 de concombre 1/2 anans frais 1 poivron rouge 2 oignons 2 avocats 1 piment 2 branches de coriandre",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      "Pour la sauce: 4 c. à soupe de jus d'orange 3 c. à soupe de jus de citron 2 c. à soupe d'huile d'olive 2 c. à café de sel",
      [ "Entrée", "Plat" , "Dessert"],
       "../assets/images/boulette.png",
      35
    )
  ];

  selectedIngrediant : Ingrediant;

  constructor() { 
    this.setSelectedIngrediant(this.ingrediants[0])
  }

  // Récuperer les menus
  getIngrediants():Ingrediant []{
    return this.ingrediants;
  }

  //Modifier le produit selectionné
  setSelectedIngrediant(ingrediant: Ingrediant) : void {
    this.selectedIngrediant = ingrediant;
  }

  //Récuperer le produit selectionné
  getSelectedIngrediant ():Ingrediant{
    return this.selectedIngrediant;
  }
}
