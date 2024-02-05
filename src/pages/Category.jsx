import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealsList } from "../components/MealsList";
import { useHistory } from "react-router-dom";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            {!meals.length ? (
                <Preloader />
            ) : (
                <>
                    <button className='btn green darken-1' onClick={goBack}>
                        Go back
                    </button>
                    <MealsList meals={meals} categoryName={name} />
                </>
            )}
        </>
    );
}

export { Category };
