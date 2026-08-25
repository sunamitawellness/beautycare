/* =====================================================
   SUNAMITA WELLNESS
   COMPLETE WEBSITE SCRIPT
===================================================== */


/* =====================================================
   WHATSAPP
===================================================== */

const WHATSAPP_NUMBER = "31640555065";


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const languageSelector =
  document.getElementById("languageSelector");

let currentLanguage =
  localStorage.getItem("sunamitaLanguage") || "nl";


/* =====================================================
   TRANSLATIONS
===================================================== */

const T = {

  nl: {

    home: "Home",
    services: "Behandelingen",
    contact: "Contact & Afspraak",

    serviceTitle: "Behandelingen & Prijzen",

    categoryPlaceholder:
      "-- Kies een categorie --",

    servicePlaceholder:
      "-- Kies uw behandeling --",

    locationQuestion:
      "Waar wilt u de behandeling?",

    categoryQuestion:
      "Kies een categorie",

    serviceQuestion:
      "Kies uw behandeling",

    footQuestion:
      "Heeft u problemen met uw voeten?",

    multiple:
      "U kunt meerdere opties selecteren.",

    noProblem:
      "Ik heb geen problemen met mijn voeten",

    other:
      "Andere",

    otherDescription:
      "Beschrijf uw probleem",

    extraInfo:
      "Extra informatie",

    optional:
      "optioneel",

    priceTitle:
      "💶 Indicatie van de prijs",

    basePrice:
      "Basisprijs:",

    surcharge:
      "Toeslag:",

    noProblemSurcharge:
      "€0",

    problemSurcharge:
      "vanaf €20",

    finalPrice:
      "De definitieve prijs wordt vooraf door Susan bevestigd.",

    appointmentButton:
      "💬 WhatsApp – Afspraak aanvragen",

    name:
      "Naam",

    phone:
      "Telefoon",

    email:
      "E-mail",

    notProvided:
      "Niet opgegeven",

    treatment:
      "Behandeling",

    location:
      "Locatie",

    footProblems:
      "Voetproblemen",

    extra:
      "Extra informatie",

    alert:
      "Vul alle verplichte velden in.",

    alertOther:
      "Beschrijf alstublieft uw probleem.",

    messageStart:
      "Hallo Susan, ik wil graag een afspraak maken.",

    appointmentQuestion:
      "Ik wil graag een afspraak maken. Kunt u mij laten weten wat de totale prijs wordt en welke datum en tijd beschikbaar zijn?",

    thanks:
      "Alvast bedankt!",

    homeSusan:
      "Bij Susan thuis",

    homeSusanSmall:
      "Behandeling bij Susan",

    yourHome:
      "Bij u thuis",

    yourHomeSmall:
      "Susan komt bij u thuis",

    salon:
      "In de salon",

    salonSmall:
      "Behandeling in de salon"

  },


  en: {

    home: "Home",
    services: "Services",
    contact: "Contact & Appointment",

    serviceTitle: "Services & Prices",

    categoryPlaceholder:
      "-- Choose a category --",

    servicePlaceholder:
      "-- Choose your treatment --",

    locationQuestion:
      "Where would you like the treatment?",

    categoryQuestion:
      "Choose a category",

    serviceQuestion:
      "Choose your treatment",

    footQuestion:
      "Do you have any foot concerns?",

    multiple:
      "You can select more than one option.",

    noProblem:
      "I have no problems with my feet",

    other:
      "Other",

    otherDescription:
      "Describe your concern",

    extraInfo:
      "Additional information",

    optional:
      "optional",

    priceTitle:
      "💶 Estimated price",

    basePrice:
      "Base price:",

    surcharge:
      "Additional charge:",

    noProblemSurcharge:
      "€0",

    problemSurcharge:
      "from €20",

    finalPrice:
      "The final price will be confirmed by Susan in advance.",

    appointmentButton:
      "💬 WhatsApp – Request an appointment",

    name:
      "Name",

    phone:
      "Phone",

    email:
      "Email",

    notProvided:
      "Not provided",

    treatment:
      "Treatment",

    location:
      "Location",

    footProblems:
      "Foot concerns",

    extra:
      "Additional information",

    alert:
      "Please complete all required fields.",

    alertOther:
      "Please describe your concern.",

    messageStart:
      "Hello Susan, I would like to make an appointment.",

    appointmentQuestion:
      "I would like to make an appointment. Could you please let me know the total price and which date and time are available?",

    thanks:
      "Thank you!",

    homeSusan:
      "At Susan's home",

    homeSusanSmall:
      "Treatment at Susan's home",

    yourHome:
      "At your home",

    yourHomeSmall:
      "Susan comes to your home",

    salon:
      "At the salon",

    salonSmall:
      "Treatment at the salon"

  },


  es: {

    home: "Inicio",
    services: "Servicios",
    contact: "Contacto y Cita",

    serviceTitle: "Servicios y Precios",

    categoryPlaceholder:
      "-- Elige una categoría --",

    servicePlaceholder:
      "-- Elige tu tratamiento --",

    locationQuestion:
      "¿Dónde quieres realizar el tratamiento?",

    categoryQuestion:
      "Elige una categoría",

    serviceQuestion:
      "Elige tu tratamiento",

    footQuestion:
      "¿Tienes algún problema en los pies?",

    multiple:
      "Puedes seleccionar varias opciones.",

    noProblem:
      "No tengo problemas en los pies",

    other:
      "Otro",

    otherDescription:
      "Describe tu problema",

    extraInfo:
      "Información adicional",

    optional:
      "opcional",

    priceTitle:
      "💶 Precio estimado",

    basePrice:
      "Precio base:",

    surcharge:
      "Suplemento:",

    noProblemSurcharge:
      "€0",

    problemSurcharge:
      "desde €20",

    finalPrice:
      "Susan confirmará el precio final antes de la cita.",

    appointmentButton:
      "💬 WhatsApp – Solicitar una cita",

    name:
      "Nombre",

    phone:
      "Teléfono",

    email:
      "Correo electrónico",

    notProvided:
      "No indicado",

    treatment:
      "Tratamiento",

    location:
      "Lugar",

    footProblems:
      "Problemas de los pies",

    extra:
      "Información adicional",

    alert:
      "Por favor completa todos los campos obligatorios.",

    alertOther:
      "Por favor describe tu problema.",

    messageStart:
      "Hola Susan, quisiera solicitar una cita.",

    appointmentQuestion:
      "Quisiera solicitar una cita. ¿Podrías decirme cuál sería el precio total y qué fecha y hora están disponibles?",

    thanks:
      "¡Muchas gracias!",

    homeSusan:
      "En casa de Susan",

    homeSusanSmall:
      "Tratamiento en casa de Susan",

    yourHome:
      "En su domicilio",

    yourHomeSmall:
      "Susan va a su domicilio",

    salon:
      "En el salón",

    salonSmall:
      "Tratamiento en el salón"

  }

};


