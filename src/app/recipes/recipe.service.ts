import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()


   private recipes: Recipe[];
  // [
  //   new Recipe(
  //     'A test Recipe',
  //     'this is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient( 'Kosher salt', 1 ),
  //       new Ingredient( 'Freshly ground black pepper', 1 ),
  //       new Ingredient( 'large yellow onion', 1 ),
  //       new Ingredient( 'cloves garlic', 3 ),
  //       new Ingredient( 'tsp. cumin seeds', 1 ),
  //       new Ingredient( 'bay leaf', 1 )

  //     ]
  //   ),
  //   new Recipe(
  //     'Test II Recipe',
  //     'this is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient( 'Kosher salt', 1 ),
  //       new Ingredient( 'Freshly ground black pepper', 1 ),
  //       new Ingredient( 'large yellow onion', 1 ),
  //       new Ingredient( 'cloves garlic', 3 ),
  //       new Ingredient( 'tsp. cumin seeds', 1 ),
  //       new Ingredient( 'bay leaf', 1 )
  //     ] ),
  //   new Recipe(
  //     'Test III Recipe',
  //     'this is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient( 'Kosher salt', 1 ),
  //       new Ingredient( 'Freshly ground black pepper', 1 ),
  //       new Ingredient( 'large yellow onion', 1 ),
  //       new Ingredient( 'cloves garlic', 3 ),
  //       new Ingredient( 'tsp. cumin seeds', 1 ),
  //       new Ingredient( 'bay leaf', 1 )
  //     ] ),
  // ];

  constructor( private slService: ShoppingListService ) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe( index: number ) {
    return this.recipes.slice()[ index ];
  }

  addIngredientsToShoppingList( ingredients: Ingredient[] ) {
    this.slService.addIngredients( ingredients );
  }

  addRecipe( recipe: Recipe ) {
    this.recipes.push( recipe );
    this.recipesChanged.next( this.recipes.slice() );
  }

  updateRecipe( index: number, newRecipe: Recipe ) {
    this.recipes[ index ] = newRecipe;
    this.recipesChanged.next( this.recipes.slice() );
  }

  deleteRecipe( index: number ) {
    this.recipes.splice( index, 1 );
    this.recipesChanged.next( this.recipes.slice() );
  }
}
