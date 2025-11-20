import { useState } from "react";
import { profissionais } from "../Data/Perfils";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const openModal = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(profissionais);

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);

    const filtrados = profissionais.filter((p) =>
      p.nome.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filtrados);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#c8f5d4] dark:bg-[#355f44] dark:text-white font-bold font-sans h-12 text-2xl flex items-center px-6 shadow-md transition-colors text-gray-700">
        Home
      </div>

      <main className="p-6 bg-[#f8fff9] dark:bg-[#14231a] flex-grow transition-colors flex flex-col items-center">

        <div className="relative w-full max-w-3xl mb-6">
          <input
            type="text"
            id="search"
            placeholder="🔎 Pesquisar profissionais..."
            value={search}
            onChange={handleSearch}
            className="
              w-full py-3 px-5 
              rounded-full 
              bg-white border border-[#a5d6ac] 
              focus:border-[#6bbf75] 
              focus:ring-2 focus:ring-[#8ee79a]
              outline-none 
              transition-all 
              dark:bg-[#1c2f24] 
              dark:border-[#335f43]
              dark:text-white
              dark:focus:border-[#5ebb7a]
              dark:focus:ring-[#5ebb7a]
              shadow-sm
            "
          />
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-white font-sans">
          Profissionais
        </h1>

        <div className="w-full max-w-6xl flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {filtered.map((user) => (
              <Card key={user.id} user={user} onOpenModal={openModal} />
            ))}
          </div>
        </div>
      </main>

      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="
              bg-white dark:bg-[#1c2b21] 
              p-6 rounded-xl 
              shadow-2xl 
              max-w-lg w-full relative 
              max-h-[90vh] overflow-y-auto 
              transition-colors
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-600 shadow-lg"
            >
              *
            </button>

            <h2 className="text-2xl font-bold mb-1 text-gray-700 dark:text-white">
              {selectedUser.nome}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {selectedUser.cargo}
            </p>

            <img
              src={selectedUser.foto}
              alt={selectedUser.nome}
              className="
                w-full aspect-square object-cover rounded-lg 
                border-4 
                border-gray-300 dark:border-[#2f4f3a] 
                shadow-md mb-4
              "
            />

            <h3 className="text-lg font-bold text-gray-700 dark:text-white">Informações Pessoais</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Local:</strong> {selectedUser.localizacao}
            </p>

            <h3 className="text-lg font-bold mt-4 text-gray-700 dark:text-white">Formação Acadêmica</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {selectedUser.formacao?.length ? (
                selectedUser.formacao.map((f, i) => (
                  <p key={i}>{f.curso} - {f.instituicao} ({f.ano})</p>
                ))
              ) : <p>Não informado</p>}
            </div>

            <h3 className="text-lg font-bold mt-4 text-gray-700 dark:text-white">Experiências</h3>
            <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-300">
              {selectedUser.experiencias?.length ? (
                selectedUser.experiencias.map((exp, i) => (
                  <li key={i} className="mb-1">
                    <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.inicio} - {exp.fim})
                  </li>
                ))
              ) : <li>Não informado</li>}
            </ul>

            <h3 className="text-lg font-bold mt-4 text-gray-700 dark:text-white">Soft Skills</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {selectedUser.softSkills.join(", ")}
            </p>

            <div className="flex gap-3 mt-5">
              <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 shadow">
                Recomendar
              </button>

              <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 shadow">
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#355f44] dark:bg-[#14231a] text-gray-200 py-6 mt-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">

          <div className="flex gap-6 text-xl">
            <a href="xxxxx" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-[#8ee79a] transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-1 0-1 .5-1 1v2h3l-1 3h-2v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="xxxxx" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#8ee79a] transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm8 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/></svg>
            </a>
            <a href="xxxxx" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-[#8ee79a] transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 6c-.8.3-1.6.5-2.5.6a4.3 4.3 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1 4.3 4.3 0 0 0-7.4 3 4.4 4.4 0 0 0 0 1 12.1 12.1 0 0 1-8.7-4.4 4.3 4.3 0 0 0 1.3 5.8A4 4 0 0 1 3 10v.1a4.3 4.3 0 0 0 3.4 4.2 4.2 4.2 0 0 1-1.9.1 4.3 4.3 0 0 0 4 3 8.7 8.7 0 0 1-5.3 1.8 9 9 0 0 1-1-.1 12.2 12.2 0 0 0 6.6 1.9c7.8 0 12-6.4 12-12v-.5A8.3 8.3 0 0 0 22 6z"/></svg>
            </a>
          </div>

          <div className="text-center text-xs select-none space-y-1">
            <p>Info • Support • Marketing</p>
            <p>
              <a href="xxxxx" className="underline hover:text-[#8ee79a]">Terms of Use</a> •{" "}
              <a href="xxxxx" className="underline hover:text-[#8ee79a]">Privacy Policy</a>
            </p>
            <p>© Made in Fiap - Jean Pierre</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ user, onOpenModal }) {
  return (
    <div
      onClick={() => onOpenModal(user)}
      className="
        bg-white dark:bg-[#1c2b21] 
        rounded-xl 
        shadow-md hover:shadow-xl 
        border border-[#a3cab0] dark:border-[#2f4f3a]
        cursor-pointer 
        transition-all 
        overflow-hidden 
        max-w-2x1
        transform hover:-translate-y-1
      "
    >
      <div className="p-4 flex justify-center">
        <img
          src={user.foto}
          alt={user.nome}
          className="
            w-48 h-48 
            object-cover 
            rounded-lg 
            border-4 border-[#a3a3a3] dark:border-[#2f4f3a] 
            shadow-sm
            transition-all
            hover:scale-105
          "
        />
      </div>

      <div className="px-5 pb-5 flex flex-col">
        <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-1">
          {user.nome}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {user.cargo}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {user.softSkills.slice(0, 2).map((skill, i) => (
            <span
              key={i}
              className="
                px-2 py-1 text-xs 
                bg-[#d1f7dd] text-[#1d5e2e] 
                dark:bg-[#2f4f3a] dark:text-[#c8f5d4]
                rounded-md
              "
            >
              {skill}
            </span>
          ))}

          {user.softSkills.length > 2 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-[#324437] text-gray-600 dark:text-gray-300 rounded-md">
              +{user.softSkills.length - 2}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
