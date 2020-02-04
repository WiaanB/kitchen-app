import React from 'react';

const Recipe = ({ recipe }) => {
    return(
        <div className='recipe-card'>
            <div className='recipe-head'>
                <h3 className='recipe-title'>{recipe.name}</h3>
                <p>Calories: <b>{Math.trunc(recipe.calories)}</b></p>
            </div>
            <ul>
                {recipe.ingredients.map((ingredient, index) => {
                    return(
                        <li key={index}>{ingredient.text}</li>
                    )
                })}
            </ul>
            <img className='recipe-image' src={recipe.image} alt={`${recipe.name} recipe`}/>
        </div>
    )
}

export default Recipe;