/* =====================================================
   SERVICES
===================================================== */

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


/* =====================================================
   FOOT PROBLEMS
===================================================== */

const footProblems = {

  "Schimmelnagels": {
    nl: "Schimmelnagels",
    en: "Fungal nails",
    es: "Hongos en las uñas"
  },

  "Verdikte nagels": {
    nl: "Verdikte nagels",
    en: "Thickened nails",
    es: "Uñas engrosadas"
  },

  "Zwakke nagels": {
    nl: "Zwakke nagels",
    en: "Weak nails",
    es: "Uñas débiles"
  },

  "Ingegroeide nagel": {
    nl: "Ingegroeide nagel",
    en: "Ingrown nail",
    es: "Uña encarnada"
  },

  "Psoriasis aan de voeten": {
    nl: "Psoriasis aan de voeten",
    en: "Psoriasis on the feet",
    es: "Psoriasis en los pies"
  },

  "Likdoorn": {
    nl: "Likdoorn",
    en: "Corn",
    es: "Callo"
  },

  "Kloven / ragades": {
    nl: "Kloven / ragades",
    en: "Cracked skin / fissures",
    es: "Grietas / fisuras"
  },

  "Voetpijn": {
    nl: "Voetpijn",
    en: "Foot pain",
    es: "Dolor de pies"
  },

  "Andere": {
    nl: "Andere",
    en: "Other",
    es: "Otro"
  }

};


/* =====================================================
   ELEMENTS
===================================================== */

const categorySelect =
  document.getElementById("category");

const serviceSelect =
  document.getElementById("service");

const footProblemGroup =
  document.getElementById("footProblemGroup");

const noProblem =
  document.getElementById("noProblem");

