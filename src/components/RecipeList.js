import React from 'react';

import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
    const recipeList = recipes.map(recipe => {
        return(
            <Recipe key={recipe.name} recipe={recipe} />
        )
    })
    return(
        <div className='recipe-list'>
            {recipeList}
        </div>
    );
}

export default RecipeList;