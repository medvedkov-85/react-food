import { Link } from "react-router-dom";
function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt='s' />
                <span className='card-title indigo-text text-darken-2'>
                    {strMeal}
                </span>
            </div>
            <div className='card-action'>
                <Link to={`/recipe/${idMeal}`} className='btn'>
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };
