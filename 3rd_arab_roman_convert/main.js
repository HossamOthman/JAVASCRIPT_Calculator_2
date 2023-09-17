const convBtn = document.getElementById('convert');


convBtn.addEventListener('click', function() {

    const arabicNumber = document.getElementById('arabicInput').value;

    conversion(arabicNumber);
});


let numbersAndNumerals = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' }
];


function conversion(arabicNumber) {
    let romanLetter = '';
    

    for (let i = 0; i < numbersAndNumerals.length; i++) {
        if(numbersAndNumerals[i].arabic <= arabicNumber) {
            arabicNumber -= numbersAndNumerals[i].arabic;

            romanLetter += numbersAndNumerals[i].roman;

            i--;
        }
    }

    document.getElementById('romanOutput').value = romanLetter;
};

