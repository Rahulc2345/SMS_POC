import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef; 
  // @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef; 
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
      (index: number)=>{
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem = this.slService.getIngredientById(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

onAddItem(form: NgForm){
  // const ingName=this.nameInputRef.nativeElement.value;
  // const ingAmount=this.amountInputRef.nativeElement.value;
  //const newIngredient=new Ingredient(ingName, ingAmount);
 const value=form.value;
 const newIngredient=new Ingredient(value.name, value.amount);
 if(this.editMode){
     this.slService.updateIngredient(this.editItemIndex, newIngredient);
 }else{
     this.slService.addIngredient(newIngredient);
  }
  this.editMode=false;
  form.reset();
}

onClear(){
  this.slForm.reset();
  this.editMode = false;
}

onDelete(){
  this.slService.deleteIngredient(this.editItemIndex);
  this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
