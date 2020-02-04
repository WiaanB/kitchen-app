import React from 'react';

import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  state = {
    search: '',
    recipes: []
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleQuery = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    const recipes = data.hits.map(recipe => {
      return(
        {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredients,
          calories: recipe.recipe.calories
        }
      )
    })

    this.setState({
      recipes: recipes
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleQuery();
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Kitch.en</h1>
        <SearchBar handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
