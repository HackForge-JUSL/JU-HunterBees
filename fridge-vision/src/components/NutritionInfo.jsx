import React from 'react';

function NutritionInfo({ foodItems }) {
    return (
        <div>
            <h2>Nutrition Information</h2>
            {foodItems.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <ul>
                        <li>Calories: {item.calories}</li>
                        <li>Protein: {item.protein}g</li>
                        <li>Fat: {item.fat}g</li>
                        <li>Carbohydrates: {item.carbohydrates}g</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default NutritionInfo;
