
import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.hellomagazine.com/imagenes/cuisine/20210421111456/tiktok-garlic-bread-recipe-alfresco-dinner/0-538-260/garlic-bread-t.webp?filter=w500',[
        new Ingredient('Bread', 1),
        new Ingredient('Garlic', 2)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.hellomagazine.com/imagenes/cuisine/20210421111456/tiktok-garlic-bread-recipe-alfresco-dinner/0-538-260/garlic-bread-t.webp?filter=w500',[
        new Ingredient('Butter', 1),
        new Ingredient('Herbs', 1)
      ])
  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }
}
