 const rates = {
      usd: 40.00,
      eur: 43.00,
      pln: 10.00,
      gbp: 50.00,
      chf: 45.00,
      jpy: 0.26,
      cny: 5.50,
      log: 1.50,
      olya: 52.69,
      uah: 1.00
    };
document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('.sigma');
  const mainContainer = document.querySelector('.container');
    const mainContainer1 = document.querySelector('footer');
      const mainContainer2 = document.querySelector('nav');
        const mainContainer3 = document.querySelector('body');
  let isBackgroundVisible = false;

  footer.addEventListener('click', function () {
    if (!isBackgroundVisible) {
      mainContainer.style.backgroundImage = 'url("https://i.imgflip.com/9vukb9.jpg")';
      mainContainer.style.backgroundSize = 'cover';
      mainContainer.style.backgroundPosition = 'center';
      mainContainer.style.backgroundRepeat = 'no-repeat';
      mainContainer1.style.backgroundImage = 'url("https://i.imgflip.com/9vukb9.jpg")';
      mainContainer1.style.backgroundSize = 'cover';
      mainContainer1.style.backgroundPosition = 'center';
      mainContainer1.style.backgroundRepeat = 'no-repeat';
      mainContainer2.style.backgroundImage = 'url("https://i.imgflip.com/9vukb9.jpg")';
      mainContainer2.style.backgroundSize = 'cover';
      mainContainer2.style.backgroundPosition = 'center';
      mainContainer2.style.backgroundRepeat = 'no-repeat';
      mainContainer3.style.backgroundImage = 'url("https://i.imgflip.com/9vukb9.jpg")';
      mainContainer3.style.backgroundSize = 'cover';
      mainContainer3.style.backgroundPosition = 'center';
      mainContainer3.style.backgroundRepeat = 'no-repeat';
      isBackgroundVisible = true;
    } else {
      mainContainer.style.backgroundImage = '';
      mainContainer1.style.backgroundImage = '';
      mainContainer2.style.backgroundImage = '';
      mainContainer3.style.backgroundImage = '';
      isBackgroundVisible = false;
    }
  });
});
    const translations = {
      ua: {
        title: 'Конвертер валют',
        amountLabel: 'Сума:',
        convert: 'Конвертувати',
        langLabel: 'Мова:',
        infoTitle: 'Додаткова інформація',
        infoText: 'Цей конвертер дозволяє обмінювати гривні на інші валюти і навпаки. Курси є умовними. Для офіційних даних зверніться до Діда Петра за гаражами.',
        invalidInput: 'Будь ласка, введіть коректну суму.'
      },
      en: {
        title: 'Currency Converter',
        amountLabel: 'Amount:',
        convert: 'Convert',
        langLabel: 'Language:',
        infoTitle: 'Additional Information',
        infoText: 'This converter allows you to exchange UAH to foreign currencies and back. Rates are illustrative. For official data, visit somebody, idk who',
        invalidInput: 'Please enter a valid amount.'
      }
    };

    function convert() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;
      const lang = document.getElementById('lang').value;
      const resultDiv = document.getElementById('result');

      if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = translations[lang].invalidInput;
        return;
      }

      const inUAH = amount * rates[from];
      const converted = inUAH / rates[to];

      resultDiv.textContent = `≈ ${converted.toFixed(2)} ${to.toUpperCase()}`;
    }

    function changeLanguage() {
      const lang = document.getElementById('lang').value;
      const t = translations[lang];

      document.getElementById('title').textContent = t.title;
      document.getElementById('amount-label').textContent = t.amountLabel;
      document.getElementById('convert-btn').textContent = t.convert;
      document.getElementById('lang-label').textContent = t.langLabel;
      document.getElementById('info-title').textContent = t.infoTitle;
      document.getElementById('info-text').innerHTML = t.infoText;
    }

    window.onload = changeLanguage;