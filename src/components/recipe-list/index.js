import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";

export default function RecipeList({ fetchData }) {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className='pb-10'>
             <Link href={"/"}>
             
                <h2>Go to home</h2>
             </Link>
                </div>
                {fetchData && fetchData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fetchData.map((data) => (
                            <Link href={`/recipes/${data.id}`}>
                            <Card key={data.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <img 
                                    src={data.image} 
                                    alt={data.name} 
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
                                </CardContent>
                            </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center text-2xl">No recipes found.</p>
                )}
            </div>
        </div>
    );
}
