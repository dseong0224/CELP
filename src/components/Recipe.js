import React from 'react';

import { Link } from 'react-router-dom';
import LoadPage from './LoadPage';

const APP_ID = "34d187f5";
const APP_API = "91723cb18ae377899fd99c366f7f5099"

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_API}`);

    const res = await req.json();
    this.setState({
      activeRecipe: res.hits[0]
    })
    console.log("state: ", this.state.activeRecipe.recipe);
  }

  render() {
    const recipe = this.state.activeRecipe.recipe;
    console.log("recipe: ", recipe)
    return (
      <div className="container">
        {this.state.activeRecipe.length === 0 &&
          <LoadPage />
        }
        {this.state.activeRecipe.length !== 0 &&
          <React.Fragment>
            <div className="active-recipe">
              <div className="row">
                <img className="col-md-6 active-recipe__img" src={recipe.image} alt={recipe.label} />
                <div className="col-md-6">
                  <h3 className="active-recipe__title">{recipe.label}</h3>
                  <h4 className="active-recipe__publisher">
                    Publisher: <span>{recipe.source}</span>
                  </h4>
                  <p className="active-recipe__website">
                    Website:
              <span><a href={recipe.url} target="__blank">{recipe.url < 20 ? `${recipe.url}` : `${recipe.url.substring(0, 25)}...`}</a></span>
                  </p>
                  <Link to="/" className="active-recipe__button">Go Home</Link>
                  <div className="active-recipe__healthLabel">
                    {this.state.activeRecipe.recipe.healthLabels.map((healthLabel) => {
                      return (
                        <span>#{healthLabel} | </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="active-recipe__ingredients">
            <h4 className="active-recipe__ingredientsTitle">Ingredients</h4>
              <ul>
                {this.state.activeRecipe.recipe.ingredients.map((ingredient) => {
                  return (
                    <li>{ingredient.text}, Measuremen: {ingredient.weight} g</li>
                  )
                })}
              </ul>

            </div>
          </React.Fragment>

        }
      </div>
    )
  }
};

export default Recipe; 