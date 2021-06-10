
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Garlic Bread',
  //     'Delicious Homemade Garlic Bread',
  //     'https://www.hellomagazine.com/imagenes/cuisine/20210421111456/tiktok-garlic-bread-recipe-alfresco-dinner/0-538-260/garlic-bread-t.webp?filter=w500',[
  //       new Ingredient('Bread', 1),
  //       new Ingredient('Garlic', 2)
  //     ]),
  //   new Recipe(
  //     'Chicken Alfredo',
  //     'Best Creamy Chicken Alfredo',
  //     'https://www.number-2-pencil.com/wp-content/uploads/2018/07/Skinny-Chicken-Fettucine-Alfredo-Recipe-3.jpg',[
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Pasta', 1)
  //     ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppinglistService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() { 
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
