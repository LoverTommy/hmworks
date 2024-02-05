"use strict";

const formt = document.forms.info;
developers.addEventListener("blur", developersValid);
siteName.addEventListener("blur", siteNameValid);
siteUrl.addEventListener("blur", siteUrlValid);
date.addEventListener("blur", dateValid);
visit.addEventListener("blur", visitValid);
email.addEventListener("blur", emailValid);
description.addEventListener("blur", descriptionValid);

function developersValid(eo) {
  eo = eo || window.event;

  const developers = formt.elements.developers;
  const developersValue = developers.value;
  const developersErr = document.getElementById("developersErr");

  if (developersValue.length < 5) {
    developersErr.style.display = "inline-block";
    return;
  } else {
    developersErr.style.display = "none";
    return;
  }
}

function siteNameValid(eo) {
  eo = eo || window.event;

  const siteName = formt.elements.siteName;
  const siteNameValue = siteName.value;
  const siteNameErr = document.getElementById("siteNameErr");

  if (siteNameValue.length < 5) {
    siteNameErr.style.display = "inline-block";
    return;
  } else {
    siteNameErr.style.display = "none";
    return;
  }
}

function siteUrlValid(eo) {
  eo = eo || window.event;

  const siteUrl = formt.elements.siteUrl;
  const siteUrlValue = siteUrl.value;
  const siteUrlErr = document.getElementById("siteUrlErr");

  if (siteUrlValue.length < 5) {
    siteUrlErr.style.display = "inline-block";
    return;
  } else {
    siteUrlErr.style.display = "none";
    return;
  }
}

function dateValid(eo) {
  eo = eo || window.event;

  const date = formt.elements.date;
  const dateValue = date.value;
  const dateErr = document.getElementById("dateErr");

  if (dateValue.length < 5) {
    dateErr.style.display = "inline-block";
    return;
  } else {
    dateErr.style.display = "none";
    return;
  }
}

function visitValid(eo) {
  eo = eo || window.event;

  const visit = formt.elements.visit;
  const visitValue = visit.value;
  const visitErr = document.getElementById("visitErr");

  if (visitValue < 5) {
    visitErr.style.display = "inline-block";
    return;
  } else {
    visitErr.style.display = "none";
    return;
  }
}

function emailValid(eo) {
  eo = eo || window.event;

  const email = formt.elements.email;
  const emailValue = email.value;
  const emailErr = document.getElementById("emailErr");

  if (emailValue.length < 5) {
    emailErr.style.display = "inline-block";
    return;
  } else {
    emailErr.style.display = "none";
    return;
  }
}

function descriptionValid(eo) {
  eo = eo || window.event;

  const description = formt.elements.description;
  const descriptionValue = description.value;
  const descriptionErr = document.getElementById("descriptionErr");

  if (descriptionValue.length < 5) {
    descriptionErr.style.display = "inline-block";
    return;
  } else {
    descriptionErr.style.display = "none";
    return;
  }
}

formt.addEventListener("submit", formValid);

function formValid(eo) {
  eo = eo || window.event;

  const developers = formt.elements.developers;
  const developersValue = developers.value;
  const siteName = formt.elements.siteName;
  const siteNameValue = siteName.value;
  const siteUrl = formt.elements.siteUrl;
  const siteUrlValue = siteUrl.value;
  const date = formt.elements.date;
  const dateValue = date.value;
  const visit = formt.elements.visit;
  const visitValue = visit.value;
  const email = formt.elements.email;
  const emailValue = email.value;
  const description = formt.elements.description;
  const descriptionValue = description.value;

  if (!developersValue) {
    eo.preventDefault();
    developersErr.style.display = "inline-block";
  } else {
    developersErr.style.display = "none";
  }

  if (!siteNameValue) {
    eo.preventDefault();
    siteNameErr.style.display = "inline-block";
  } else {
    siteNameErr.style.display = "none";
  }

  if (!siteUrlValue) {
    eo.preventDefault();
    siteUrlErr.style.display = "inline-block";
  } else {
    siteUrlErr.style.display = "none";
  }

  if (!dateValue) {
    eo.preventDefault();
    dateErr.style.display = "inline-block";
  } else {
    dateErr.style.display = "none";
  }

  if (!visitValue) {
    eo.preventDefault();
    visitErr.style.display = "inline-block";
  } else {
    visitErr.style.display = "none";
  }

  if (!emailValue) {
    eo.preventDefault();
    emailErr.style.display = "inline-block";
  } else {
    emailErr.style.display = "none";
  }

  if (!descriptionValue) {
    eo.preventDefault();
    descriptionErr.style.display = "inline-block";
  } else {
    descriptionErr.style.display = "none";
  }

  const catalog = formt.elements.catalog;
  const catalogValue = catalog.value;
  const catalogErr = document.getElementById("catalogErr");
  const accept = formt.elements.accept;
  const acceptErr = document.getElementById("acceptErr");

  catalog.onchange = function (eo) {
    catalogErr.style.display = "none";
  };

  if (catalogValue == "1") {
    eo.preventDefault();
    catalogErr.style.display = "inline-block";
  }

  if (!accept.checked) {
    eo.preventDefault();
    acceptErr.style.display = "inline-block";
  }

  accept.onclick = function (eo) {
    acceptErr.style.display = "none";
  };

  const buy = formt.elements.buy;
  const buyValue = buy.value;
  const buyErr = document.getElementById("buyErr");

  free.onclick = function (eo) {
    buyErr.style.display = "none";
  };

  notFree.onclick = function (eo) {
    buyErr.style.display = "none";
  };

  vip.onclick = function (eo) {
    buyErr.style.display = "none";
  };

  if (!buyValue) {
    eo.preventDefault();
    buyErr.style.display = "inline-block";
  } else {
    buyErr.style.display = "none";
  }

  const checkErr = document.getElementsByTagName("span");

  for (let i of checkErr) {
    if (i.style.display == "inline-block") {
      eo.preventDefault();
      alert("Заполните все поля формы верно");
      return;
    }
}
}