const problemCheckboxes =
  document.querySelectorAll(
    'input[name="problem"]'
  );


/* =====================================================
   IS THIS A FOOT SERVICE?
===================================================== */

function isFootService() {

  if (!categorySelect) {
    return false;
  }

  const category =
    categorySelect.value;

  return (
    category === "feet" ||
    category === "spa" ||
    category === "reflex"
  );

}


/* =====================================================
   LOAD SERVICES
===================================================== */

function loadServices() {

  if (
    !categorySelect ||
    !serviceSelect
  ) {
    return;
  }

  const category =
    categorySelect.value;


  serviceSelect.innerHTML =
    "";


  const placeholder =
    document.createElement("option");

  placeholder.value =
    "";

  placeholder.textContent =
    T[currentLanguage]
      .servicePlaceholder;


  serviceSelect.appendChild(
    placeholder
  );


  if (
    !category ||
    !services[category]
  ) {

    updateFootProblemVisibility();

    return;

  }


  services[category].forEach(
    (service, index) => {

      const option =
        document.createElement("option");

      option.value =
        category + "-" + index;

      option.textContent =
        service[currentLanguage];

      serviceSelect.appendChild(
        option
      );

    }
  );


  updateFootProblemVisibility();

  updatePrice();

}


/* =====================================================
   CATEGORY CHANGE
===================================================== */

if (categorySelect) {

  categorySelect.addEventListener(
    "change",
    function() {

      loadServices();

    }
  );

}


/* =====================================================
   SELECTED SERVICE
===================================================== */

function getSelectedService() {

  if (
    !serviceSelect ||
    !serviceSelect.value
  ) {

    return null;

  }


  const parts =
    serviceSelect.value.split("-");


  const category =
    parts[0];

  const index =
    parseInt(parts[1]);


  if (
    !services[category] ||
    !services[category][index]
  ) {

    return null;

  }


  return services[category][index];

}


/* =====================================================
   FOOT PROBLEM VISIBILITY
===================================================== */

function updateFootProblemVisibility() {

  if (!footProblemGroup) {
    return;
  }


  if (isFootService()) {

    footProblemGroup.style.display =
      "block";

  } else {

    footProblemGroup.style.display =
      "none";


    problemCheckboxes.forEach(
      checkbox => {

        checkbox.checked =
          false;

      }
    );


    const other =
      document.getElementById(
        "otherProblem"
      );

    if (other) {

      other.value =
        "";

      other.required =
        false;

    }


    const otherContainer =
      document.getElementById(
        "otherProblemContainer"
      );

    if (otherContainer) {

      otherContainer.style.display =
        "none";

    }

  }


  updatePrice();

}


/* =====================================================
   SERVICE CHANGE
===================================================== */

if (serviceSelect) {

  serviceSelect.addEventListener(
    "change",
    function() {

      updateFootProblemVisibility();

      updatePrice();

    }
  );

}


/* =====================================================
   LOCATION
===================================================== */

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


/* =====================================================
   LOCATION KEY
===================================================== */

function getLocationKey() {

  const selected =
    document.querySelector(
      'input[name="location"]:checked'
    );


  if (!selected) {
    return null;
  }


  return selected.dataset.priceColumn;

}


/* =====================================================
   LOCATION NAME
===================================================== */

function getLocationName(
  key,
  language
) {

  const locations = {

    home: {

      nl: "Bij Susan thuis",
      en: "At Susan's home",
      es: "En casa de Susan"

    },

    domicilio: {

      nl: "Bij u thuis",
      en: "At your home",
      es: "En su domicilio"

    },

    salon: {

      nl: "In de salon",
      en: "At the salon",
      es: "En el salón"

    }

  };


  return locations[key][language];

}


/* =====================================================
   FOOT PROBLEMS — OTHER
===================================================== */

function updateOtherProblem() {

  const otherCheckbox =
    Array
      .from(problemCheckboxes)
      .find(
        checkbox =>
          checkbox.value ===
          "Andere"
      );


  const container =
    document.getElementById(
      "otherProblemContainer"
    );


  const textarea =
    document.getElementById(
      "otherProblem"
    );


  if (!container) {
    return;
  }


  if (
    otherCheckbox &&
    otherCheckbox.checked
  ) {

    container.style.display =
      "block";


    if (textarea) {

      textarea.required =
        true;

    }

  } else {

    container.style.display =
      "none";


    if (textarea) {

      textarea.required =
        false;

      textarea.value =
        "";

    }

  }

}


