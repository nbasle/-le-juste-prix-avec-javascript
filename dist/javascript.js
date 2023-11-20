const url = "https://blockchain.info/ticker";
//réer une requête

async function recupPrix() {
  // let requete = new XMLHttpRequest(); //Créer un objet
  // requete.open('GET',url); //Premier paramètre GET / POST
  // //deuxième paramètre: url
  // requete.responseType = 'json'; //Nous attendons du json
  // requete.send(); //Nous envoyons notre requete
  // //Dès qu'on reçoit une réponse on execute une fonction
  // requete.onload = function (){
  //     if(requete.readyState === XMLHttpRequest.DONE){
  //         if(requete.status === 200){
  //             let reponse = requete.response; //on stocke la réponse
  //             console.log(reponse)
  //             let prixEnEuros = reponse.EUR.last;
  //             document.querySelector('#price_label').textContent = prixEnEuros;
  //            // console.log(prixEnEuros);
  //         } else {
  //             alert('U  problème est intervenu merci de revenir plus tard.')
  //         }
  //     }
  // }
  // console.log('Prix actualisé')
  const requete = await fetch(url, {
    methode: "GET",
  });
  if (!requete.ok) {
    alert("Un problème est survenu");
  } else {
    let donnees = await requete.json();
    //console.log(donnees);
    document.querySelector("span").textContent = donnees.EUR.last;
  }
}

setInterval(recupPrix, 1000);
