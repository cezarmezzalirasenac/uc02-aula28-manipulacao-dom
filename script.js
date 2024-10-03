const dadosPessoa = {
  "nome": "CÉZAR AUGUSTO MEZZALIRA",
  "profissao": "Especialista em Desenvolvimento de Software",
  "cpf": "00123456789",
  "endereco": "Rua Pedro Ramires de Mello",
  "numero": 1135,
  "complemento": "AP 01",
  "cep": 123456789,
  "bairro": "Centro",
  "cidade": "Pato Branco",
  "estado": "Paraná",
  "sexo": "Masculino",
  "estadoCivil": "Casado",
  "dataNascimento": "01/01/1980",
  "email": "cezar.mezzalira@email.com",
  "telefone": "46987654321",
  "urls": [
    {
      "titulo": "LinkedIn",
      "url": "https://linkedin.com/in/cezarmezzalira",
    },
    {
      "titulo": "GitHub",
      "url": "https://github.com/cezarmezzalira"
    },
    {
      "titulo": "Facebook",
      "url": "https://facebook.com/cezarmezzalira"
    },
    {
      "titulo": "Facebook",
      "url": "https://facebook.com/cezarmezzalira"
    },
    {
      "titulo": "Facebook",
      "url": "https://facebook.com/cezarmezzalira"
    },
  ]
}

// Montagem da div title
const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)


// Montagem da div contact
const divContact = document.getElementById("contact")

// lista não ordenada
const listaContato = document.createElement("ul")

// item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// item de lista para o email
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)

// item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)

// item de lista com link para cada link da lista de links
// for (let posicao = 0; posicao < dadosPessoa.links.length; posicao++) {
//   if (posicao === 0) continue
//   const itemLink = document.createElement("li")
//   itemLink.textContent = dadosPessoa.links[posicao]
//   listaContato.appendChild(itemLink)
// }

for (let enderecoWeb of dadosPessoa.urls) {
  const ancora = document.createElement("a")
  ancora.textContent = enderecoWeb.titulo
  ancora.setAttribute("href", enderecoWeb.url)

  const itemLink = document.createElement("li")
  itemLink.appendChild(ancora)

  listaContato.appendChild(itemLink)
}

divContact.appendChild(listaContato)