/* =====================================================
   NO FOOT PROBLEMS
===================================================== */

if (noProblem) {

  noProblem.addEventListener(
    "change",
    function() {

      if (this.checked) {

        problemCheckboxes
          .forEach(
            checkbox => {

              if (
                checkbox !==
                noProblem
              ) {

                checkbox.checked =
                  false;

              }

            }
          );

      }

      updateOtherProblem();

      updatePrice();

    }
  );

}


/* =====================================================
   OTHER FOOT PROBLEMS
===================================================== */

problemCheckboxes.forEach(
  checkbox => {

    if (
      checkbox !==
      noProblem
    ) {

      checkbox.addEventListener(
        "change",
        function() {

          if (
            this.checked &&
            noProblem
          ) {

            noProblem.checked =
              false;

          }


          updateOtherProblem();

          updatePrice();

        }
      );

    }

  }
);


/* =====================================================
   GET PROBLEMS
===================================================== */

function getProblems() {

  return Array
    .from(
      document.querySelectorAll(
        'input[name="problem"]:checked'
      )
    )
    .map(
      checkbox =>
        checkbox.value
    );

}


/* =====================================================
   PRICE
===================================================== */

function updatePrice() {

  const preview =
    document.getElementById(
      "pricePreview"
    );


  const basePriceElement =
    document.getElementById(
      "basePrice"
    );


  const surchargeElement =
    document.getElementById(
      "surchargeAmount"
    );


  const service =
    getSelectedService();


  const location =
    getLocationKey();


  if (
    !preview ||
    !basePriceElement ||
    !service ||
    !location
  ) {

    if (preview) {

      preview.style.display =
        "none";

    }

    return;

  }


  const basePrice =
    service.prices[location];


  basePriceElement.textContent =
    formatPrice(basePrice);


  /*
     SUPLEMENTO
  */

  if (surchargeElement) {

    if (!isFootService()) {

      surchargeElement.textContent =
        "€0";

    } else {

      const problems =
        getProblems();


      if (
        problems.length === 0 ||
        problems.includes(
          "Ik heb geen problemen met mijn voeten"
        )
      ) {

        surchargeElement.textContent =
          T[currentLanguage]
            .noProblemSurcharge;

      } else {

        surchargeElement.textContent =
          T[currentLanguage]
            .problemSurcharge;

      }

    }

  }


  preview.style.display =
    "block";


  updatePricePreviewLabels();

}


/* =====================================================
   PRICE LABELS
===================================================== */

function updatePricePreviewLabels() {

  const preview =
    document.getElementById(
      "pricePreview"
    );


  if (!preview) {
    return;
  }


  const t =
    T[currentLanguage];


  const title =
    preview.querySelector(
      "h3"
    );


  if (title) {

    title.textContent =
      t.priceTitle;

  }


  const surchargeText =
    document.getElementById(
      "surchargeText"
    );


  if (surchargeText) {

    surchargeText.textContent =
      t.surcharge;

  }


  const note =
    preview.querySelector(
      ".price-note"
    );


  if (note) {

    note.textContent =
      t.finalPrice;

  }

}


/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(price) {

  return new Intl.NumberFormat(
    "nl-NL",
    {
      style: "currency",
      currency: "EUR"
    }
  ).format(price);

}


/* =====================================================
   LANGUAGE CHANGE
===================================================== */

function changeLanguage(language) {

  currentLanguage =
    language;


  localStorage.setItem(
    "sunamitaLanguage",
    language
  );


  document.documentElement.lang =
    language;


  /*
     HTML DATA TRANSLATIONS
  */

  document
    .querySelectorAll(
      "[data-nl], [data-en], [data-es]"
    )
    .forEach(
      element => {

        const value =
          element.getAttribute(
            "data-" + language
          );


        if (
          value !== null
        ) {

          element.textContent =
            value;

        }

      }
    );


  translateMenu();

  translateLocations();

  translateForm();


  /*
     SERVICES PAGE
  */

  translateServicesPage();


  /*
     FORM SERVICES
  */

  if (categorySelect) {

    loadServices();

  }


  updatePrice();

}


/* =====================================================
   MENU
===================================================== */

