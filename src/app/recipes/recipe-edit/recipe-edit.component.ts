import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl } from '@angular/forms'
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode=false;
  recipeForm: FormGroup;
  ingredients: Ingredient[];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
   this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode= params['id']!=null;
        this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let ingredientName='';
    let ingredientAmount='';

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
     // this.ingredients=recipe.ingredient;
      // for(let ingredient of this.ingredients){
      //   ingredientName = ingredient.name;
      //   ingredientAmount = ingredient.amount;
      // }
    }

    this.recipeForm=new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingrName': new FormControl(ingredientName), 
      'ingrAmount': new FormControl(ingredientAmount)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

}
