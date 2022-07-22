var request = indexedDB.open("Cliente");
request.onupgradeneeded = function () {
  var db = request.result;
  var store = db.createObjectStore("clientes", {
    keyPath: "codigo",
    autoIncrement: true,
  });
  store.createIndex("Nome", "Nome", { unique: true });
  store.createIndex("Email", "Email", { unique: false });
  store.createIndex("Telefone", "Telefone", { unique: false });
  store.createIndex("Endereco", "Endereco", { unique: false });
  store.createIndex("Data_Nasc", "Data_Nasc", { unique: false });
  store.createIndex("Sexo", "Sexo", { unique: false });
  store.createIndex("CPF", "CPF", { unique: false });
};

request.onsuccess = function () {
  db = request.result;
};

send.onclick = (event) => {
  event.preventDefault();

  db.transaction(
    //realiza chamada para transação no banco de dados
    "clientes",
    "readwrite"
  )
    .objectStore(
      //realiza chamada para o objeto store do banco de dados
      "clientes"
    )
    .add({
      //adiciona os dados na collection (referentes aos ID do formulário)
      Nome: txtName.value,
      Email: txtEmail.value,
      Telefone: txtPhone.value,
      Endereco: txtEndereco.value,
      Data_Nasc: txtData.value,
      Sexo: textSexo.value,
      CPF: textCpf.value,
    });
};