function translateMenu() {

  const t =
    T[currentLanguage];


  document
    .querySelectorAll(
      'nav a[href="index.html"]'
    )
    .forEach(
      element => {

        element.textContent =
          t.home;

      }
    );


  document
    .querySelectorAll(
      'nav a[href="services.html"]'
    )
    .forEach(
      element => {

        element.textContent =
          t.services;

      }
    );


  document
    .querySelectorAll(
      'nav a[href="contact.html"]'
    )
    .forEach(
      element => {

        element.textContent =
          t.contact;

      }
    );

}


/* =====================================================
   LOCATION TRANSLATION
===================================================== */

function translateLocations() {

  const t =
    T[currentLanguage];


  document
    .querySelectorAll(
      'input[name="location"]'
    )
    .forEach(
      input => {

        const card =
          input.closest(
            ".option-card"
          );


        if (!card) {
          return;
        }


        const strong =
          card.querySelector(
            "strong"
          );


        const small =
          card.querySelector(
            "small"
          );


        if (
          input.dataset.priceColumn ===
          "home"
        ) {

          if (strong) {

            strong.textContent =
              t.homeSusan;

          }


          if (small) {

            small.textContent =
              t.homeSusanSmall;

          }

        }


        if (
          input.dataset.priceColumn ===
          "domicilio"
        ) {

          if (strong) {

            strong.textContent =
              t.yourHome;

          }


          if (small) {

            small.textContent =
              t.yourHomeSmall;

          }

        }


        if (
          input.dataset.priceColumn ===
          "salon"
        ) {

          if (strong) {

            strong.textContent =
              t.salon;

          }


          if (small) {

            small.textContent =
              t.salonSmall;

          }

        }

      }
    );

}


/* =====================================================
   FORM TRANSLATION
===================================================== */

function translateForm() {

  const t =
    T[currentLanguage];


  const category =
    document.getElementById(
      "category"
    );


  const service =
    document.getElementById(
      "service"
    );


  if (
    category &&
    !category.value
  ) {

    category.options[0].text =
      t.categoryPlaceholder;

  }


  if (
    service &&
    !service.value
  ) {

    service.options[0].text =
      t.servicePlaceholder;

  }


  const footTitle =
    document.querySelector(
      "#footProblemGroup > label"
    );


  if (footTitle) {

    footTitle.textContent =
      t.footQuestion;

  }


  const help =
    document.querySelector(
      "#footProblemGroup .help-text"
    );


  if (help) {

    help.textContent =
      t.multiple;

  }


  const noProblemLabel =
    document.querySelector(
      'label.no-problem strong'
    );


  if (noProblemLabel) {

    noProblemLabel.textContent =
      t.noProblem;

  }


  const otherContainer =
    document.getElementById(
      "otherProblemContainer"
    );


  if (otherContainer) {

    const label =
      otherContainer.querySelector(
        "label"
      );


    if (label) {

      label.textContent =
        t.otherDescription + " *";

    }

  }


  const messageLabel =
    document.querySelector(
      'label[for="message"]'
    );


  if (messageLabel) {

    messageLabel.textContent =
      t.extraInfo +
      " (" +
      t.optional +
      ")";

  }


  const button =
    document.querySelector(
      ".whatsapp-button"
    );


  if (button) {

    button.textContent =
      t.appointmentButton;

  }


  updatePricePreviewLabels();

}


/* =====================================================
   SERVICES PAGE TRANSLATIONS
===================================================== */

