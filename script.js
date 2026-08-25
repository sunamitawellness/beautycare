/* =====================================================
   SUNAMITA WELLNESS
   LANGUAGE + BOOKING + WHATSAPP
===================================================== */

const WHATSAPP_NUMBER = "31640555065";


/* =====================================================
   LANGUAGE
===================================================== */

let currentLanguage =
  localStorage.getItem("sunamitaLanguage") || "nl";


const languageSelector =
  document.getElementById("languageSelector");


/* =====================================================
   TRANSLATIONS
===================================================== */

const T = {

  nl: {

    servicePlaceholder:
      "-- Kies eerst een categorie --",

    noProblem:
      "Ik heb geen problemen met mijn voeten",

    noFootProblems:
      "Geen voetproblemen",

    other:
      "Andere",

    from20:
      "vanaf €20",

    zero:
      "€0",

    priceTitle:
      "💶 Indicatie van de prijs",

    basePrice:
      "Basisprijs:",

    surcharge:
      "Toeslag:",

    finalPrice:
      "De definitieve prijs wordt vooraf door Susan bevestigd.",

    name:
      "Naam",

    phone:
      "Telefoonnummer",

    email:
      "E-mail",

    treatment:
      "Behandeling",

    location:
      "Locatie",

    footProblems:
      "Voetproblemen",

    extra:
      "Extra informatie",

    notProvided:
      "Niet opgegeven",

    messageStart:
      "Hallo Susan, ik wil graag een afspraak maken.",

    appointmentQuestion:
      "Ik wil graag een afspraak maken. Kunt u mij laten weten wat de totale prijs wordt en welke datum en tijd beschikbaar zijn?",

    thanks:
      "Alvast bedankt!",

    alert:
      "Vul alle verplichte velden in.",

    alertFoot:
      "Kies alstublieft 'Ik heb geen problemen met mijn voeten' als u geen voetproblemen heeft.",

    alertOther:
      "Beschrijf alstublieft uw probleem."

  },


  en: {

    servicePlaceholder:
      "-- Choose your treatment --",

    noProblem:
      "I have no problems with my feet",

    noFootProblems:
      "No foot concerns",

    other:
      "Other",

    from20:
      "from €20",

    zero:
      "€0",

    priceTitle:
      "💶 Estimated price",

    basePrice:
      "Base price:",

    surcharge:
      "Additional charge:",

    finalPrice:
      "The final price will be confirmed by Susan in advance.",

    name:
      "Name",

    phone:
      "Phone number",

    email:
      "Email",

    treatment:
      "Treatment",

    location:
      "Location",

    footProblems:
      "Foot concerns",

    extra:
      "Additional information",

    notProvided:
      "Not provided",

    messageStart:
      "Hello Susan, I would like to make an appointment.",

    appointmentQuestion:
      "I would like to make an appointment. Could you please let me know the total price and which date and time are available?",

    thanks:
      "Thank you!",

    alert:
      "Please complete all required fields.",

    alertFoot:
      "Please select 'I have no problems with my feet' if you have no foot concerns.",

    alertOther:
      "Please describe your concern."

  },


  es: {

    servicePlaceholder:
      "-- Elige tu tratamiento --",

    noProblem:
      "No tengo problemas en los pies",

    noFootProblems:
      "Sin problemas en los pies",

    other:
      "Otro",

    from20:
      "desde €20",

    zero:
      "€0",

    priceTitle:
      "💶 Precio estimado",

    basePrice:
      "Precio base:",

    surcharge:
      "Suplemento:",

    finalPrice:
      "Susan confirmará el precio final antes de la cita.",

    name:
      "Nombre",

    phone:
      "Número de teléfono",

    email:
      "Correo electrónico",

    treatment:
      "Tratamiento",

    location:
      "Lugar",

    footProblems:
      "Problemas de los pies",

    extra:
      "Información adicional",

    notProvided:
      "No indicado",

    messageStart:
      "Hola Susan, quisiera solicitar una cita.",

    appointmentQuestion:
      "Quisiera solicitar una cita. ¿Podrías decirme cuál sería el precio total y qué fecha y hora están disponibles?",

    thanks:
      "¡Muchas gracias!",

    alert:
      "Por favor completa todos los campos obligatorios.",

    alertFoot:
      "Selecciona 'No tengo problemas en los pies' si no tienes ningún problema.",

    alertOther:
      "Por favor describe tu problema."

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
   BASIC HELPERS
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


function getLocationKey() {

  const selected =
    document.querySelector(
      'input[name="location"]:checked'
    );

  return selected
    ? selected.dataset.priceColumn
    : null;

}


function getSelectedService() {

  const select =
    document.getElementById("service");

  if (
    !select ||
    !select.value
  ) {

    return null;

  }


  const parts =
    select.value.split("-");


  const category =
    parts[0];


  const index =
    Number(parts[1]);


  if (
    !services[category] ||
    !services[category][index]
  ) {

    return null;

  }


  return services[category][index];

}


function isFootService() {

  const category =
    document.getElementById(
      "category"
    )?.value;


  return (
    category === "feet" ||
    category === "spa" ||
    category === "reflex"
  );

}


function getProblems() {

  return Array.from(
    document.querySelectorAll(
      'input[name="problem"]:checked'
    )
  ).map(
    checkbox =>
      checkbox.value
  );

}


/* =====================================================
   TRANSLATE ALL HTML ELEMENTS
===================================================== */

function translatePage() {

  document.documentElement.lang =
    currentLanguage;


  document
    .querySelectorAll(
      "[data-nl], [data-en], [data-es]"
    )
    .forEach(
      element => {

        const value =
          element.getAttribute(
            "data-" +
            currentLanguage
          );


        if (
          value !== null
        ) {

          element.textContent =
            value;

        }

      }
    );


  /*
     PLACEHOLDERS
  */

  document
    .querySelectorAll(
      "[data-placeholder-nl]"
    )
    .forEach(
      element => {

        const placeholder =
          element.getAttribute(
            "data-placeholder-" +
            currentLanguage
          );


        if (
          placeholder !== null
        ) {

          element.placeholder =
            placeholder;

        }

      }
    );


  /*
     SELECT OPTIONS
  */

  document
    .querySelectorAll(
      "option[data-nl]"
    )
    .forEach(
      option => {

        const value =
          option.getAttribute(
            "data-" +
            currentLanguage
          );


        if (
          value !== null
        ) {

          option.textContent =
            value;

        }

      }
    );


  /*
     DYNAMIC SERVICE LIST
  */

  loadServices();


  /*
     PRICE
  */

  updatePrice();


  /*
     LANGUAGE SELECTOR
  */

  if (languageSelector) {

    languageSelector.value =
      currentLanguage;

  }

}


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage(language) {

  currentLanguage =
    language;


  localStorage.setItem(
    "sunamitaLanguage",
    language
  );


  translatePage();

}


/* =====================================================
   LOAD SERVICES
===================================================== */

function loadServices() {

  const category =
    document.getElementById(
      "category"
    );


  const serviceSelect =
    document.getElementById(
      "service"
    );


  if (
    !category ||
    !serviceSelect
  ) {

    return;

  }


  const selectedCategory =
    category.value;


  const previousService =
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
    T[currentLanguage]
      .servicePlaceholder;


  serviceSelect.appendChild(
    placeholder
  );


  if (
    !selectedCategory ||
    !services[selectedCategory]
  ) {

    updateFootProblemVisibility();

    return;

  }


  services[
    selectedCategory
  ].forEach(
    (service, index) => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        selectedCategory +
        "-" +
        index;


      option.textContent =
        service[
          currentLanguage
        ];


      serviceSelect.appendChild(
        option
      );

    }
  );


  /*
     Restore selected service
  */

  if (
    previousService &&
    Array.from(
      serviceSelect.options
    ).some(
      option =>
        option.value ===
        previousService
    )
  ) {

    serviceSelect.value =
      previousService;

  }


  updateFootProblemVisibility();

}


/* =====================================================
   FOOT PROBLEMS VISIBILITY
===================================================== */

function updateFootProblemVisibility() {

  const group =
    document.getElementById(
      "footProblemGroup"
    );


  if (!group) {

    return;

  }


  if (isFootService()) {

    group.style.display =
      "block";

  } else {

    group.style.display =
      "none";


    document
      .querySelectorAll(
        'input[name="problem"]'
      )
      .forEach(
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

}


/* =====================================================
   OTHER PROBLEM
===================================================== */

function updateOtherProblem() {

  const other =
    document.querySelector(
      'input[name="problem"][value="Andere"]'
    );


  const container =
    document.getElementById(
      "otherProblemContainer"
    );


  const textarea =
    document.getElementById(
      "otherProblem"
    );


  if (
    !container ||
    !textarea
  ) {

    return;

  }


  if (
    other &&
    other.checked
  ) {

    container.style.display =
      "block";

    textarea.required =
      true;

  } else {

    container.style.display =
      "none";

    textarea.required =
      false;

    textarea.value =
      "";

  }

}


/* =====================================================
   UPDATE PRICE
===================================================== */

function updatePrice() {

  const preview =
    document.getElementById(
      "pricePreview"
    );


  const basePrice =
    document.getElementById(
      "basePrice"
    );


  const surcharge =
    document.getElementById(
      "surchargeAmount"
    );


  const service =
    getSelectedService();


  const location =
    getLocationKey();


  if (
    !preview ||
    !basePrice ||
    !service ||
    !location
  ) {

    if (preview) {

      preview.style.display =
        "none";

    }

    return;

  }


  const price =
    service.prices[
      location
    ];


  basePrice.textContent =
    formatPrice(price);


  /*
     Foot service surcharge
  */

  if (surcharge) {

    if (!isFootService()) {

      surcharge.textContent =
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

        surcharge.textContent =
          T[currentLanguage].zero;

      } else {

        surcharge.textContent =
          T[currentLanguage].from20;

      }

    }

  }


  preview.style.display =
    "block";

}


/* =====================================================
   CATEGORY CHANGE
===================================================== */

const category =
  document.getElementById(
    "category"
  );


if (category) {

  category.addEventListener(
    "change",
    function() {

      loadServices();

      updatePrice();

    }
  );

}


/* =====================================================
   SERVICE CHANGE
===================================================== */

const service =
  document.getElementById(
    "service"
  );


if (service) {

  service.addEventListener(
    "change",
    function() {

      updateFootProblemVisibility();

      updatePrice();

    }
  );

}


/* =====================================================
   LOCATION CHANGE
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
   FOOT PROBLEM CHECKBOXES
===================================================== */

const noProblem =
  document.getElementById(
    "noProblem"
  );


if (noProblem) {

  noProblem.addEventListener(
    "change",
    function() {

      if (this.checked) {

        document
          .querySelectorAll(
            'input[name="problem"]'
          )
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


document
  .querySelectorAll(
    'input[name="problem"]'
  )
  .forEach(
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
   WHATSAPP
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


      const service =
        getSelectedService();


      const location =
        getLocationKey();


      if (
        !name ||
        !phone ||
        !service ||
        !location
      ) {

        alert(
          t.alert
        );

        return;

      }


      const problems =
        getProblems();


      /*
         Only foot services need
         foot problem selection.
      */

      if (isFootService()) {

        if (
          problems.length === 0
        ) {

          alert(
            t.alertFoot
          );

          return;

        }

      }


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


      const basePrice =
        service.prices[
          location
        ];


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
            t.from20;

        }

      }


      /*
         Problem text
      */

      let problemText =
        t.noFootProblems;


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
         Location names
      */

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


      const locationName =
        locations[
          location
        ][
          currentLanguage
        ];


      /*
         WhatsApp message
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
        service[
          currentLanguage
        ] +
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
         Only show foot information
         for foot services.
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
         Open WhatsApp
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
   START
===================================================== */

translatePage();
