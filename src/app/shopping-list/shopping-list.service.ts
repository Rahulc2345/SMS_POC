import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
 

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();  
ingredients:Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 12)
  ];
  constructor() { }
  
  getIngrediet(){
    return this.ingredients.slice();
  }

  getIngredientById(index: number){
      return this.ingredients[index];
  }
  
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
     this.ingredients.splice(index, 1);
     this.ingredientChanged.next(this.ingredients.slice()); 
  }
}