const staticTranslations = {

  "Behandelingen & Prijzen": {
    en: "Services & Prices",
    es: "Servicios y Precios"
  },

  "Kies de behandeling die bij u past.": {
    en: "Choose the treatment that suits you.",
    es: "Elige el tratamiento que mejor se adapte a ti."
  },

  "💆 Massages": {
    en: "💆 Massages",
    es: "💆 Masajes"
  },

  "🦶 Voetverzorging & Pedicure": {
    en: "🦶 Foot Care & Pedicure",
    es: "🦶 Cuidado de Pies y Pedicura"
  },

  "💅 Nagelverzorging": {
    en: "💅 Nail Care",
    es: "💅 Cuidado de Uñas"
  },

  "🌿 Spa Pedicure": {
    en: "🌿 Spa Pedicure",
    es: "🌿 Spa Pedicura"
  },

  "🌸 Voetreflexologie & Lymfatische massage": {
    en: "🌸 Foot Reflexology & Lymphatic Massage",
    es: "🌸 Reflexología Podal y Masaje Linfático"
  },

  "🦶 Voetproblemen": {
    en: "🦶 Foot Concerns",
    es: "🦶 Problemas de los Pies"
  },

  "Heeft u een specifiek probleem met uw voeten, zoals schimmelnagels, verdikte nagels, zwakke nagels, ingegroeide nagels, psoriasis, likdoorns of kloven?": {
    en: "Do you have a specific foot concern, such as fungal nails, thickened nails, weak nails, ingrown nails, psoriasis, corns or cracked skin?",
    es: "¿Tienes un problema específico en los pies, como hongos en las uñas, uñas engrosadas, uñas débiles, uñas encarnadas, psoriasis, callos o grietas?"
  },

  "Voor specifieke voetproblemen kan een toeslag vanaf €20 worden berekend, afhankelijk van de behandeling en de ernst van het probleem. De definitieve prijs wordt vooraf met u besproken.": {
    en: "For specific foot concerns, an additional charge from €20 may apply depending on the treatment and severity. The final price will be discussed with you in advance.",
    es: "Para problemas específicos de los pies puede aplicarse un suplemento desde €20, dependiendo del tratamiento y la gravedad. El precio final se confirmará previamente."
  },

  "Wilt u een afspraak maken?": {
    en: "Would you like to make an appointment?",
    es: "¿Quieres solicitar una cita?"
  },

  "Afspraak aanvragen": {
    en: "Request an appointment",
    es: "Solicitar una cita"
  }

};


const serviceNameTranslations = {

  "Lichaamsmassage 30 min": {
    en: "Body massage 30 min",
    es: "Masaje corporal 30 min"
  },

  "Lichaamsmassage 60 min": {
    en: "Body massage 60 min",
    es: "Masaje corporal 60 min"
  },

  "Rug, schouders & nek 30 min": {
    en: "Back, shoulders & neck 30 min",
    es: "Espalda, hombros y cuello 30 min"
  },

  "Rug, schouders & nek 60 min": {
    en: "Back, shoulders & neck 60 min",
    es: "Espalda, hombros y cuello 60 min"
  },

  "Hoofd & gezichtsmassage 30 min": {
    en: "Head & facial massage 30 min",
    es: "Masaje de cabeza y rostro 30 min"
  },

  "Hoofd & gezichtsmassage 60 min": {
    en: "Head & facial massage 60 min",
    es: "Masaje de cabeza y rostro 60 min"
  },

  "Lymfatische massage 30 min": {
    en: "Lymphatic massage 30 min",
    es: "Masaje linfático 30 min"
  },

  "Lymfatische massage 60 min": {
    en: "Lymphatic massage 60 min",
    es: "Masaje linfático 60 min"
  },

  "Basis pedicure": {
    en: "Basic pedicure",
    es: "Pedicura básica"
  },

  "Pedicure + normale lak": {
    en: "Pedicure + regular polish",
    es: "Pedicura + esmalte normal"
  },

  "Pedicure + gellak": {
    en: "Pedicure + gel polish",
    es: "Pedicura + esmalte gel"
  },

  "Alleen nagels knippen & vijlen": {
    en: "Nail trimming & filing only",
    es: "Solo cortar y limar uñas"
  },

  "Schimmelnagelbehandeling": {
    en: "Fungal nail treatment",
    es: "Tratamiento de hongos en las uñas"
  },

  "Ingegroeide nagel": {
    en: "Ingrown nail",
    es: "Uña encarnada"
  },

  "Verdikte nagels": {
    en: "Thickened nails",
    es: "Uñas engrosadas"
  },

  "Likdoorn verwijderen": {
    en: "Corn removal",
    es: "Eliminación de callo"
  },

  "Kloven / ragades": {
    en: "Cracked skin / fissures",
    es: "Grietas / fisuras"
  },

  "Manicure + normale lak": {
    en: "Manicure + regular polish",
    es: "Manicura + esmalte normal"
  },

  "Manicure + gellak": {
    en: "Manicure + gel polish",
    es: "Manicura + esmalte gel"
  },

  "BIAB behandeling": {
    en: "BIAB treatment",
    es: "Tratamiento BIAB"
  },

  "Dip Powder": {
    en: "Dip Powder",
    es: "Dip Powder"
  },

  "Spa Pedicure All-in": {
    en: "All-in Spa Pedicure",
    es: "Spa Pedicura All-in"
  },

  "Spa Pedicure + normale lak": {
    en: "Spa Pedicure + regular polish",
    es: "Spa Pedicura + esmalte normal"
  },

  "Spa Pedicure + gellak": {
    en: "Spa Pedicure + gel polish",
    es: "Spa Pedicura + esmalte gel"
  },

  "Voetreflexologie 30 min": {
    en: "Foot reflexology 30 min",
    es: "Reflexología podal 30 min"
  },

  "Voetreflexologie 60 min": {
    en: "Foot reflexology 60 min",
    es: "Reflexología podal 60 min"
  }

};


