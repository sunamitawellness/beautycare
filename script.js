/* =====================================================
   SUNAMITA WELLNESS
   MAIN SCRIPT
   ===================================================== */


/* =====================================================
   WHATSAPP
   ===================================================== */

/*
   IMPORTANTE:
   Cambia este número por el WhatsApp REAL de Susan.

   Ejemplo:
   +31 6 12345678

   Se escribe así:
   31612345678

   SIN +, SIN espacios y SIN guiones.
*/

const WHATSAPP_NUMBER = "31640555065";


/* =====================================================
   IDIOMA
   ===================================================== */

const languageSelector =
  document.getElementById("languageSelector");

const savedLanguage =
  localStorage.getItem("sunamitaLanguage") || "nl";


/* =====================================================
   TRADUCCIONES DEL FORMULARIO
   ===================================================== */

const translations = {

  nl: {

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

    footProblemQuestion:
      "Heeft u problemen met uw voeten?",

    multiple:
      "U kunt meerdere opties selecteren.",

    otherProblem:
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
      "Toeslag bij specifieke voetproblemen:",

    from:
      "vanaf €20",

    noSurcharge:
      "€0",

    finalPrice:
      "De definitieve prijs wordt vooraf door Susan bevestigd.",

    whatsappButton:
      "💬 WhatsApp – Afspraak aanvragen",

    directWhatsapp:
      "💬 WhatsApp",

    noProblem:
      "Ik heb geen problemen met mijn voeten",

    other:
      "Andere",

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
      "Behandeling in de salon",

    alert:
      "Vul alle verplichte velden in.",

    alertProblem:
      "Kies alstublieft een optie bij de voetproblemen.",

    alertOther:
      "Beschrijf alstublieft uw probleem.",

    messageStart:
      "Hallo Susan, ik wil graag een afspraak maken.",

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

    noFootProblems:
      "Ik heb geen problemen met mijn voeten",

    surchargeMessage:
      "Toeslag bij voetproblemen",

    extra:
      "Extra informatie",

    appointmentQuestion:
      "Ik wil graag een afspraak maken. Kunt u mij laten weten wat de totale prijs wordt en welke datum en tijd beschikbaar zijn?",

    thanks:
      "Alvast bedankt!"

  },


  en: {

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

    footProblemQuestion:
      "Do you have any foot concerns?",

    multiple:
      "You can select more than one option.",

    otherProblem:
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
      "Additional charge for specific foot concerns:",

    from:
      "from €20",

    noSurcharge:
      "€0",

    finalPrice:
      "The final price will be confirmed by Susan in advance.",

    whatsappButton:
      "💬 WhatsApp – Request an appointment",

    directWhatsapp:
      "💬 WhatsApp",

    noProblem:
      "I have no foot problems",

    other:
      "Other",

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
      "Treatment at the salon",

    alert:
      "Please complete all required fields.",

    alertProblem:
      "Please select an option for your foot concerns.",

    alertOther:
      "Please describe your concern.",

    messageStart:
      "Hello Susan, I would like to make an appointment.",

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

    noFootProblems:
      "I have no foot problems",

    surchargeMessage:
      "Additional charge for foot concerns",

    extra:
      "Additional information",

    appointmentQuestion:
      "I would like to make an appointment. Could you please let me know the total price and which date and time are available?",

    thanks:
      "Thank you!"

  },


  es: {

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

    footProblemQuestion:
      "¿Tienes algún problema en los pies?",

    multiple:
      "Puedes seleccionar varias opciones.",

    otherProblem:
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
      "Suplemento por problemas específicos de los pies:",

    from:
      "desde €20",

    noSurcharge:
      "€0",

    finalPrice:
      "Susan confirmará el precio final antes de la cita.",

    whatsappButton:
      "💬 WhatsApp – Solicitar una cita",

    directWhatsapp:
      "💬 WhatsApp",

    noProblem:
      "No tengo problemas en los pies",

    other:
      "Otro",

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
      "Tratamiento en el salón",

    alert:
      "Por favor completa todos los campos obligatorios.",

    alertProblem:
      "Por favor selecciona una opción sobre los problemas de tus pies.",

    alertOther:
      "Por favor describe tu problema.",

    messageStart:
      "Hola Susan, quisiera solicitar una cita.",

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

    noFootProblems:
      "No tengo problemas en los pies",

    surchargeMessage:
      "Suplemento por problemas de los pies",

    extra:
      "Información adicional",

    appointmentQuestion:
      "Quisiera solicitar una cita. ¿Podrías decirme cuál sería el precio total y qué fecha y hora están disponibles?",

    thanks:
      "¡Muchas gracias!"

  }

};


/* =====================================================
   SERVICIOS
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
   CAMBIO DE IDIOMA
   ===================================================== */

