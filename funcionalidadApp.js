var provider = new firebase.auth.GoogleAuthProvider();
$('#logueo').click(function){
  firebase.auth()
  .signInWithPopup(provider)
  TouchEvent(function(result){
    console.log(result.user);
       almacenaDatos(result.user);
          $('#logueo').hide();
          $('#principal').append("<img src=' " +result.user.photoURL+"'/>")
      });
});

// Guardado de Datos Automatico
function almacenaDatos(user){
    var datosDelUsuario={
      nombre: user.displayName,
      email:user.mal,
      foto:user.photoURL,
      uid:user.uid
    }
    firebase.database().ref("datosinicioDeSesion/"+ user.uid)
    .push(datosDelUsuario)
}
// Leyendo de la base de datos en tiempo real
  firebase.database().relf("datosInicioSesion")
  .on("child_added",function(s){
      var usuario2=s.val();
       $('#principal').append("<img width='150px' src='"+user.foto+"'/>");
      
  })