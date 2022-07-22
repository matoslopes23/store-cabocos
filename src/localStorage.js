// var x = document.getElementById("demo");

function adicionar() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("O seu navegador não suporta Geolocalização.");
  }
  localStorage.setItem(
    "Contato",
    JSON.stringify({
      name: txtName.value,
      email: txtEmail.value,
      telefone: txtPhone.value,
      mensagem: txtMessage,
    })
  );
  alert("Item adicionado.");
}
function showPosition(position) {
  alert("lat" + position.coords.latitude);
  localStorage.setItem(
    "Geo",
    JSON.stringify({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  );
}
