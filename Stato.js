var Stato;
function recupera(){
  const dbRef = firebase.database().ref();
    dbRef.child("/Stato/Online").get().then((snapshot) => {
      if (snapshot.exists()) {
        Stato = (String(snapshot.val()))
        if(Stato != "si"){
          apriLink();
        };
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
recupera();

function apriLink(){
const dbRef = firebase.database().ref();
  dbRef.child("/Link/Link").get().then((snapshot) => {
    open(snapshot.val());
  });
}
