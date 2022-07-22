var request = indexedDB.open("Cliente");
request.onupgradeneeded = function () {
  // Se o banco de dados não existir ainda, cria objetos de armazenamento
  var db = request.result;
  var store = db.createObjectStore("clientes", { keyPath: "codigo" });
  store.createIndex("Nome", "titulo", { unique: true });
  store.createIndex("Email", "Email");
  store.createIndex("Telefone", "Telefone");
  store.createIndex("Endereco", "Endereco");
  store.createIndex("Data_Nasc", "Data_Nasc");
  store.createIndex("Sexo", "Sexo");
  store.createIndex("CPF", "CPF");

  // Populando o banco com alguns produtos
  //   store.put({
  //     codigo: 1,
  //     nome: "DVD - Batman O Cavaleiro das Trevas - A Trilogia",
  //     fabricante: "Warner Bros",
  //     preco: 39.9,
  //   });
  //   store.put({
  //     codigo: 2,
  //     nome: "Blu-ray - O Homem de Aço",
  //     fabricante: "Warner Bros",
  //     preco: 69.9,
  //   });
  //   store.put({
  //     codigo: 3,
  //     nome: "DVD - Wolverine Imortal",
  //     fabricante: "Fox",
  //     preco: 19.9,
  //   });
};

function salvarDados() {
  store.add({
    codigo: 1,
    name: txtName.value,
    email: txtEmail.value,
    telefone: txtPhone.value,
    endereco: txtEndereco.value,
    Data_Nasc: txtData.value,
  });
  alert("Dados Salvos");
}
request.onsuccess = function () {
  db = request.result;
};
