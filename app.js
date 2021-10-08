const generateNum = document.getElementById('generate');

const randomNum = document.getElementById('random-num');



generateNum.addEventListener('click', () => {
    // console.log('buttonclick');
    const x = Math.random();
    randomNum.textContent = x ; 

    // console.log (x);
});



    
