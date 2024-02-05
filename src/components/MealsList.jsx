import { Meal } from "./Meal";

function MealsList(props) {
    const { meals, categoryName } = props;

    return (
        <div>
            <h1>Meals by category "{categoryName}"</h1>
            <div className='list'>
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </div>
    );
}

export { MealsList };
