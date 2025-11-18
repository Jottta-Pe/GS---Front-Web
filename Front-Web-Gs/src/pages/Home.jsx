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

  return (
    <div>
      {/* NÃO ALTERAR */}
      <div className="bg-[#bdebce] dark:bg-[#2b382b] dark:text-white font-serif h-10 text-2xl flex items-center px-4 transition-colors">
        Home
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="p-6 bg-[#e8f5e9] dark:bg-[#1d261d] min-h-screen transition-colors">
        
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Profissionais</h1>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {profissionais.map((PegaItem) => (          
            <Card key={PegaItem.id} user={PegaItem} onOpenModal={openModal} />
          ))} 
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
            
            <h2 className="text-2xl font-bold mb-2 pr-8 dark:text-gray-800">{selectedUser.nome}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-600 mb-3">{selectedUser.cargo}</p>

            <img 
              src={selectedUser.foto} 
              alt={selectedUser.nome}
              className="w-full aspect-square object-cover rounded-lg mb-3" 
            />

            <h3 className="text-lg font-bold dark:text-gray-800">Informações Pessoais</h3>
            <p className="text-sm dark:text-gray-600"><strong>Local:</strong> {selectedUser.localizacao}</p>

            <h3 className="text-lg font-bold mt-3 dark:text-gray-800">Formação Acadêmica</h3>
            <div className="text-sm dark:text-gray-600">
              {selectedUser.formacao && selectedUser.formacao.length > 0 ? (
                selectedUser.formacao.map((f, i) => (
                  <p key={i}>
                    {f.curso} - {f.instituicao} ({f.ano})
                  </p>
                ))
              ) : (
                <p>Não informado</p>
              )}
            </div>

            <h3 className="text-lg font-bold mt-3 dark:text-gray-800">Experiências</h3>
            <ul className="list-disc ml-5 text-sm dark:text-gray-600">
              {selectedUser.experiencias && selectedUser.experiencias.length > 0 ? (
                selectedUser.experiencias.map((exp, i) => (
                  <li key={i} className="mb-1">
                    <strong>{exp.cargo}</strong> na {exp.empresa} ({exp.inicio} - {exp.fim})
                    {exp.descricao && <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">{exp.descricao}</p>}
                  </li>
                ))
              ) : (
                <li>Não informado</li>
              )}
            </ul>

            <h3 className="text-lg font-bold mt-3 dark:text-gray-800">Soft Skills</h3>
            <p className="text-sm dark:text-gray-600"><strong>Soft Skills:</strong> {selectedUser.softSkills.join(", ")}</p>

            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => alert(`Você recomendou ${selectedUser.nome}!`)}
                className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-700"
              >
                Recomendar profissional
              </button>

              <button 
                onClick={() => alert(`Mensagem enviada para ${selectedUser.nome}!`)}
                className="bg-green-600 text-white px-3 py-1.5 text-sm rounded hover:bg-green-700"
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
      className="bg-white dark:bg-white rounded-xl shadow hover:shadow-xl cursor-pointer transition overflow-hidden"
    >
      <img src={user.foto} alt={user.nome} className="w-full aspect-square object-cover" />
      <div className="p-2">
        <h2 className="text-lg font-bold dark:text-gray-800">{user.nome}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-600">{user.cargo}</p>

        <div className="flex flex-wrap mt-1.5 gap-1">
          {user.softSkills.map((s, i) => (
            <span key={i} className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}