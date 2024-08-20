let sauvegardeEl = document.getElementById("sauvegarde-el")
let compteurEl = document.getElementById("compteur-el")
let compteur = 0

function capturer() {
  compteur += 1
  compteurEl.textContent = compteur
}

function sauvegarder() {
  let compteurStr = compteur + " Pokémons - "
  sauvegardeEl.textContent += compteurStr
  compteurEl.textContent = 0
  compteur = 0
}
