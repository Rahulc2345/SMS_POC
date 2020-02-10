import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

 // constructor(private http: Http, private recipeService: RecipeService) { }

  // storeRecipe(){
  //    return this.http.put('', this.recipeService.getRecipes);
  // }

  // getRecipes(){
  //    this.http.get('')
  //    .map(
  //      (response: Response)=>{
  //       const recipes: Recipe[] = response.json();
  //       for(let recipe of recipes){
  //         if(!recipe['ingredient']){
  //           recipe['ingredient']=[];
  //         }
  //       }
  //       return recipes;
  //      }
  //    )
  //    .subscribe(
  //      (recipes: Recipe[])=>{
  //         this.recipeService.setRecipes(recipes);
  //      }
  //    );
  // }

}
