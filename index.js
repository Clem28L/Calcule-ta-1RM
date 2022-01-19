function getRep() {
  const rep = document.getElementById("rep").value;
  return rep;
}
function getLoad() {
  const load = document.getElementById("load").value;
  if (isNaN(load)) {
    alert("valeur manquantes !");
    load.style.borderColor = "red";
  } else {
    return load;
  }
}
function get1Rm() {
  let rep = parseInt(getRep());
  let load = parseInt(getLoad());
  let cal1 = eval(0.0333 * rep + 1);
  let result = eval(cal1 * load);
  let fielresult = document.getElementById("1Rm-results");
  fielresult.textContent = Math.round(result) + "kg";
  fielresult.textContent.className += "results";
  return result;
}

function getcharge(Pourcentage, id) {
  Rm = get1Rm();
  loadfiel = document.getElementById(id);
  pourcentage = eval(Pourcentage / 100);
  charge = Math.round(Rm * pourcentage) + "kg";
  console.log(charge);
  console.log(loadfiel);
  loadfiel.textContent = "charge : " + charge;
}
