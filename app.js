// Homework optional BMI +2p activitate

//     Utilizatorul poate introduce greutate si inaltinea de la tastatura
//     Rezultatul va fi afisat pe ecran si calculul in real-time, adica odata ce utilizatorul modifica oricare dintre input-uri
//     Button de reset


const form = document.querySelector('form');

form.addEventListener('change', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});
