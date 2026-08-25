```javascript
/* =========================================
   SUNAMITA WELLNESS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

/*
   IMPORTANTE:
   Aquí pondremos el número de WhatsApp de Susan.

   Formato:
   código del país + número
   SIN +, SIN espacios y SIN guiones.

   Ejemplo para Países Bajos:
   31612345678

   CAMBIA ESTE NÚMERO POR EL DE SUSAN.
*/

const WHATSAPP_NUMBER = "31640555065";


/* =========================================
   LANGUAGE SYSTEM
========================================= */

const languageSelector =
  document.getElementById("languageSelector");


function getSavedLanguage() {

  return localStorage.getItem("sunamitaLanguage") || "nl";

}


function saveLanguage(language) {

  localStorage.setItem("sunamitaLanguage", language);

}


function changeLanguage(language) {

  document.documentElement.lang = language;

  saveLanguage(language);


  /*
     Cambiar todos los elementos que tengan
     data-nl, data-en o data-es.
  */

  document.querySelectorAll("[data-" + language + "]")
    .forEach(element => {

      const translation =
        element.getAttribute("data-" + language);

      if (translation !== null) {

        element.textContent = translation;

      }

    });


  /*
     También cambiamos placeholders.
  */

  document.querySelectorAll("[data-placeholder-" + language + "]")
    .forEach(element => {

      element.placeholder =
        element.getAttribute(
          "data-placeholder-" + language
        );

    });


  /*
     Actualizar los textos dinámicos
     del formulario.
  */

  updateFormLanguage(language);

}


/* =========================================
   INITIAL LANGUAGE
========================================= */

if (languageSelector) {

  const savedLanguage = getSavedLanguage();

  languageSelector.value = savedLanguage;

  changeLanguage(savedLanguage);


  languageSelector.addEventListener(
    "change",
    function () {

      changeLanguage(this.value);

    }
  );

}


/* =========================================
   TRANSLATIONS FOR FORM
========================================= */

const formTranslations = {

  nl: {

    categoryPlaceholder:
      "-- Kies een categorie --",

    servicePlaceholder:
      "-- Kies eerst een categorie --",

    otherProblem:
      "Beschrijf uw probleem",

    priceTitle:
      "💶 Indicatie van de prijs",

    basePrice:
      "Basisprijs:",

    surcharge:
      "Toeslag bij specifieke voetproblemen:",

    from:
      "vanaf €20",

    finalPrice:
      "De definitieve prijs wordt vooraf door Susan bevestigd."

  },


  en: {

    categoryPlaceholder:
      "-- Choose a category --",

    servicePlaceholder:
      "-- Choose a category first --",

    otherProblem:
      "Describe your concern",

    priceTitle:
      "💶 Estimated price",

    basePrice:
      "Base price:",

    surcharge:
      "Additional charge for specific foot concerns:",

    from:
      "from €20",

    finalPrice:
      "The final price will be confirmed by Susan in advance."

  },


  es: {

    categoryPlaceholder:
      "-- Elige una categoría --",

    servicePlaceholder:
      "-- Elige primero una categoría --",

    otherProblem:
      "Describe tu problema",

    priceTitle:
      "💶 Precio estimado",

    basePrice:
      "Precio base:",

    surcharge:
      "Suplemento por problemas específicos de los pies:",

    from:
      "desde €20",

    finalPrice:
      "Susan confirmará el precio final antes de la cita."

  }

};


function updateFormLanguage(language) {

  const category =
    document.getElementById("category");

  const service =
    document.getElementById("service");


  if (category) {

    category.options[0].text =
      formTranslations[language].categoryPlaceholder;

  }


  if (service) {

    /*
       Solo cambiar el placeholder si todavía
       no se ha seleccionado un servicio.
    */

    if (!service.value) {

      service.options[0].text =
        formTranslations[language].servicePlaceholder;

    }

  }

}


/* =========================================
   SERVICE DATABASE
========================================= */

const services = {


  massage: [

    {
      nl: "Lichaamsmassage 30 min",
      en: "Body massage 30 min",
      es: "Masaje corporal 30 min",

      prices: {
        home: 35,
        domicilio: 50,
        salon: 40
      }
    },

    {
      nl: "Lichaamsmassage 60 min",
      en: "Body massage 60 min",
      es: "Masaje corporal 60 min",

      prices: {
        home: 65,
        domicilio: 85,
        salon: 75
      }
    },

    {
      nl: "Rug, schouders & nek 30 min",
      en: "Back, shoulders & neck 30 min",
      es: "Espalda, hombros y cuello 30 min",

      prices: {
        home: 30,
        domicilio: 45,
        salon: 35
      }
    },

    {
      nl: "Rug, schouders & nek 60 min",
      en: "Back, shoulders & neck 60 min",
      es: "Espalda, hombros y cuello 60 min",

      prices: {
        home: 55,
        domicilio: 75,
        salon: 65
      }
    },

    {
      nl: "Hoofd & gezichtsmassage 30 min",
      en: "Head & facial massage 30 min",
      es: "Masaje de cabeza y rostro 30 min",

      prices: {
        home: 25,
        domicilio: 40,
        salon: 30
      }
    },

    {
      nl: "Hoofd & gezichtsmassage 60 min",
      en: "Head & facial massage 60 min",
      es: "Masaje de cabeza y rostro 60 min",

      prices: {
        home: 45,
        domicilio: 60,
        salon: 50
      }
    },

    {
      nl: "Lymfatische massage 30 min",
      en: "Lymphatic massage 30 min",
      es: "Masaje linfático 30 min",

      prices: {
        home: 40,
        domicilio: 55,
        salon: 45
      }
    },

    {
      nl: "Lymfatische massage 60 min",
      en: "Lymphatic massage 60 min",
      es: "Masaje linfático 60 min",

      prices: {
        home: 70,
        domicilio: 90,
        salon: 80
      }
    }

  ],


  feet: [

    {
      nl: "Basis pedicure",
      en: "Basic pedicure",
      es: "Pedicura básica",

      prices: {
        home: 35,
        domicilio: 45,
        salon: 40
      }
    },

    {
      nl: "Pedicure + normale lak",
      en: "Pedicure + regular polish",
      es: "Pedicura + esmalte normal",

      prices: {
        home: 40,
        domicilio: 50,
        salon: 45
      }
    },

    {
      nl: "Pedicure + gellak",
      en: "Pedicure + gel polish",
      es: "Pedicura + esmalte gel",

      prices: {
        home: 50,
        domicilio: 60,
        salon: 55
      }
    },

    {
      nl: "Alleen nagels knippen & vijlen",
      en: "Nail trimming & filing only",
      es: "Solo cortar y limar uñas",

      prices: {
        home: 22.5,
        domicilio: 32.5,
        salon: 27.5
      }
    },

    {
      nl: "Schimmelnagelbehandeling",
      en: "Fungal nail treatment",
      es: "Tratamiento de hongos en las uñas",

      prices: {
        home: 37.5,
        domicilio: 47.5,
        salon: 42.5
      }
    },

    {
      nl: "Ingegroeide nagel",
      en: "Ingrown nail",
      es: "Uña encarnada",

      prices: {
        home: 32.5,
        domicilio: 42.5,
        salon: 37.5
      }
    },

    {
      nl: "Verdikte nagels",
      en: "Thickened nails",
      es: "Uñas engrosadas",

      prices: {
        home: 37.5,
        domicilio: 47.5,
        salon: 42.5
      }
    },

    {
      nl: "Likdoorn verwijderen",
      en: "Corn removal",
      es: "Eliminación de callo",

      prices: {
        home: 27.5,
        domicilio: 37.5,
        salon: 32.5
      }
    },

    {
      nl: "Kloven / ragades",
      en: "Cracked skin / fissures",
      es: "Grietas / fisuras",

      prices: {
        home: 27.5,
        domicilio: 37.5,
        salon: 32.5
      }
    }

  ],


  nails: [

    {
      nl: "Manicure + normale lak",
      en: "Manicure + regular polish",
      es: "Manicura + esmalte normal",

      prices: {
        home: 27.5,
        domicilio: 37.5,
        salon: 32.5
      }
    },

    {
      nl: "Manicure + gellak",
      en: "Manicure + gel polish",
      es: "Manicura + esmalte gel",

      prices: {
        home: 37.5,
        domicilio: 47.5,
        salon: 42.5
      }
    },

    {
      nl: "BIAB behandeling",
      en: "BIAB treatment",
      es: "Tratamiento BIAB",

      prices: {
        home: 40,
        domicilio: 50,
        salon: 45
      }
    },

    {
      nl: "Dip Powder",
      en: "Dip Powder",
      es: "Dip Powder",

      prices: {
        home: 55,
        domicilio: 65,
        salon: 60
      }
    }

  ],


  spa: [

    {
      nl: "Spa Pedicure All-in",
      en: "All-in Spa Pedicure",
      es: "Spa Pedicura All-in",

      prices: {
        home: 60,
        domicilio: 70,
        salon: 65
      }
    },

    {
      nl: "Spa Pedicure + normale lak",
      en: "Spa Pedicure + regular polish",
      es: "Spa Pedicura + esmalte normal",

      prices: {
        home: 70,
        domicilio: 80,
        salon: 75
      }
    },

    {
      nl: "Spa Pedicure + gellak",
      en: "Spa Pedicure + gel polish",
      es: "Spa Pedicura + esmalte gel",

      prices: {
        home: 80,
        domicilio: 90,
        salon: 85
      }
    }

  ],


  reflex: [

    {
      nl: "Voetreflexologie 30 min",
      en: "Foot reflexology 30 min",
      es: "Reflexología podal 30 min",

      prices: {
        home: 35,
        domicilio: 50,
        salon: 40
      }
    },

    {
      nl: "Voetreflexologie 60 min",
      en: "Foot reflexology 60 min",
      es: "Reflexología podal 60 min",

      prices: {
        home: 60,
        domicilio: 80,
        salon: 70
      }
    }

  ]

};


/* =========================================
   CATEGORY SELECT
========================================= */

const categorySelect =
  document.getElementById("category");

const serviceSelect =
  document.getElementById("service");


if (categorySelect && serviceSelect) {

  categorySelect.addEventListener(
    "change",
    function () {

      const category = this.value;

      serviceSelect.innerHTML = "";

      const language =
        getSavedLanguage();


      const placeholder =
        document.createElement("option");

      placeholder.value = "";

      placeholder.textContent =
        formTranslations[language].servicePlaceholder;

      serviceSelect.appendChild(placeholder);


      if (!category || !services[category]) {

        return;

      }


      services[category].forEach(
        (service, index) => {

          const option =
            document.createElement("option");

          option.value =
            category + "-" + index;

          option.dataset.category =
            category;

          option.dataset.index =
            index;

          option.textContent =
            service[language];

          serviceSelect.appendChild(option);

        }
      );

    }
  );

}


/* =========================================
   UPDATE SERVICES WHEN LANGUAGE CHANGES
========================================= */

function refreshServicesLanguage(language) {

  if (!categorySelect || !serviceSelect) {

    return;

  }


  const category =
    categorySelect.value;

  if (!category || !services[category]) {

    return;

  }


  const selectedValue =
    serviceSelect.value;


  serviceSelect.innerHTML = "";


  const placeholder =
    document.createElement("option");

  placeholder.value = "";

  placeholder.textContent =
    formTranslations[language].servicePlaceholder;

  serviceSelect.appendChild(placeholder);


  services[category].forEach(
    (service, index) => {

      const option =
        document.createElement("option");

      option.value =
        category + "-" + index;

      option.textContent =
        service[language];

      serviceSelect.appendChild(option);

    }
  );


  if (selectedValue) {

    serviceSelect.value =
      selectedValue;

  }

}


/* =========================================
   PATCH LANGUAGE FUNCTION
========================================= */

const originalChangeLanguage =
  changeLanguage;


changeLanguage = function(language) {

  originalChangeLanguage(language);

  refreshServicesLanguage(language);

};


/* =========================================
   FOOT PROBLEM LOGIC
========================================= */

const noProblem =
  document.getElementById("noProblem");


const problemCheckboxes =
  document.querySelectorAll(
    'input[name="problem"]'
  );


if (noProblem) {

  noProblem.addEventListener(
    "change",
    function () {

      if (this.checked) {

        problemCheckboxes.forEach(
          checkbox => {

            if (checkbox !== noProblem) {

              checkbox.checked = false;

            }

          }
        );

      }

    }
  );

}


problemCheckboxes.forEach(
  checkbox => {

    if (checkbox !== noProblem) {

      checkbox.addEventListener(
        "change",
        function () {

          if (this.checked && noProblem) {

            noProblem.checked = false;

          }

          updateOtherProblem();

        }
      );

    }

  }
);


/* =========================================
   OTHER PROBLEM
========================================= */

const otherProblemContainer =
  document.getElementById(
    "otherProblemContainer"
  );


const otherProblem =
  document.getElementById(
    "otherProblem"
  );


function updateOtherProblem() {

  const otherCheckbox =
    Array.from(problemCheckboxes)
      .find(
        checkbox =>
          checkbox.value === "Andere"
      );


  if (!otherProblemContainer) {

    return;

  }


  if (otherCheckbox && otherCheckbox.checked) {

    otherProblemContainer.style.display =
      "block";

    if (otherProblem) {

      otherProblem.required = true;

    }

  } else {

    otherProblemContainer.style.display =
      "none";

    if (otherProblem) {

      otherProblem.required = false;

      otherProblem.value = "";

    }

  }

}


/* =========================================
   PRICE CALCULATION
========================================= */

const pricePreview =
  document.getElementById(
    "pricePreview"
  );


const basePriceElement =
  document.getElementById(
    "basePrice"
  );


function getSelectedLocation() {

  const selected =
    document.querySelector(
      'input[name="location"]:checked'
    );

  if (!selected) {

    return null;

  }

  return selected.dataset.priceColumn;

}


function getSelectedService() {

  if (!serviceSelect ||
      !serviceSelect.value) {

    return null;

  }


  const [category, index] =
    serviceSelect.value.split("-");


  if (!services[category] ||
      !services[category][index]) {

    return null;

  }


  return services[category][index];

}


function updatePrice() {

  const service =
    getSelectedService();

  const location =
    getSelectedLocation();


  if (!service || !location) {

    if (pricePreview) {

      pricePreview.style.display =
        "none";

    }

    return;

  }


  const price =
    service.prices[location];


  if (basePriceElement) {

    basePriceElement.textContent =
      formatPrice(price);

  }


  if (pricePreview) {

    pricePreview.style.display =
      "block";

  }

}


if (serviceSelect) {

  serviceSelect.addEventListener(
    "change",
    updatePrice
  );

}


document
  .querySelectorAll(
    'input[name="location"]'
  )
  .forEach(
    radio => {

      radio.addEventListener(
        "change",
        updatePrice
      );

    }
  );


/* =========================================
   PRICE FORMAT
========================================= */

function formatPrice(price) {

  return new Intl.NumberFormat(
    "nl-NL",
    {
      style: "currency",
      currency: "EUR"
    }
  ).format(price);

}


/* =========================================
   GET FOOT PROBLEMS
========================================= */

function getFootProblems() {

  const selected =
    Array.from(
      document.querySelectorAll(
        'input[name="problem"]:checked'
      )
    );


  if (selected.length === 0) {

    return [];

  }


  return selected.map(
    checkbox => checkbox.value
  );

}


/* =========================================
   APPOINTMENT FORM
========================================= */

const appointmentForm =
  document.getElementById(
    "appointmentForm"
  );


if (appointmentForm) {

  appointmentForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const name =
        document.getElementById(
          "name"
        ).value.trim();


      const phone =
        document.getElementById(
          "phone"
        ).value.trim();


      const email =
        document.getElementById(
          "email"
        ).value.trim();


      const location =
        document.querySelector(
          'input[name="location"]:checked'
        );


      const service =
        getSelectedService();


      const problems =
        getFootProblems();


      const other =
        otherProblem
          ? otherProblem.value.trim()
          : "";


      const extraMessage =
        document.getElementById(
          "message"
        )?.value.trim() || "";


      if (!name ||
          !phone ||
          !location ||
          !service) {

        alert(
          getSavedLanguage() === "es"
            ? "Por favor completa todos los campos obligatorios."
            : getSavedLanguage() === "en"
              ? "Please complete all required fields."
              : "Vul alle verplichte velden in."
        );

        return;

      }


      /*
         PROBLEEM VOETEN
      */

      let problemText;


      if (
        problems.includes(
          "Ik heb geen problemen met mijn voeten"
        )
      ) {

        problemText =
          "Ik heb geen problemen met mijn voeten";

      } else {

        problemText =
          problems.join(", ");

      }


      /*
         Als Andere is geselecteerd
      */

      let otherText = "";

      if (other) {

        otherText =
          "\n📝 Extra uitleg voetprobleem: " +
          other;

      }


      /*
         TOESLAG
      */

      const hasFootProblem =
        problems.length > 0 &&
        !problems.includes(
          "Ik heb geen problemen met mijn voeten"
        );


      const surchargeText =
        hasFootProblem
          ? "vanaf €20"
          : "€0";


      /*
         BASISPRIJS
      */

      const locationKey =
        location.dataset.priceColumn;


      const basePrice =
        service.prices[locationKey];


      /*
         WHATSAPP MESSAGE
      */

      const message =

`Hallo Susan, ik wil graag een afspraak maken.

👤 Naam: ${name}

📞 Telefoon: ${phone}

📧 E-mail: ${email || "Niet opgegeven"}

💆 Behandeling: ${service.nl}

📍 Locatie: ${location.value}

💶 Basisprijs: ${formatPrice(basePrice)}

🦶 Voetproblemen: ${problemText}

➕ Toeslag bij voetproblemen: ${surchargeText}${otherText}

${extraMessage
  ? "📝 Extra informatie: " + extraMessage + "\n"
  : ""
}
Ik wil graag een afspraak maken.
Kunt u mij laten weten wat de totale prijs wordt en welke datum en tijd beschikbaar zijn?

Alvast bedankt!`;


      /*
         OPEN WHATSAPP
      */

      const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* =========================================
   DIRECT WHATSAPP BUTTON
========================================= */

const directWhatsapp =
  document.getElementById(
    "directWhatsapp"
  );


if (directWhatsapp) {

  directWhatsapp.href =
    "https://wa.me/" +
    WHATSAPP_NUMBER;

}


/* =========================================
   END
========================================= */
```
