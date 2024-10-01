
const PI = 3.1415;
const radius = 5; 
const spacePerPlant = 0.8; 
const initialPlants = 100; 


const gardenArea = PI * Math.pow(radius, 2); 
document.getElementById("gardenInfo").innerHTML = `Garden area in square meters: <span>${gardenArea.toFixed(4)}</span>`;


function calculateRequiredArea(plants) {
    return plants * spacePerPlant; 
}


try {
    
    let requiredArea = calculateRequiredArea(initialPlants);
    document.getElementById("requiredArea").innerHTML = `Required area for the plants: <span>${requiredArea.toFixed(4)}</span> square meters`;

    
    if (requiredArea > gardenArea) {
        
        throw new Error("Insufficient space: The garden cannot accommodate the 100 plants.");
    } else {
        
        document.getElementById("additionalSpace").innerHTML = "The garden has enough space for the 100 plants.";
    }
} catch (error) {
    
    document.getElementById("additionalSpace").innerHTML = `Error: <span>${error.message}</span>`;
}


function calculatePlantsAfterWeeks(startingPlants, weeks) {
    return startingPlants * Math.pow(2, weeks); 
}


function calculateRadiusForArea(area) {
    return Math.sqrt(area / PI); 
}


let plantsAfter10Weeks = calculatePlantsAfterWeeks(initialPlants, 10);
document.getElementById("plantsAfter10Weeks").innerHTML = `After 10 weeks, number of plants: <span>${plantsAfter10Weeks}</span>`;


let requiredArea10Weeks = calculateRequiredArea(plantsAfter10Weeks);
document.getElementById("requiredArea").innerHTML = `Required garden area for the plants: <span>${requiredArea10Weeks.toFixed(4)}</span> square meters`;


let newRadius = calculateRadiusForArea(requiredArea10Weeks);
document.getElementById("newRadius").innerHTML = `New radius for the expanded garden: <span>${newRadius.toFixed(4)}</span> meters`;


if (requiredArea10Weeks > gardenArea) {
    let additionalSpace = requiredArea10Weeks - gardenArea;
    document.getElementById("additionalSpace").innerHTML = `Additional space required: <span>${additionalSpace.toFixed(4)}</span> square meters.`;
} else {
    document.getElementById("additionalSpace").innerHTML = "The current garden is large enough for the plants after 10 weeks.";
}
