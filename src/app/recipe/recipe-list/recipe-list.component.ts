import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.hellomagazine.com/imagenes/cuisine/20210421111456/tiktok-garlic-bread-recipe-alfresco-dinner/0-538-260/garlic-bread-t.webp?filter=w500'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.hellomagazine.com/imagenes/cuisine/20210421111456/tiktok-garlic-bread-recipe-alfresco-dinner/0-538-260/garlic-bread-t.webp?filter=w500')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes)
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
