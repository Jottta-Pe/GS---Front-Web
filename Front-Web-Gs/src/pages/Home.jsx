export default function Home() {
  return (
    <div>
      {/* NÃO ALTERAR */}
      <div className="bg-[#bdebce] font-serif h-10 text-2xl flex items-center px-4">
        Home
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="p-6 bg-gray-100 min-h-screen">
        
        <h1 className="text-3xl font-bold mb-6">Profissionais</h1>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* CARD */}
          <Card 
            user={{
              nome: "João Silva",
              foto: "https://via.placeholder.com/400x250",
              cargo: "Desenvolvedor Full Stack",
              skills: ["React", "Node.js", "SQL"],
              pessoais: {
                idade: 29,
                email: "joao@email.com",
                local: "São Paulo, Brasil"
              },
              academico: "Bacharel em Ciência da Computação - USP",
              experiencia: [
                "3 anos na TechCorp",
                "2 anos na WebPlus"
              ],
              hardSkills: ["JavaScript", "React", "Node.js", "Docker"],
              softSkills: ["Comunicação", "Resiliência", "Liderança"],
              hobbies: ["Guitarra", "Xadrez", "Ciclismo"]
            }}
          />

        </div>
      </div>
    </div>
  );
}

/* ================================
   COMPONENTE CARD
================================ */
function Card({ user }) {
  return (
    <div
      onClick={() => openModal(user)}
      className="bg-white rounded-xl shadow hover:shadow-xl cursor-pointer transition overflow-hidden"
    >
      <img src={user.foto} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{user.nome}</h2>
        <p className="text-gray-600">{user.cargo}</p>

        <div className="flex flex-wrap mt-3 gap-2">
          {user.skills.map((s, i) => (
            <span key={i} className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================
   MODAL GLOBAL (controle via state)
================================ */
function openModal(user) {
  const modal = document.getElementById("modalUser");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h2 class="text-3xl font-bold mb-2">${user.nome}</h2>
    <p class="text-gray-600 mb-4">${user.cargo}</p>

    <img src="${user.foto}" class="w-full h-56 object-cover rounded-lg mb-4" />

    <h3 class="text-xl font-bold">Informações Pessoais</h3>
    <p><strong>Idade:</strong> ${user.pessoais.idade}</p>
    <p><strong>Email:</strong> ${user.pessoais.email}</p>
    <p><strong>Local:</strong> ${user.pessoais.local}</p>

    <h3 class="text-xl font-bold mt-4">Formação Acadêmica</h3>
    <p>${user.academico}</p>

    <h3 class="text-xl font-bold mt-4">Experiências</h3>
    <ul class="list-disc ml-6">
      ${user.experiencia.map(e => `<li>${e}</li>`).join("")}
    </ul>

    <h3 class="text-xl font-bold mt-4">Hard Skills</h3>
    <div class="flex flex-wrap gap-2 mt-1">
      ${user.hardSkills.map(s => `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">${s}</span>`).join("")}
    </div>

    <h3 class="text-xl font-bold mt-4">Soft Skills & Hobbies</h3>
    <p><strong>Soft Skills:</strong> ${user.softSkills.join(", ")}</p>
    <p><strong>Hobbies:</strong> ${user.hobbies.join(", ")}</p>

    <div class="flex gap-3 mt-6">
      <button onclick="alert('Você recomendou ${user.nome}!')" class="bg-blue-600 text-white px-4 py-2 rounded">
        Recomendar profissional
      </button>

      <button onclick="alert('Mensagem enviada para ${user.nome}!')" class="bg-green-600 text-white px-4 py-2 rounded">
        Enviar mensagem
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
}

// function closeModal() {
//   document.getElementById("modalUser").classList.add("hidden");
// }

/* ================================
   MODAL NO DOM GLOBAL
================================ */
document.body.insertAdjacentHTML(
  "beforeend",
  `
<div id="modalUser" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div class="bg-white p-6 rounded-xl max-w-xl w-full relative">
    <button onclick="closeModal()" class="absolute top-2 right-3 text-xl text-gray-600">✖</button>
    <div id="modalContent"></div>
  </div>
</div>
`
);
