import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService { 
recipeChanged = new Subject<Recipe[]>();  
recipes: Recipe[] = [
    new Recipe('Test Recipe', 
    'just a test recipe', 
    'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg'
    , [
      new Ingredient('French Fries', 12),
      new Ingredient('Cold-drink(ml)', 600)    
    ]),
    new Recipe('New Recipe', 
    'a test recipe', 
    'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg'
    ,[
      new Ingredient('French Fries', 6)
      ])
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number){
     return this.recipes.slice()[id];
  }

  setRecipes(recipes: Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
