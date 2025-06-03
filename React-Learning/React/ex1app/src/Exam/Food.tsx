import { useEffect, useState } from "react";
import axios from "axios";

const foodContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px"
};

const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#fafafa"
};

const imgStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "4px",
    marginTop: "8px"
};

const Food = () => {
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/recipes');
                const evenRecipes = response.data.recipes.filter((item: any) => item.id % 2 === 0);
                setRecipes(evenRecipes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div style={foodContainerStyle}>
                {recipes.map((recipe) => (
                    <div style={cardStyle}>
                        <img src={recipe.image} alt={recipe.name} style={imgStyle} />
                        <strong>Id:</strong> {recipe.id} <br />
                        <strong>Name:</strong> {recipe.name} <br />
                        <strong>Ingredients:</strong>
                        <ol>
                            {recipe.ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ol>
                        <strong>Instructions:</strong>
                        <ul>
                            {recipe.instructions.map((instruction: string, index: number) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Food;