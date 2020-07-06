import React from "react";
import history from "./History";

const RecipeList = () => {    

    let [recipePage, setRecipePage] = React.useState(1);

    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
    fetch("http://localhost:8090/getRecipes?page="+recipePage,{

        method : "GET",
        headers : {
            'Authorization':'Bearer '+localStorage.getItem("token"),
        },
        })
        .then(response => response.json())
        .then(data => {      
            setRecipes(data.recipeList);      
        // console.log(data.recipeList);
        });
    },[recipePage]);

    return(
        <div className="recipeList"> 
        
            {recipes.map(recipe => (
            <RecipeCard
                title={recipe.title}
                serves={recipe.serves}
                difficulty={recipe.difficulty}
                picture={recipe.pictureList[0].pictureURL}
            />
            ))}
            
            <div className="recipe-button-center">
            <button className="recipe-button"  onClick={() => {
                if(recipePage > 1) {
                    setRecipePage(recipePage -= 1)              
                    console.log(recipePage); 
                    history.push("/recipes");            
                }        
            }
            }>Previous</button>
            <button className="recipe-button"  onClick={() => {
                setRecipePage(recipePage += 1);
                console.log(recipePage);   
                history.push("/recipes");           
            }
            }>Next</button>
            </div>
        </div>
    );    
}

const RecipeCard = props => {

    return(
        <div className="recipe-card">
            <img src={props.picture} alt="Bild" width="150" height="150"/>
            <p>Title: {props.title}</p>
            <p>Serves: {props.serves}</p>
            <p>Difficulty: {props.difficulty}</p>
        </div>
    );
};

export default RecipeList;
    
    


