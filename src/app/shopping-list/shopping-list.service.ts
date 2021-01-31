import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }


  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredient: Ingredient;

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
