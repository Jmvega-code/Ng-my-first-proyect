import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();



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

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