/* =====================================================
   TRANSLATE SERVICES PAGE
===================================================== */

function translateServicesPage() {

  const page =
    window.location.pathname
      .toLowerCase()
      .includes("services.html");


  if (!page) {
    return;
  }


  const language =
    currentLanguage;


  document
    .querySelectorAll(
      "h1, h2, h3, p, span, a"
    )
    .forEach(
      element => {

        const original =
          element.textContent.trim();


        if (
          staticTranslations[
            original
          ]
        ) {

          element.textContent =
            staticTranslations[
              original
            ][language] ||
            original;

          return;

        }


        if (
          serviceNameTranslations[
            original
          ]
        ) {

          element.textContent =
            serviceNameTranslations[
              original
            ][language] ||
            original;

        }

      }
    );


  /*
     TABLE HEADER
  */

  document
    .querySelectorAll(
      ".price-header span"
    )
    .forEach(
      span => {

        const text =
          span.textContent.trim();


        if (
          text ===
          "Behandeling" ||
          text ===
          "Treatment" ||
          text ===
          "Tratamiento"
        ) {

          span.textContent =
            language === "en"
              ? "Treatment"
              : language === "es"
                ? "Tratamiento"
                : "Behandeling";

        }


        if (
          text.includes(
            "Casa Suzan"
          ) ||
          text.includes(
            "Bij Susan thuis"
          ) ||
          text.includes(
            "Susan's home"
          ) ||
          text.includes(
            "Casa de Susan"
          )
        ) {

          span.textContent =
            language === "en"
              ? "🏡 Susan's home"
              : language === "es"
                ? "🏡 Casa de Susan"
                : "🏡 Bij Susan thuis";

        }


        if (
          text.includes(
            "Domicilio"
          ) ||
          text.includes(
            "Bij u thuis"
          ) ||
          text.includes(
            "Your home"
          )
        ) {

          span.textContent =
            language === "en"
              ? "🏠 Your home"
              : language === "es"
                ? "🏠 Su domicilio"
                : "🏠 Bij u thuis";

        }


        if (
          text.includes(
            "Salón"
          ) ||
          text.includes(
            "Salon"
          ) ||
          text.includes(
            "In de salon"
          )
        ) {

          span.textContent =
            language === "en"
              ? "✨ Salon"
              : language === "es"
                ? "✨ Salón"
                : "✨ In de salon";

        }

      }
    );


  /*
     TABLE SERVICES
  */

  document
    .querySelectorAll(
      ".price-row span:first-child"
    )
    .forEach(
      span => {

        const original =
          span.textContent.trim();


        if (
          serviceNameTranslations[
            original
          ]
        ) {

          span.textContent =
            serviceNameTranslations[
              original
            ][language] ||
            original;

        }

      }
    );

}


/* =====================================================
   WHATSAPP FORM
===================================================== */

const appointmentForm =
  document.getElementById(
    "appointmentForm"
  );


