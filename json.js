import { DecisionTree } from "./libraries/decisiontree.js"


    fetch("./model.json")
        .then((response) => response.json())
        .then((model) => modelLoaded(model))

function modelLoaded(model) {
    let decisionTree = new DecisionTree(model)

    const form = document.getElementById('mushroomForm');
                form.addEventListener('submit', event => {
                event.preventDefault();

                const bruises = document.getElementById('bruises').value;
                const odor = document.getElementById('odor').value;
                const population = document.getElementById('population').value;
                const habitat = document.getElementById('habitat').value;

                const prediction = decisionTree.predict({ bruises, odor, population, habitat });
                
                const resultElement = document.getElementById('predictionResult');
                // resultElement.innerHTML = `Prediction: ${prediction}`;
                if (prediction === 'e') {
                    resultElement.innerHTML = 'Prediction: It is edible!';
                  } else {
                    resultElement.innerHTML = 'Prediction: It is poisonous!';
                  }
                });
}