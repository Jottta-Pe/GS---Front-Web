import { useState } from "react";
import { profissionais } from "../Data/Perfils";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(profissionais)

  function handleSearch(e) {

      const value = e.target.value;
      setSearch(value);

      const filtrados = profissionais.filter((p) =>
          p.nome.toLowerCase().includes(value.toLowerCase())
        );
      setFiltered(filtrados)
  }

  return (
    <div>
      {/* NÃO ALTERAR */}
      <div className="bg-[#bdebce] dark:bg-[#2b382b] dark:text-white font-serif h-10 text-2xl flex items-center px-4 transition-colors">
        Home
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="p-6 bg-[#ffffff] dark:bg-[#1d261d] min-h-screen transition-colors flex flex-col items-center">
      <div className="relative w-full">
         <input
            type="text"
            id="search"
            placeholder="🔎 Pesquisar profissionais, especializações e cargos..."
            value={search}
            onChange={handleSearch}
            className="py-1 w-100 bg-transparent border-b-2 border-black focus:border-black outline-none transition-colors duration-300 dark:text-white dark:border-white"
          />
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-white font-sans">
          Profissionais
        </h1>

        {/* GRID DE CARDS - CENTRALIZADO E MENOR */}
        <div className="w-full max-w-6xl flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filtered.map((PegaItem) => (
              <Card key={PegaItem.id} user={PegaItem} onOpenModal={openModal} />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-white p-4 rounded-xl max-w-lg w-full relative overflow-visible max-h-[90vh] overflow-y-auto transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-600 shadow-lg z-10"
              aria-label="Fechar modal"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-2 pr-8 text-gray-700 dark:text-gray-800 font-sans">
              {selectedUser.nome}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-600 mb-3 font-sans">
              {selectedUser.cargo}
            </p>

            <img
              src={selectedUser.foto}
              alt={selectedUser.nome}
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />

            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-800 font-sans">
              Informações Pessoais
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-600 font-sans">
              <strong>Local:</strong> {selectedUser.localizacao}
            </p>

            <h3 className="text-lg font-bold mt-3 text-gray-700 dark:text-gray-800 font-sans">
              Formação Acadêmica
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-600 font-sans">
              {selectedUser.formacao && selectedUser.formacao.length > 0 ? (
                selectedUser.formacao.map((f, i) => (
                  <p key={i} className="font-sans">
                    {f.curso} - {f.instituicao} ({f.ano})
                  </p>
                ))
              ) : (
                <p className="font-sans">Não informado</p>
              )}
            </div>

            <h3 className="text-lg font-bold mt-3 text-gray-700 dark:text-gray-800 font-sans">
              Experiências
            </h3>
            <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-600 font-sans">
              {selectedUser.experiencias &&
              selectedUser.experiencias.length > 0 ? (
                selectedUser.experiencias.map((exp, i) => (
                  <li key={i} className="mb-1 font-sans">
                    <strong>{exp.cargo}</strong> na {exp.empresa} ({exp.inicio}{" "}
                    - {exp.fim})
                    {exp.descricao && (
                      <p className="text-xs text-gray-600 dark:text-gray-500 mt-1 font-sans">
                        {exp.descricao}
                      </p>
                    )}
                  </li>
                ))
              ) : (
                <li className="font-sans">Não informado</li>
              )}
            </ul>

            <h3 className="text-lg font-bold mt-3 text-gray-700 dark:text-gray-800 font-sans">
              Soft Skills
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-600 font-sans">
              <strong>Soft Skills:</strong> {selectedUser.softSkills.join(", ")}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => alert(`Você recomendou ${selectedUser.nome}!`)}
                className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-700 font-sans"
              >
                Recomendar profissional
              </button>

              <button
                onClick={() =>
                  alert(`Mensagem enviada para ${selectedUser.nome}!`)
                }
                className="bg-green-600 text-white px-3 py-1.5 text-sm rounded hover:bg-green-700 font-sans"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================
   COMPONENTE CARD
================================ */
function Card({ user, onOpenModal }) {
  return (
    <div
      onClick={() => onOpenModal(user)}
      className="bg-white dark:bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all overflow-hidden max-w-sm mx-auto w-full aspect-square flex flex-col"
    >
      <div className="p-4 flex justify-center shrink-0">
        <img
          src={user.foto}
          alt={user.nome}
          className="w-56 h-56 aspect-square object-cover border-2 border-gray-200 rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h2 className="text-base font-bold text-gray-700 dark:text-gray-800 mb-1 font-sans">
          {user.nome}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-600 mb-2 font-sans">
          {user.cargo}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {user.softSkills.slice(0, 2).map((s, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
            >
              {s}
            </span>
          ))}
          {user.softSkills.length > 2 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              +{user.softSkills.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
