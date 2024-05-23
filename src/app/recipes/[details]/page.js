import RecipeDetails from "@/components/recipe-details";

async function fetchDataDetails(getCurrentId){
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${getCurrentId}`)
        const data = await apiResponse.json()
        return data;

    }
    catch(error){
        throw new Error(error)
    }
}

export default async function Details({params}){
    const getRecipeDetails = await fetchDataDetails(params?.details)
    console.log(params)
    return <div>
        <RecipeDetails getRecipeDetails={getRecipeDetails} />
    </div>
}