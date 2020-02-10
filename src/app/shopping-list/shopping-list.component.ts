import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;
  constructor(private slService: ShoppingListService, private store: Store<{shoppingList:{
    ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  //  this.ingredients = this.slService.getIngrediet();
  //  this.subscription=this.slService.ingredientChanged.subscribe(
  //       (ingredient: Ingredient[])=>{
  //          this.ingredients = ingredient;
  //       });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
}
