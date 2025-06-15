let = smilek = ['💝','💘','💖','💗','💓','💕','💞','🩷','👹','👽','🐷','🎀','🎟️','🌞']
class Smile {
    constructor(){
        this.Rsmile = Math.floor(Math.random() * smilek.length); 
        this.smilik = smilek[this.Rsmile]
        this.element = document.createElement('div');
        this.element.className = 'smile';
        this.element.innerHTML = `<div class='smile'>${this.smilik}</div>`
        this.posY = Math.random() * (500 - -500) + -500
        this.posX = Math.random() * (1800 - 250) + 250
    }
    display(){
         document.querySelector('.poslygi').appendChild(this.element)
         this.element.style.transform = `translateX(${this.posX}px) translateY(${this.posY}px)`
    }
}

let smiles = []
class Card {
    constructor(cardnumer, cardtime, cardname, cardsuma, procent, Ncard) {
        this.numer = cardnumer;
        this.time = cardtime;
        this.name = cardname;
        this.suma = cardsuma;
        this.procent = procent;
        this.Ncard = Ncard;
        this.daysP = this.suma / this.time
        this.element = document.createElement('div');
        this.element.className = 'card';
        this.element.innerHTML = `
            <div class="inp">
                <p>КредитКарта</p>
                <div class="card-logo">OlyaBank</div>
            </div>
            <div class="infocard">
                <div class="inp">
                    <p>${this.name}</p>
                    <p> +${this.numer}</p>
                </div>
                <div class="inp">
                    <p>${(this.suma)}</p>
                </div>
                <div class="inp">
                    <p>${this.time}дн</p>
                </div>
            </div>
        `;
        this.allinfo = `<h1>Інформація за КредитКартою</h1>
        <p>кредит на суму${(this.suma)} з терміном${this.time}дн
        був оформлен на ${this.name} з номером +${this.numer}
        </p><p>процент до суми карти ${this.procent}</p>
        <p>
        щодена вартість кредиту ${(this.daysP)}
        </p>
        <button>назад</button>
        `
    }

display() {
    document.querySelector('.cardscredit').appendChild(this.element);
    document.querySelector('.allinfocard').style.opacity = "0";

    this.element.addEventListener('click', () => {
        if (Nucard === this.Ncard) {
            skip = 1;
            let smilelength = 0
            smiles = []
            Nucard = this.Ncard;
            document.querySelector('.allinfocard').style.transform = "translateX(-400px)"
            document.querySelector('.allinfocard').style.opacity = "1";
            document.querySelector('.allinfocard').innerHTML = "";
            const wrapper = document.createElement('div');
            wrapper.innerHTML = this.allinfo;
            document.querySelector('.allinfocard').appendChild(wrapper);
            smilelength = 50
            const poslygiEl = document.querySelector('.poslygi');
            poslygiEl.style.transition = 'background 2s ease'
            document.querySelector('.allinfocard').style.transition = 'transform 1.5s ease'
            setTimeout(() => {
                poslygiEl.style.background = '  rgb(0, 2, 24)';

            }, 500);
                for (let i = 0; i < smilelength; i++) {
                let smile = new Smile();    
                smiles.push(smile);
                smile.display();        
                }
            setTimeout(() => {
                document.querySelector('.allinfocard').style.transform = "translateX(0px)"
            }, 2500);
            document.querySelector('.footer-poslyg').style.opacity = '0'
            document.querySelector('.footer-poslyg').style.zIndex = '-1'
            document.querySelector('.poslygigolovna').innerHTML = `                       
                        <h1>Інформація кредиту</h1>
                        <h2>ОляБанк</h2>`
            document.querySelectorAll('.card').forEach(cardEl => {
                if (cardEl !== this.element) {
                    cardEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    cardEl.style.opacity = '0';
                } else {
                    this.element.style.transform = 'translateY(-50px) scale(1)';
                    this.element.style.zIndex = "9000"
                }
            });


            const button = wrapper.querySelector('button');
            if (button) {
                button.addEventListener('click', () => {
                    document.querySelectorAll('.card').forEach(cardEl => {
                        cardEl.style.opacity = '1';
                        cardEl.style.transform = 'translateY(0) scale(1)';
                    });

                    skip = 0;
                    this.element.style.transform = 'translateY(200px) scale(1.5)'
                    document.querySelector('.allinfocard').style.opacity = "0";
                    document.querySelector('.footer-poslyg').style.opacity = '1'
                     document.querySelector('.footer-poslyg').style.zIndex = '1'
                    poslygiEl.style.background = ' rgba(255, 156, 212, 1)';
                    renderPoslygi()
                });
            }
        }
    });
}



    animka(Nucard) {
        if (Nucard === this.Ncard) {
            this.element.style.transform = "scale(1.5)";
            this.element.style.zIndex = "100";
        } else {
            this.element.style.transform = "scale(1)";
            this.element.style.zIndex = "1";

        }
    }
}
class Evrey {
    constructor() {
        this.delay = Math.random() * (2 - 0.1) + 0.1;  
        this.randomposition = Math.floor(Math.random() * 2) + 1;
        this.time = Math.floor(Math.random() * 4) + 2;

        this.evrey1 = document.createElement('img');
        this.evrey1.className = 'evrei1';
        this.evrey1.src = 'evrey.png';

        this.evrey2 = document.createElement('img');
        this.evrey2.className = 'evrei2';
        this.evrey2.src = 'evrey.png';
    }

display() {
    const removeEvrey = (evreyElement) => {
        evreyElement.remove(); 
        const index = evrei.indexOf(this); 
        if (index !== -1) {
            evrei.splice(index, 1); 
        }
    };

    if (this.randomposition === 1) {
        document.querySelector('.evreyskabaza1').appendChild(this.evrey1);
        this.evrey1.style.animation = `evreimove ${this.time}s`;
        this.evrey1.addEventListener('animationend', () => removeEvrey(this.evrey1));
    } else {
        document.querySelector('.evreyskabaza2').appendChild(this.evrey2);
        this.evrey2.style.animation = `evreimove ${this.time}s`;
        this.evrey2.addEventListener('animationend', () => removeEvrey(this.evrey2));
    }
}

}

