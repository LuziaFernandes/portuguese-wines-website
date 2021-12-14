function displayDiv() {
    var description = document.getElementById("sensations-description");
    var plusButton = document.getElementById("plus-link");
    if (description.style.display === "none") {
        description.style.display = "block";
        description.className = 'smooth';
        plusButton.innerHTML = document.getElementById("plus-link").innerHTML.replace('+', '-');


    } else {
        description.style.display = "none";
        plusButton.innerHTML = document.getElementById("plus-link").innerHTML.replace('-', '+');

    }
  }

  function displayDivSmell() {
    var description = document.getElementById("sensations-description-smell");
    var plusButton = document.getElementById("plus-link-smell");
    if (description.style.display === "none") {
        description.style.display = "block";
        description.className = 'smooth';
        plusButton.innerHTML = document.getElementById("plus-link-smell").innerHTML.replace('+', '-');


    } else {
        description.style.display = "none";
        plusButton.innerHTML = document.getElementById("plus-link-smell").innerHTML.replace('-', '+');

    }
  }


  function displayDivPalate() {
    var description = document.getElementById("sensations-description-palate");
    var plusButton = document.getElementById("plus-link-palate");
    if (description.style.display === "none") {
        description.style.display = "block";
        description.className = 'smooth';
        plusButton.innerHTML = document.getElementById("plus-link-palate").innerHTML.replace('+', '-');


    } else {
        description.style.display = "none";
        plusButton.innerHTML = document.getElementById("plus-link-palate").innerHTML.replace('-', '+');

    }
  }



  function displayDivTouch() {
    var description = document.getElementById("sensations-description-touch");
    var plusButton = document.getElementById("plus-link-touch");
    if (description.style.display === "none") {
        description.style.display = "block";
        description.className = 'smooth';
        plusButton.innerHTML = document.getElementById("plus-link-touch").innerHTML.replace('+', '-');


    } else {
        description.style.display = "none";
        plusButton.innerHTML = document.getElementById("plus-link-touch").innerHTML.replace('-', '+');

    }
  }



  function displayDivListen() {
    var description = document.getElementById("sensations-description-listen");
    var plusButton = document.getElementById("plus-link-listen");
    if (description.style.display === "none") {
        description.style.display = "block";
        description.className = 'smooth';
        plusButton.innerHTML = document.getElementById("plus-link-listen").innerHTML.replace('+', '-');


    } else {
        description.style.display = "none";
        plusButton.innerHTML = document.getElementById("plus-link-listen").innerHTML.replace('-', '+');

    }
  }