
const portionsSelect = document.querySelector('.portions');
const flourAmount = document.querySelector('.flour-amount');
const butterAmount = document.querySelector('.butter-amount');
const sugarAmount = document.querySelector('.sugar-amount');
const eggsAmount = document.querySelector('.eggs-amount');
const chocolateAmount = document.querySelector('.chocolate-amount');
const bakingPowderAmount = document.querySelector('.baking-powder-amount');
const vanillaAmount = document.querySelector('.vanilla-amount');

function calculateIngredients() {
      const portions = portionsSelect.value;
    if (portions === '12') {
      flourAmount.textContent = '200 grams';
      butterAmount.textContent = '150 grams';
      sugarAmount.textContent = '150 grams';
      eggsAmount.textContent = '1';
      chocolateAmount.textContent = '200 grams';
      bakingPowderAmount.textContent = '2.5 grams';
      vanillaAmount.textContent = '5 grams';
    } else if (portions === '24') {
      flourAmount.textContent = '400 grams';
      butterAmount.textContent = '300 grams';
      sugarAmount.textContent = '300 grams';
      eggsAmount.textContent = '2';
      chocolateAmount.textContent = '400 grams';
      bakingPowderAmount.textContent = '5 grams';
      vanillaAmount.textContent = '10 grams';
    } else if (portions === '36') {
        flourAmount.textContent = '600 grams';
        butterAmount.textContent = '450 grams';
        sugarAmount.textContent = '450 grams';
        eggsAmount.textContent = '3';
        chocolateAmount.textContent = '600 grams';
        bakingPowderAmount.textContent = '7.5 grams';
        vanillaAmount.textContent = '15 grams';
      }
    }
    
    portionsSelect.addEventListener('change', calculateIngredients);

  

    