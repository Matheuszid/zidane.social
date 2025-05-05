// Seu usuário GitHub
const username = "matheuszid";
const container = document.getElementById("projects-container");

// Imagem padrão para os cards
const defaultImage = "https://via.placeholder.com/600x300.png?text=Projeto+GitHub";

// Função para formatar a data
function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
}

// Buscar repositórios
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col overflow-hidden";

      card.innerHTML = `
        <img src="${defaultImage}" alt="Imagem do projeto" class="w-full h-48 object-cover">

        <div class="p-6 flex flex-col flex-1">
          <h2 class="text-2xl font-semibold mb-2">${repo.name}</h2>
          <p class="text-gray-600 text-sm mb-4">${repo.description ? repo.description : "Sem descrição disponível."}</p>

          <div class="text-sm text-gray-500 mb-4">
            Linguagem: <span class="font-medium">${repo.language || "Não definida"}</span>
          </div>

          <div class="text-xs text-gray-400 mb-4">
            Criado em: ${formatDate(repo.created_at)}
          </div>

          <a href="${repo.html_url}" target="_blank" class="mt-auto inline-block text-indigo-600 font-medium hover:underline">Ver no GitHub →</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar projetos:", error);
    container.innerHTML = "<p class='text-center text-red-500'>Erro ao carregar projetos. Tente novamente mais tarde.</p>";
  });
