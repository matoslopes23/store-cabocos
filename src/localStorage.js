var x = document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
  }

function adicionar() {
  localStorage.setItem(
    "Contato",
    JSON.stringify({
      name: txtName.value,
      email: txtEmail.value,
      telefone: txtPhone.value,
      mensagem: txtMessage,
      latitude:
    })
  );
  alert("Item adicionado.");
}
function showPosition(position){
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude; 
}


