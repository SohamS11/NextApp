import React from 'react';

export default function RecipeDetails({ getRecipeDetails }) {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                {getRecipeDetails && (
                    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={getRecipeDetails.image}
                            alt={getRecipeDetails.name}
                            className="w-full h-64 object-cover object-center"
                        />
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{getRecipeDetails.name}</h2>
                            <div className="text-lg text-gray-600 mb-4">{getRecipeDetails.description}</div>
                            <div className="text-xl font-bold text-gray-800 mb-4">Ingredients:</div>
                            <ul className="text-lg text-gray-600">
                                {getRecipeDetails.ingredients.map((ingredient, index) => (
                                    <li key={index} className="mb-2">{ingredient}</li>
                                ))}
                            </ul>
                            <div className="text-xl font-bold text-gray-800 mb-4">Instructions:</div>
                            <ol className="text-lg text-gray-600">
                                {getRecipeDetails.instructions.map((instruction, index) => (
                                    <li key={index} className="mb-2">{instruction}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
