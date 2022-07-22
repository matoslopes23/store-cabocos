function adicionar() {
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
  // txName.value = txtEmail.value = "";
  //   alert("Cadastro realizado com sucesso");
}