function changeLanguage(language) {

  localStorage.setItem(
    "sunamitaLanguage",
    language
  );

  document.documentElement.lang =
    language;


  /*
     Cambiar textos data-nl / data-en / data-es
  */

  document
    .querySelectorAll(
      "[data-nl], [data-en], [data-es]"
    )
    .forEach(element => {

      const translation =
        element.getAttribute(
          "data-" + language
        );

      if (translation !== null) {

        element.textContent =
          translation;

      }

    });


  /*
     Actualizar formulario
  */

  updateFormTexts(language);


  /*
     Actualizar tratamientos
  */

  updateServiceOptions(language);


  /*
     Actualizar botón WhatsApp
  */

  const whatsappButton =
    document.querySelector(
      ".whatsapp-button"
    );

  if (whatsappButton) {

    whatsappButton.textContent =
      translations[language].whatsappButton;

  }


  const directWhatsapp =
    document.getElementById(
      "directWhatsapp"
    );

  if (directWhatsapp) {

    directWhatsapp.textContent =
      translations[language].directWhatsapp;

  }

}


/* =====================================================
   FORMULARIO — TEXTOS
   ===================================================== */

function updateFormTexts(language) {

  const t =
    translations[language];


  const category =
    document.getElementById(
      "category"
    );

  const service =
    document.getElementById(
      "service"
    );


  if (category) {

    if (!category.value) {

      category.options[0].text =
        t.categoryPlaceholder;

    }

  }


  if (service) {

    if (!service.value) {

      service.options[0].text =
        t.servicePlaceholder;

    }

  }


  const otherLabel =
    document.querySelector(
      'label[for="otherProblem"]'
    );

  if (otherLabel) {

    otherLabel.textContent =
      t.otherProblem + " *";

  }


  const messageLabel =
    document.querySelector(
      'label[for="message"]'
    );

  if (messageLabel) {

    messageLabel.textContent =
      t.extraInfo + " (" +
      t.optional +
      ")";

  }

}


/* =====================================================
   CATEGORÍAS
   ===================================================== */

const categorySelect =
  document.getElementById(
    "category"
  );

const serviceSelect =
  document.getElementById(
    "service"
  );


if (categorySelect) {

  categorySelect.addEventListener(
    "change",
    function () {

      updateServiceOptions(
        getLanguage()
      );

      updatePrice();

    }
  );

}


/* =====================================================
   SERVICIOS SEGÚN CATEGORÍA
   ===================================================== */

function updateServiceOptions(language) {

  if (!categorySelect ||
      !serviceSelect) {

    return;

  }


  const category =
    categorySelect.value;


  /*
     Guardar el servicio seleccionado
     antes de reconstruir.
  */

  const previousValue =
    serviceSelect.value;


  serviceSelect.innerHTML =
    "";


  const placeholder =
    document.createElement(
      "option"
    );

  placeholder.value =
    "";

  placeholder.textContent =
    translations[language]
      .servicePlaceholder;


  serviceSelect.appendChild(
    placeholder
  );


  if (!category ||
      !services[category]) {

    return;

  }


  services[category]
    .forEach(
      (service, index) => {

        const option =
          document.createElement(
            "option"
          );


        option.value =
          category + "-" + index;


        option.textContent =
          service[language];


        serviceSelect.appendChild(
          option
        );

      }
    );


  /*
     Intentar mantener selección anterior
  */

  if (
    previousValue &&
    Array.from(
      serviceSelect.options
    ).some(
      option =>
        option.value === previousValue
    )
  ) {

    serviceSelect.value =
      previousValue;

  }


  updatePrice();

}


/* =====================================================
   CAMBIO DE SERVICIO
   ===================================================== */

if (serviceSelect) {

  serviceSelect.addEventListener(
    "change",
    function () {

      updatePrice();

    }
  );

}


/* =====================================================
   UBICACIÓN
   ===================================================== */

const locationRadios =
  document.querySelectorAll(
    'input[name="location"]'
  );


locationRadios.forEach(
  radio => {

    radio.addEventListener(
      "change",
      function () {

        updatePrice();

      }
    );

  }
);


/* =====================================================
   OBTENER IDIOMA
   ===================================================== */

function getLanguage() {

  return localStorage.getItem(
    "sunamitaLanguage"
  ) || "nl";

}


/* =====================================================
   OBTENER SERVICIO
   ===================================================== */

