var Stato;
function recupera(){
  const dbRef = firebase.database().ref();
    dbRef.child("/Stato/Online").get().then((snapshot) => {
      if (snapshot.exists()) {
        Stato = (String(snapshot.val()))
        if(Stato != "si"){
          open("https://vm.tiktok.com/ZMdKg5hK7/")
        };
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
recupera();
