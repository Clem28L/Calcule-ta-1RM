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
  let cal1 = (0.0333 * rep + 1);
  let result = (cal1 * load);
  let fielresult = document.getElementById("1Rm-results");
  if(isNaN(result)){
    return false;
  }
  document.querySelector("#result-div").style.display = "block";
  fielresult.textContent = Math.round(result) + " kg";
  fielresult.textContent.className += "results";
  return result;
}

function getcharge(Pourcentage, id) {
  const Rm = get1Rm();
  if(!Rm) {
    return;
  }
  const loadfiel = document.getElementById(id);
  const pourcentage = (Pourcentage / 100);
  charge = Math.round(Rm * pourcentage) + "kg";
  console.log(charge);
  console.log(loadfiel);
  loadfiel.textContent = "charge : " + charge;
}