if (appointmentForm) {

  appointmentForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const t =
        T[currentLanguage];


      const name =
        document.getElementById(
          "name"
        )?.value.trim();


      const phone =
        document.getElementById(
          "phone"
        )?.value.trim();


      const email =
        document.getElementById(
          "email"
        )?.value.trim();


      const locationKey =
        getLocationKey();


      const service =
        getSelectedService();


      /*
         REQUIRED FIELDS
      */

      if (
        !name ||
        !phone ||
        !locationKey ||
        !service
      ) {

        alert(
          t.alert
        );

        return;

      }


      const problems =
        getProblems();


      /*
         FOOT PROBLEMS ONLY FOR FOOT SERVICES
      */

      if (isFootService()) {

        if (
          problems.length === 0
        ) {

          alert(

            currentLanguage === "nl"

              ? "Kies alstublieft 'Ik heb geen problemen met mijn voeten' als u geen voetproblemen heeft."

              : currentLanguage === "en"

                ? "Please select 'I have no problems with my feet' if you have no foot concerns."

                : "Selecciona 'No tengo problemas en los pies' si no tienes ningún problema."

          );

          return;

        }

      }


      /*
         OTHER
      */

      const other =
        document.getElementById(
          "otherProblem"
        )?.value.trim() || "";


      if (
        problems.includes(
          "Andere"
        ) &&
        !other
      ) {

        alert(
          t.alertOther
        );

        return;

      }


      /*
         BASE PRICE
      */

      const basePrice =
        service.prices[
          locationKey
        ];


      /*
         SURCHARGE
      */

      let surcharge =
        "€0";


      if (isFootService()) {

        if (
          problems.includes(
            "Ik heb geen problemen met mijn voeten"
          )
        ) {

          surcharge =
            "€0";

        } else {

          surcharge =
            currentLanguage === "nl"
              ? "vanaf €20"
              : currentLanguage === "en"
                ? "from €20"
                : "desde €20";

        }

      }


      /*
         PROBLEM TEXT
      */

      let problemText =
        currentLanguage === "nl"
          ? "Geen voetproblemen"
          : currentLanguage === "en"
            ? "No foot concerns"
            : "Sin problemas en los pies";


      if (
        problems.length > 0 &&
        !problems.includes(
          "Ik heb geen problemen met mijn voeten"
        )
      ) {

        problemText =
          problems
            .map(
              problem => {

                if (
                  footProblems[
                    problem
                  ]
                ) {

                  return footProblems[
                    problem
                  ][
                    currentLanguage
                  ];

                }

                return problem;

              }
            )
            .join(", ");

      }


      if (other) {

        problemText +=
          " — " +
          other;

      }


      /*
         SERVICE
      */

      const serviceName =
        service[
          currentLanguage
        ];


      /*
         LOCATION
      */

      const locationName =
        getLocationName(
          locationKey,
          currentLanguage
        );


      /*
         WHATSAPP MESSAGE
      */

      let message =
        t.messageStart +
        "\n\n";


      message +=
        "👤 " +
        t.name +
        ": " +
        name +
        "\n";


      message +=
        "📞 " +
        t.phone +
        ": " +
        phone +
        "\n";


      message +=
        "📧 " +
        t.email +
        ": " +
        (
          email ||
          t.notProvided
        ) +
        "\n\n";


      message +=
        "💆 " +
        t.treatment +
        ": " +
        serviceName +
        "\n";


      message +=
        "📍 " +
        t.location +
        ": " +
        locationName +
        "\n";


      message +=
        "💶 " +
        t.basePrice +
        " " +
        formatPrice(
          basePrice
        ) +
        "\n";


      /*
         FOOT INFORMATION
         ONLY FOR FOOT SERVICES
      */

      if (isFootService()) {

        message +=
          "🦶 " +
          t.footProblems +
          ": " +
          problemText +
          "\n";


        message +=
          "➕ " +
          t.surcharge +
          " " +
          surcharge +
          "\n";

      }


      /*
         EXTRA MESSAGE
      */

      const extra =
        document.getElementById(
          "message"
        )?.value.trim() || "";


      if (extra) {

        message +=
          "📝 " +
          t.extra +
          ": " +
          extra +
          "\n";

      }


      message +=
        "\n" +
        t.appointmentQuestion +
        "\n\n";


      message +=
        t.thanks;


      /*
         OPEN WHATSAPP
      */

      const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(
          message
        );


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* =====================================================
   DIRECT WHATSAPP BUTTON
===================================================== */

const directWhatsapp =
  document.getElementById(
    "directWhatsapp"
  );


if (directWhatsapp) {

  directWhatsapp.href =
    "https://wa.me/" +
    WHATSAPP_NUMBER;

}


/* =====================================================
   LANGUAGE SELECTOR
===================================================== */

if (languageSelector) {

  languageSelector.value =
    currentLanguage;


  languageSelector.addEventListener(
    "change",
    function() {

      changeLanguage(
        this.value
      );

    }
  );

}


/* =====================================================
   INITIALIZE
===================================================== */

changeLanguage(
  currentLanguage
);
