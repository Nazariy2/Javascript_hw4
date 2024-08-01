// function checkFields() {
//     let field1 = document.getElementById('field1').value.trim();
//     let field2 = document.getElementById('field2').value.trim();
    
//     if (field1 && field2) {
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// function checkSum() {
//     const field1 = parseFloat(document.getElementById('field1').value);
//     const field2 = parseFloat(document.getElementById('field2').value);

//     const sum = field1 + field2;

  
//     let resultCase;
//     if (sum > 10) {
//         resultCase = 'greater';
//     } else if (sum === 10) {
//         resultCase = 'equal';
//     } else {
//         resultCase = 'less';
//     }

    
//     switch (resultCase) {
//         case 'greater': {
//             alert('sum is grater than 10');
//             break;
//         }
//         case 'equal':{
//             alert('sum is equal to 10');
//             break;
//         }
//         case 'less':{
//             alert('sum is lower than 10');
//             break;
//         }
//         default: 
//         alert('error');
//     }

// without switch
    
//     if (field1 + field2 > 10) {
//         alert('Сума більша за 10');
//     } else if (field1 + field2 <= 10 ){
//         alert("Сума менша або дорівнює 10");
//     }
// }

// function checkWord() {
//     const checker = document.getElementById('field1').value.trim();

//     if(checker.includes('JavaScript')) {
//         alert('"Текст містить слово JavaScript')
//     } else {
//         alert("Текст не містить слово JavaScript");
//     }
// }


// function checkNumber() {
//     const field1 = parseFloat(document.getElementById('field1').value);

//     if( field1 > 10 && field1 < 20 ) {
//         alert("Число входить в діапазон від 10 до 20");
//     } else {
//         alert("Число не входить в діапазон від 10 до 20");
//     }
// }



function validateForm() {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value;


    if (name.length < 3) {
        alert("Ім'я повинно містити не менше 3 символів.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Будь ласка, введіть коректний email.");
        return false;
    }

     if (password.length < 6) {
        alert("Пароль повинен містити не менше 6 символів.");
        return false;
    }

    window.location.href = "success.html";
    return false; 
}