import { Link } from "react-router-dom";
function CategoryItem(props) {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strCategoryThumb} alt='s' />
                <span className='card-title indigo-text text-darken-2'>
                    {strCategory}
                </span>
            </div>
            <div className='card-content'>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
