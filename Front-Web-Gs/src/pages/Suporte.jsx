import { useState } from "react";

export default function Suporte() {
  // Estado para os campos do formulário
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Função para limpar o formulário após o envio
  const limparFormulario = () => {
    setEmail("");
    setNome("");
    setNumero("");
    setObservacoes("");
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();  // Evita o comportamento padrão de recarregar a página
    console.log("Formulário enviado!");
    console.log({ email, nome, numero, observacoes });

    // Chama a função para limpar o formulário
    limparFormulario();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#bdebce] dark:bg-[#2b382b] dark:text-white transition-colors">
      <div className="bg-[#c8f5d4] dark:bg-[#355f44] dark:text-white font-bold font-sans h-12 text-2xl flex items-center px-6 shadow-md transition-colors text-gray-700">
        Suporte
      </div>

      <div className="flex-grow p-6 bg-[#f8fff9] dark:bg-[#14231a] flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white dark:bg-[#1c2b21] p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-white">Formulário de Suporte</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full p-3 rounded-md border border-[#a5d6ac] focus:outline-none focus:ring-2 focus:ring-[#6bbf75] dark:bg-[#1c2f24] dark:border-[#335f43] dark:text-white dark:focus:border-[#5ebb7a] dark:focus:ring-[#5ebb7a] transition-colors"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-2 w-full p-3 rounded-md border border-[#a5d6ac] focus:outline-none focus:ring-2 focus:ring-[#6bbf75] dark:bg-[#1c2f24] dark:border-[#335f43] dark:text-white dark:focus:border-[#5ebb7a] dark:focus:ring-[#5ebb7a] transition-colors"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="numero" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Número de Contato
            </label>
            <input
              type="tel"
              id="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              className="mt-2 w-full p-3 rounded-md border border-[#a5d6ac] focus:outline-none focus:ring-2 focus:ring-[#6bbf75] dark:bg-[#1c2f24] dark:border-[#335f43] dark:text-white dark:focus:border-[#5ebb7a] dark:focus:ring-[#5ebb7a] transition-colors"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Observações
            </label>
            <textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              rows="4"
              className="mt-2 w-full p-3 rounded-md border border-[#a5d6ac] focus:outline-none focus:ring-2 focus:ring-[#6bbf75] dark:bg-[#1c2f24] dark:border-[#335f43] dark:text-white dark:focus:border-[#5ebb7a] dark:focus:ring-[#5ebb7a] transition-colors"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#6bbf75] text-white py-2 px-6 rounded-lg hover:bg-[#5bbb69] focus:outline-none transition-colors"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
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