function getSelectedService() {

  if (!serviceSelect ||
      !serviceSelect.value) {

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
   OBTENER UBICACIÓN
   ===================================================== */

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


/* =====================================================
   PRECIO
   ===================================================== */

function updatePrice() {

  const service =
    getSelectedService();


  const location =
    getSelectedLocation();


  const preview =
    document.getElementById(
      "pricePreview"
    );


  const basePrice =
    document.getElementById(
      "basePrice"
    );


  if (
    !service ||
    !location ||
    !preview ||
    !basePrice
  ) {

    if (preview) {

      preview.style.display =
        "none";

    }

    return;

  }


  const price =
    service.prices[location];


  basePrice.textContent =
    formatPrice(price);


  preview.style.display =
    "block";


  updatePriceTexts();

}


/* =====================================================
   TEXTOS DEL PRECIO
   ===================================================== */

function updatePriceTexts() {

  const language =
    getLanguage();


  const t =
    translations[language];


  const preview =
    document.getElementById(
      "pricePreview"
    );


  if (!preview) {

    return;

  }


  const title =
    preview.querySelector(
      "h3"
    );


  if (title) {

    title.textContent =
      t.priceTitle;

  }


  const paragraphs =
    preview.querySelectorAll(
      "p"
    );


  if (paragraphs[0]) {

    paragraphs[0].childNodes[0]
      .textContent =
      t.basePrice + " ";

  }


  if (paragraphs[1]) {

    paragraphs[1].childNodes[0]
      .textContent =
      t.surcharge + " ";

  }


  if (paragraphs[2]) {

    paragraphs[2].textContent =
      t.finalPrice;

  }

}


/* =====================================================
   FORMATO PRECIO
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
   PROBLEMAS DE PIES
   ===================================================== */

const noProblem =
  document.getElementById(
    "noProblem"
  );


const problemCheckboxes =
  document.querySelectorAll(
    'input[name="problem"]'
  );


/*
   Si selecciona:
   "Ik heb geen problemen..."
   desmarcamos los demás.
*/

if (noProblem) {

  noProblem.addEventListener(
    "change",
    function () {

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

    }
  );

}


/*
   Si selecciona un problema,
   quitamos "No tengo problemas".
*/

problemCheckboxes.forEach(
  checkbox => {

    if (
      checkbox !==
      noProblem
    ) {

      checkbox.addEventListener(
        "change",
        function () {

          if (
            this.checked &&
            noProblem
          ) {

            noProblem.checked =
              false;

          }

          updateOtherProblem();

        }
      );

    }

  }
);


/* =====================================================
   OTRO PROBLEMA
   ===================================================== */

function updateOtherProblem() {

  const otherCheckbox =
    Array.from(
      problemCheckboxes
    ).find(
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
   OBTENER PROBLEMAS
   ===================================================== */

function getFootProblems() {

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
   FORMULARIO WHATSAPP
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


      const language =
        getLanguage();


      const t =
        translations[language];


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


      const locationRadio =
        document.querySelector(
          'input[name="location"]:checked'
        );


      const service =
        getSelectedService();


      const problems =
        getFootProblems();


      const other =
        document.getElementById(
          "otherProblem"
        )?.value.trim() || "";


      const extra =
        document.getElementById(
          "message"
        )?.value.trim() || "";


      /* ---------------------------
         VALIDACIÓN
      --------------------------- */


      if (
        !name ||
        !phone ||
        !locationRadio ||
        !service
      ) {

        alert(
          t.alert
        );

        return;

      }


      if (
        problems.length === 0
      ) {

        alert(
          t.alertProblem
        );

        return;

      }


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


      /* ---------------------------
         UBICACIÓN
      --------------------------- */

      const location =
        getLocationName(
          locationRadio.dataset.priceColumn,
          language
        );


      /* ---------------------------
         PRECIOS
      --------------------------- */

      const locationKey =
        locationRadio
          .dataset
          .priceColumn;


      const basePrice =
        service.prices[
          locationKey
        ];


      /* ---------------------------
         PROBLEMAS
      --------------------------- */

      let problemText;


      if (
        problems.includes(
          "Ik heb geen problemen met mijn voeten"
        )
      ) {

        problemText =
          t.noFootProblems;

      } else {

        problemText =
          translateProblems(
            problems,
            language
          )
          .join(", ");

      }


      /* ---------------------------
         SUPLEMENTO
      --------------------------- */

      const hasProblem =
        !problems.includes(
          "Ik heb geen problemen met mijn voeten"
        );


      const surcharge =
        hasProblem
          ? t.from
          : t.noSurcharge;


      /* ---------------------------
         SERVICIO
      --------------------------- */

      const serviceName =
        service[language];


      /* ---------------------------
         WHATSAPP
      --------------------------- */

      let message = "";


      message +=
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
        location +
        "\n";


      message +=
        "💶 " +
        t.basePrice +
        " " +
        formatPrice(
          basePrice
        ) +
        "\n\n";


      message +=
        "🦶 " +
        t.footProblems +
        ": " +
        problemText +
        "\n";


      message +=
        "➕ " +
        t.surchargeMessage +
        ": " +
        surcharge +
        "\n";


      if (other) {

        message +=
          "📝 " +
          t.otherProblem +
          ": " +
          other +
          "\n";

      }


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


      /* ---------------------------
         ABRIR WHATSAPP
      --------------------------- */

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
   TRADUCIR PROBLEMAS
   ===================================================== */

function translateProblems(
  problems,
  language
) {

  const dictionary = {

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


  return problems.map(
    problem => {

      if (
        dictionary[problem]
      ) {

        return dictionary[
          problem
        ][language];

      }

      return problem;

    }
  );

}


/* =====================================================
   NOMBRE DE UBICACIÓN
   ===================================================== */

function getLocationName(
  locationKey,
  language
) {

  const names = {

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


  return names[
    locationKey
  ][language];

}


/* =====================================================
   DIRECT WHATSAPP
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
   INICIAR IDIOMA
   ===================================================== */

if (languageSelector) {

  languageSelector.value =
    savedLanguage;


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
   INICIAR PÁGINA
   ===================================================== */

changeLanguage(
  savedLanguage
);


/* =====================================================
   FIN
   ===================================================== */
