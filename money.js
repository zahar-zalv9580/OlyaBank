 const rates = {
      usd: 40.00,
      eur: 43.00,
      pln: 10.00,
      gbp: 50.00,
      chf: 45.00,
      jpy: 0.26,
      cny: 5.50,
      uah: 1.00
    };

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