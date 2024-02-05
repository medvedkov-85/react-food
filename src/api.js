import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const responce = await fetch(API_URL + "lookup.php?i=" + mealId);
    return await responce.json();
};

const getAllCategories = async () => {
    const responce = await fetch(API_URL + "categories.php");
    return await responce.json();
};

const getFilteredCategory = async (catName) => {
    const responce = await fetch(API_URL + "filter.php?c=" + catName);
    return await responce.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
