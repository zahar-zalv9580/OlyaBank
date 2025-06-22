let smilek = ['💝','💘','💖','💗','💓','💕','💞','🩷','👹','👽','🐷','🎀','🎟️','🌞']
let smiles = [];
let smileimg = null;
let timesmile = null;
let oformimg = null;
let historyphoneimg = null;
let ssss = 0
let tys = []

class Smile {
    constructor() {
        this.Rsmile = Math.floor(Math.random() * smilek.length);
        this.smilik = smilek[this.Rsmile];
        this.element = document.createElement('div');
        this.element.className = 'smile';
        this.delay = Math.random() * (2 - 0.2) + 0.2;
        this.posY = Math.random() * 1170 - 530;
        this.posX = Math.random() * 1850 + 850;
        this.opacity = Math.random() * (1 - 0.2) + 0.2;
        this.size = this.opacity * 90;
        this.time = Math.random() * (15 - 9) + 9;
    }

    display() {
        document.querySelector('.poslygi').appendChild(this.element);
        this.element.style.transform = `translateX(${this.posX}px) translateY(${this.posY}px)`;
        this.element.style.fontSize = `${this.size}px`;
        this.element.style.transition = `opacity 2.5s ease`;
        this.element.style.opacity = this.opacity;
        this.element.style.animation = `smileM ${this.time}s linear infinite`;
        this.element.style.animationDelay = `${this.delay}s`;

        if (smileimg && smileimg.trim() !== "") {
            this.element.innerHTML = `<div class='smile'><img src='${smileimg}' class="img"></div>`;
            let img = this.element.querySelector("img");
            if (img) {
                img.style.width = `${this.size}px`;
                img.style.height = `${this.size}px`;
            }
        } else {
            this.element.innerHTML = `<div class='smile'>${this.smilik}</div>`;
            this.element.style.fontSize = `${this.size}px`;
        }

        if (timesmile) {
            this.element.style.animationDuration = `${timesmile}s`;
        }
    }

    animka() {
        setTimeout(() => {
            this.Rsmile = Math.floor(Math.random() * smilek.length);
            this.smilik = smilek[this.Rsmile];
            this.opacity = Math.random() * (1 - 0.2) + 0.2;
            this.size = this.opacity * 90;
        }, this.time * 10);
    }
}