let skip = 0
let poslygi = 1;
let cards = [];
let selfcards = [];
let Ncard = 0;
let maxrightskip  = 0
let maxleftskip  = 1
let rightskip  = 0
let leftskip  = 0
let Nucard = Ncard
let evrei = []
function renderPoslygi() {
    if (poslygi === 1) {
        document.querySelector('.poslygi').innerHTML = `
            <div class="poslygigolovna">
                <h1>послуги</h1>
                <h2>ОляБанк</h2>
            </div>
            <div class="credyt">
                <div class="inp">
                    <p>оформи </p>
                    <p> кредит <img class="like" src="like.png"></p>
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
            <div class="evreyskabaza1"></div>
            <div class="evreyskabaza2"></div>
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


        document.querySelector('.button').addEventListener('click', function () {
            let numercredit = document.querySelector('.numer').value;
            let numbernumer = numercredit.split("").filter(c => /\d/.test(c));
            let sumacredit = parseFloat(document.querySelector('.suma').value);
            let timecredit = parseInt(document.querySelector('.time').value);
            let namecredit = document.querySelector('.name').value;

            let cardnumer, cardtime, cardname, cardsuma, procent;
            const validName = /^[А-Яа-яґҐєЄіІїЇ\s]{6,}$/.test(namecredit);

            if (numbernumer.length >= 7 && numbernumer.length <= 9) {
                cardnumer = numercredit;
                document.querySelector('.numer').style.border = "5px solid green";
            } else {
                document.querySelector('.numer').style.border = "5px solid red";
            }

            if (timecredit >= 1 && timecredit <= 720) {
                cardtime = timecredit;
                document.querySelector('.time').style.border = "5px solid green";
            } else {
                document.querySelector('.time').style.border = "5px solid red";
            }

            if (sumacredit >= 1500 && sumacredit <= 1500000) {
                document.querySelector('.suma').style.border = "5px solid green";
                if (cardtime) {
                    procent = cardtime * (sumacredit / 1000);
                    cardsuma = sumacredit + procent;
                }
            } else {
                document.querySelector('.suma').style.border = "5px solid red";
            }

            if (validName) {
                cardname = namecredit;
                document.querySelector('.name').style.border = "5px solid green";
            } else {
                document.querySelector('.name').style.border = "5px solid red";
            }

            if (cardname && cardsuma && cardtime && cardnumer && validName) {
                Ncard += 1
                Nucard = Ncard
                Nucard = Math.max(0, Ncard)
                maxrightskip += 1
                let evreilength = Math.round(cardsuma / 500)
                let card = new Card(cardnumer, cardtime, cardname, cardsuma, procent, Ncard);
                cards.push(card);

    for (let i = 0; i < evreilength; i++) {
        let evrey = new Evrey();    
        evrei.push(evrey);
        evrey.display();            
    }



            }
        });

    } else if (poslygi === 2) {
        Nucard = Ncard
        rightskip = Nucard
        leftskip = 1
        leftskip = Math.max(0, Ncard)
        document.querySelector('.poslygi').innerHTML = `

            
                    <div class="poslygigolovna">
                        <h1>ваша історія</h1>
                        <h2>ОляБанк</h2>
                    </div>
                    <div class="footer-poslyg">
                    <p class="skip-left"> < </p>
                    
                    <p class="skip-right"> > </p>
                    </div>

                    <div class="cardscredit2">


                        <div class="cardscredit">
                        </div>
                    </div>
                    <div class="footer-poslyg">
                        <p class="poslygi2">оформлення кредитів</p>
                        <p class="history">ваші кредити</p>
                    </div>

        <div class='allinfocard'></div>

        `;

        let currentX = (cards.length - 2 ) * 600;
            document.querySelector('.cardscredit').style.transform = `translateX(${currentX}px)`;
        for (let card of cards) {
            card.display();
            card.animka(Nucard);

        }

        document.querySelector('.poslygi2').addEventListener('click', function () {
            poslygi = 1;
            renderPoslygi();
        });

        document.querySelector('.history').addEventListener('click', function () {
            poslygi = 2;

            renderPoslygi();
        });
document.querySelector('.skip-left').addEventListener('mousedown', function () {
    if (leftskip > 0 && Nucard < Ncard && skip === 0) {
        currentX += 600;
        Nucard = Math.min(Ncard, Nucard + 1);  
        rightskip = Nucard;
        leftskip = Math.max(0, leftskip - 1);  
        document.querySelector('.cardscredit').style.transform = `translateX(${currentX}px)`;
        updateCardsDisplay();
    }
});

document.querySelector('.skip-right').addEventListener('mousedown', function () {
    if (rightskip > 0 && Nucard > 1 && skip === 0) {
        currentX -= 600;
        Nucard = Math.max(1, Nucard - 1); 
        rightskip = Nucard;
        leftskip = Math.min(Ncard, leftskip + 1); 
        document.querySelector('.cardscredit').style.transform = `translateX(${currentX}px)`;
        updateCardsDisplay();
    }
});

}}
function updateCardsDisplay() {
        for (let card of cards) {
            card.animka(Nucard);

}}
renderPoslygi();