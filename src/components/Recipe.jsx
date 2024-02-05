import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "./Preloader";

function Recipe() {
    const { id: idMeal } = useParams();
    const [mealInfo, setMealInfo] = useState(false);
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(idMeal).then((data) => {
            setMealInfo(data.meals[0]);
        });
    }, [idMeal, mealInfo]);

    return (
        <>
            {mealInfo ? (
                <>
                    <button className='btn' onClick={goBack}>
                        Go back
                    </button>
                    <h1>{mealInfo.strMeal}</h1>
                    <h3>Category: {mealInfo.strCategory}</h3>

                    <img src={mealInfo.strMealThumb} alt={mealInfo.strMeal} />

                    <table className='centered' style={{ margin: "5rem 0" }}>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(mealInfo).map((key) => {
                                if (
                                    key.includes("Ingredient") &&
                                    mealInfo[key]
                                ) {
                                    return (
                                        <tr key={key}>
                                            <td>{mealInfo[key]}</td>
                                            <td>
                                                {
                                                    mealInfo[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    <p>{mealInfo.strInstructions}</p>
                    {mealInfo.strYoutube ? (
                        <div className='row'>
                            <h5 style={{ margin: "30px 0" }}>Video recipe</h5>
                            <iframe
                                width='700'
                                height='415'
                                class='has-ratio'
                                src={`https://www.youtube.com/embed/${mealInfo.strYoutube.slice(
                                    -11
                                )}`}
                                allow='autoplay; encrypted-media'
                                allowfullscreen=''
                                title={mealInfo.strMeal}
                            />
                        </div>
                    ) : null}
                </>
            ) : (
                <Preloader />
            )}
        </>
    );
}
export { Recipe };
