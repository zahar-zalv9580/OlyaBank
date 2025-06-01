class Card {
    constructor(cardnumer, cardtime, cardname, cardsuma, procent) {
        this.numer = cardnumer
        this.time = cardtime
        this.name = cardname
        this.suma = cardsuma
        this.procent = procent
    }
    display(){
        document.querySelector('.cardscredit').innerHTML += `  <div class="card">
        <div class="inp">
            <p>КредитКарта</p>
            <div class="card-logo">OlyaBank</div>
        </div>
        <div class="infocard">
            <div class="inp">
                        <p>${this.cardsuma}</p>
                                                <p>${this.cardsuma}</p>
            </div>
            <div class="inp">
                        <p>${this.cardsuma}$</p>
                        <p>срок: ${this.cardtime}</p>
            </div>

        </div>



    </div>`

    }


}
let poslygi = 2;
let cards = [];

function renderPoslygi() {
    if (poslygi === 1) {
        document.querySelector('.poslygi').innerHTML = `
        <div class="poslygigolovna">
            <h1>послуги</h1>
            <h2>ОляБанку</h2>
        </div>
        <div class="credyt">
            <div class="inp">
                <p>оформи </p>
                <p> кредит
                 <img class="like" src="like.png"></p>
                <div class="footer-logo">OlyaBank</div>
            </div>
            <div class="inp">
                <input class="suma" placeholder="сума кредиту 1.5k-150k" type="number">
                <input class="time" placeholder="срок кредиту (дні 1-720)" type="number">
                <input class="name" placeholder="ім'я прізвище" type="text">
                <input class="numer" placeholder="номер телефону" type="number">
            </div>
        </div>
        <div class="footer-poslyg">
            <h4 class="button">оформити кредит</h4>
        </div>
        <div class="footer-poslyg">
            <p class="poslygi2">оформлення кредитів</p>
            <p class="history">ваші кредити</p>
        </div>
        `;

        // Додаємо обробники після вставки HTML
        document.querySelector('.poslygi2').addEventListener('click', function () {
            poslygi = 1;
            renderPoslygi();
        });

        document.querySelector('.history').addEventListener('click', function () {
            poslygi = 2;
            renderPoslygi();
        });

        document.querySelector('.button').addEventListener('click', function () {   
            document.querySelector('.button').addEventListener('click', function(){
let numercredit = document.querySelector('.numer').value
let numbernumer = numercredit.split("").filter(c => /\d/.test(c));
let sumacredit = document.querySelector('.suma').value
let timecredit = document.querySelector('.time').value
let namecredit = document.querySelector('.name').value
const validName = /^[А-Яа-яґҐєЄіІїЇ\s]{6,}$/.test(namecredit);
if (numbernumer.length >= 7 && numbernumer.length <= 9){
    let cardnumer = numercredit;
    document.querySelector('.numer').style.border = "5px solid green"
}
else{
    document.querySelector('.numer').style.border = "5px solid red";
}

if (timecredit < 721 && timecredit > 1)
{
    let cardtime = timecredit
    document.querySelector('.time').style.border = "5px solid green"
}
else{
    document.querySelector('.time').style.border = "5px solid red"
}

if (sumacredit < 1500000 && sumacredit > 1500)
{
    document.querySelector('.suma').style.border = "5px solid green"
    if (cardtime) { 
        let procent = cardtime * (sumacredit / 1000);
        let cardsuma = sumacredit + procent;
    }
}
else{
    document.querySelector('.suma').style.border = "5px solid red"
}
if (validName)
{
    document.querySelector('.name').style.border = "5px solid green"
    let cardname = namecredit
}
else{
    document.querySelector('.name').style.border = "5px solid red"
}
if (cardname && cardsuma && cardtime && cardnumer && validName && timecredit && namecredit 
    && numbernumer.length >= 7 && numbernumer.length <= 9 )
    {
    card = new Card(cardnumer, cardtime, cardname, cardsuma, procent)
    cards.push(card)
    }
}) 
        });


    } else if (poslygi === 2) {
        document.querySelector('.poslygi').innerHTML = `
        <div class="poslygigolovna">
            <h1>ваша історія</h1>
            <h2>ОляБанку</h2>
        </div>
<div class="cardscredit">

</div>



        <div class="footer-poslyg">
            <p class="poslygi2">оформлення кредитів</p>
            <p class="history">ваші кредити</p>
        </div>
        `;

        document.querySelector('.poslygi2').addEventListener('click', function () {
            poslygi = 1;
            renderPoslygi();
        });

        document.querySelector('.history').addEventListener('click', function () {
            poslygi = 2;
            renderPoslygi();
        });
    }
}


renderPoslygi();


