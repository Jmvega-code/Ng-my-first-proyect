import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient ('Kosher salt', 1),
        new Ingredient ('Freshly ground black pepper', 1),
        new Ingredient ('large yellow onion', 1),
        new Ingredient ('cloves garlic', 3),
        new Ingredient ('tsp. cumin seeds', 1),
        new Ingredient ('bay leaf', 1)

      ]
    ),
    new Recipe(
      'Test II Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient ('Kosher salt', 1),
        new Ingredient ('Freshly ground black pepper', 1),
        new Ingredient ('large yellow onion', 1),
        new Ingredient ('cloves garlic', 3),
        new Ingredient ('tsp. cumin seeds', 1),
        new Ingredient ('bay leaf', 1)
      ]),
    new Recipe(
      'Test III Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient ('Kosher salt', 1),
        new Ingredient ('Freshly ground black pepper', 1),
        new Ingredient ('large yellow onion', 1),
        new Ingredient ('cloves garlic', 3),
        new Ingredient ('tsp. cumin seeds', 1),
        new Ingredient ('bay leaf', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