let smilelength = 40;
class Card {
    constructor(cardnumer, cardtime, cardname, cardsuma, procent, Ncard) {
        this.numer = cardnumer;
        this.time = cardtime;
        this.name = cardname;
        this.suma = cardsuma.toFixed(1);
        this.procent = procent.toFixed(1);
        this.Ncard = Ncard;
        this.daysP = (this.suma / this.time).toFixed(1);
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
        <p>кредит на суму ${this.suma}</p>
        <p>з терміном ${this.time}дн</p>
        <p>був оформлен на ${this.name}</p>
        <p>з номером +${this.numer}</p>
        <p>процент до суми карти ${this.procent}</p>
        <p>щодена вартість кредиту ${this.daysP}</p>`;


    }

    display() {
        document.querySelector('.cardscredit').appendChild(this.element);
        document.querySelector('.allinfocard').style.opacity = "0";

        this.element.addEventListener('click', () => {
            if (Nucard === this.Ncard) {
                skip = 1;
                Nucard = this.Ncard;
                document.querySelector('.allinfocard').style.opacity = "1";
                document.querySelector('.allinfocard').innerHTML = "";
                const wrapper = document.createElement('div');
                wrapper.innerHTML = this.allinfo;
                document.querySelector('.allinfocard').appendChild(wrapper);

                const poslygiEl = document.querySelector('.poslygi');
                poslygiEl.style.transition = 'background 2s ease';
                document.querySelector('.allinfocard').style.transition = 'transform 1.5s ease';

                setTimeout(() => {
                    poslygiEl.style.background = 'rgb(0, 2, 24)';
                }, 500);

                for (let i = 0; i < smilelength; i++) {
                    if (skip === 1) {
                        let smile = new Smile();
                        smiles.push(smile);
                        smile.display();
                        smile.animka();
                    }
                }

                setTimeout(() => {
                    document.querySelector('.allinfocard').style.transform = 'translateX(0px)';
                }, 2500);

                document.querySelector('.But').innerHTML = `
                    <div class="footer-poslyg">
                        <h4 class="povernenya">вийти</h4>
                    </div>
                    <div class="footer-poslyg">
                        <h4 class="oplatakredit">оплатити креди</h4>
                        <h4 class="sc">змінити стиль карти</h4>
                    </div>
                `;

                document.querySelector('.poslygigolovna').innerHTML = `
                    <h1>Інформація кредиту</h1>
                    <h2>ОляБанк</h2>`;

                document.querySelectorAll('.card').forEach(cardEl => {
                    if (cardEl !== this.element) {
                        cardEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        cardEl.style.opacity = '0';
                    } else {
                        this.element.style.transform = 'translateY(-50px) scale(1)';
                        this.element.style.zIndex = "9000";
                    }
                });

document.querySelector('.oplatakredit').addEventListener('click', () => {
                document.querySelector('.tys').style.display = "block"
                setTimeout(() => {
            document.querySelector('.tys').style.display = "none"
            alert("кредит не оплачено ")
            alert("з вашого рахунку було знято всі кошти з вами Олябанк")
            alert("з вами Олябанк самий надійний банк у світі")
            }, 7500);
});


                document.querySelector('.povernenya').addEventListener('mouseenter', () => {
                    document.querySelector('.angry').style.display = "block";
                    document.querySelector('.angry').style.transition = "opacity 0.5s";
                    document.querySelector('.angry').style.opacity = 1;
                    setTimeout(() => {
                        document.querySelector('.angry').style.transition = "opacity 4s";
                        document.querySelector('.angry').style.opacity = 0;
                    }, 1000);
                });

                document.querySelector('.sc').addEventListener('click', () => {
                    document.querySelector('.styleset1').style.display = "flex";
                    document.querySelector('.poslygi').style.filter = "blur(5px)"
                    document.querySelector('.poslygi').style.pointerEvents = "none"
                });

                document.querySelector('.zmina1').addEventListener('click', () => {
                    let phonecard = document.querySelector('.phonecard').value;
                    let colortxtcard = document.querySelector('.colortext').value;
                    let family = document.querySelector('.family').value;
                    let scalecardX = document.querySelector('.scalecardX').value;
                    let scalecardY = document.querySelector('.scalecardY').value;
                    let timeanimcard = document.querySelector('.timeanimcard').value;
                    let phonecardimg = document.querySelector('.phonecardimg').value
                    if (phonecard) {
                        this.element.style.background = `${phonecard}`;
                    }
                    if (colortxtcard) {
                            const allPs = this.element.querySelectorAll('p');
                            allPs.forEach(p => p.style.color = colortxtcard);
                    }
                    if (family) {
                    const allPs = this.element.querySelectorAll('p');
                    allPs.forEach(p => p.style.fontFamily = family);
                    this.element.querySelector('.card-logo').style.fontFamily = family;
                    }
                    if (scalecardX) {
                        this.element.style.maxWidth = scalecardX;
                        this.element.style.minWidth = scalecardX;
                    }
                    if (scalecardY) {
                        this.element.style.maxHeight = scalecardY;
                        this.element.style.minHeight = scalecardY;
                    }
                    if (timeanimcard) {
                        this.element.style.transition = `transform ${timeanimcard}s ease`;
                    }
                    if(phonecardimg){
                        this.element.style.background = `url('${phonecardimg}')`
                    }
                    document.querySelector('.styleset1').style.display = "none";
                    document.querySelector('.poslygi').style.filter = "blur(0px)"
                    document.querySelector('.poslygi').style.pointerEvents = "all"
                });

                document.querySelector('.povernenya').addEventListener('click', () => {
                    document.querySelectorAll('.card').forEach(cardEl => {
                        cardEl.style.opacity = '1';
                        cardEl.style.transform = 'translateY(0) scale(1)';
                    });
                    skip = 0;
                    Nucard = this.Ncard;
                    this.element.style.transform = 'translateY(200px) scale(1.5)';
                    document.querySelector('.allinfocard').style.opacity = '0';
                    document.querySelector('.footer-poslyg').style.opacity = '1';
                    document.querySelector('.footer-poslyg').style.zIndex = '1';
                    document.querySelector('.poslygi').style.background = 'rgba(255, 156, 212, 1)';
                    renderPoslygi();
                });
            }
        });
    }

    animka(Nucard) {
        if (Nucard === this.Ncard) {
            this.element.style.transform = `scale(1.5)`;
            this.element.style.zIndex = "100";
        } else {
            this.element.style.zIndex = "2";
            this.element.style.transform = `scale(1)`;
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
        if(oformimg){
            document.querySelector('.poslygi').style.background = `url('${oformimg}')`
        }
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
                    <p class="seting">налаштуваня</p>
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

    document.querySelector('.seting').addEventListener('click', function () {
        document.querySelector('.styleset').style.display = "flex"
    })
document.querySelector('.zmina2').addEventListener('click', function () {
    let phonecard = document.querySelector('.phonecardall')?.value;
    let phonecardimg = document.querySelector('.phonecardimgall')?.value;
    let textcolor = document.querySelector('.colortextallcard')?.value;
    let font = document.querySelector('.familyall')?.value;
    let scaleX = document.querySelector('.scalecardXall')?.value;
    let scaleY = document.querySelector('.scalecardYall')?.value;
    let timeanimcardall = document.querySelector('.timeanimcardall')?.value;
    timesmile = document.querySelector('.timesmile')?.value;
    smileimg = document.querySelector('.smileimg')?.value;
    let phonecardinfoimgall = document.querySelector('.phonecardinfoimgall')?.value;
    historyphoneimg = document.querySelector('.historyphoneimg')?.value;
    oformimg = document.querySelector('.oformimg')?.value;
    let setingphone = document.querySelector('.setingphone')?.value;
    let setingphoneimg = document.querySelector('.setingphoneimg')?.value;
    let timeanimall = document.querySelector('.timeanimall')?.value;
    if (cards.length > 0) {
        cards.forEach(card => {
            if (phonecard) {
                card.element.style.background = phonecard;
            }
            if (phonecardimg) {
                card.element.style.background = `url('${phonecardimg}')`;
                card.element.style.backgroundSize = 'cover';
            }
            if (textcolor) {
                card.element.querySelectorAll('p').forEach(p => {
                    p.style.color = textcolor;
                });
            }
            if (scaleX) {
                card.element.style.maxWidth = scaleX;
                card.element.style.minWidth = scaleX;
            }
            if (scaleY) {
                card.element.style.maxHeight = scaleY;
                card.element.style.minHeight = scaleY;
            }
            if (timeanimcardall) {
                card.element.style.transition = `transform ${timeanimcardall}s ease`;
            }
             
            if (phonecardinfoimgall) {
                document.querySelector('.allinfocard').style.background = `url('${phonecardinfoimgall}')`;
            }
        });
    }

    if (font) {
        document.querySelectorAll('*').forEach(el => {
            el.style.fontFamily = font;
        });
    }

    if (setingphone) {
        document.querySelector(".styleset").style.background = setingphone;
        document.querySelector(".styleset1").style.background = setingphone;
    }

    if (setingphoneimg) {
        document.querySelector(".styleset").style.background = `url('${setingphoneimg}')`;
        document.querySelector(".styleset1").style.background = `url('${setingphoneimg}')`;
    }


smiles.forEach(smile => {
    if (timesmile) {
        smile.time = timesmile;
        smile.element.style.animationDuration = `${timesmile}s`;
    }

    if (smileimg && smileimg.trim() !== "") {
        smile.element.innerHTML = `<div class='smile'><img src='${smileimg}' class="img"></div>`;
        let img = smile.element.querySelector("img");
        if (img) {
            img.style.width = `${smile.size}px`;
            img.style.height = `${smile.size}px`;
        }
    } else {
        smile.element.innerHTML = `<div class='smile'>${smile.smilik}</div>`;
        smile.element.style.fontSize = `${smile.size}px`;
    }
});
    
    document.querySelector('.styleset').style.display = "none"
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
        if(historyphoneimg){
            document.querySelector('.poslygi').style.background = `url('${historyphoneimg}')`
        }
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
                    <div class="But">
                    <div class="footer-poslyg">
                        <p class="poslygi2">оформлення кредитів</p>
                        <p class="history">ваші кредити</p>
                    </div>
                    </div>

        <div class='allinfocard'></div>

        `;
        let currentX = (cards.length - 2 ) * 600;
            document.querySelector('.cardscredit').style.transform = `translateX(${currentX}px)`;
        for (let card of cards) {
            card.display();
            card.animka(Nucard);

        }
if (typeof timeanimall !== 'undefined' && timeanimall) {
    document.querySelector(".cardscredit").style.transition = `transform ${timeanimall}s ease`;
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