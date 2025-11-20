export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-[#14231a] dark:text-white font-sans">

      <div className="bg-[#c8f5d4] dark:bg-[#355f44] dark:text-white font-bold font-sans h-12 text-2xl flex items-center px-6 shadow-md transition-colors text-gray-700">
        Sobre
      </div>

      <div className="p-6 flex flex-col items-center">

        <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-white">
          Conheça mais sobre nós
        </h1>

        <div className="w-full max-w-4xl flex flex-col gap-6 items-center">

          <div className="bg-white dark:bg-[#1c2b21] rounded-xl shadow-lg hover:shadow-xl border border-[#b5ebc4] dark:border-[#2f4f3a] w-full sm:w-96 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-4">Quem Somos</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Somos uma plataforma dedicada à divulgação de profissionais e suas qualificações, conectando talentos a oportunidades. Nosso objetivo é oferecer visibilidade aos membros, destacando suas habilidades, formações, experiências e soft skills de forma organizada e acessível. Com foco em valorização do profissional, buscamos facilitar o encontro entre pessoas qualificadas e projetos ou empresas que valorizam competências únicas. Aqui, cada membro tem a oportunidade de mostrar seu potencial e ser reconhecido pelo seu trabalho e trajetória profissional
            </p>
          </div>

          <div className="bg-white dark:bg-[#1c2b21] rounded-xl shadow-lg hover:shadow-xl border border-[#b5ebc4] dark:border-[#2f4f3a] w-full sm:w-96 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-4">Nossa Missão</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Nossa missão é conectar profissionais a oportunidades, destacando suas habilidades e qualificações de forma clara e acessível, valorizando cada talento individual e promovendo reconhecimento em sua trajetória profissional.

Nossos valores são: Transparência, apresentando informações de forma clara e confiável; Valorização do Talento, reconhecendo competências e experiências de cada profissional; Inclusão, incentivando a participação de profissionais de diferentes áreas e backgrounds; Qualidade, garantindo que perfis e conteúdos sejam apresentados com organização e profissionalismo; e Conexão, facilitando o encontro entre profissionais e oportunidades alinhadas às suas habilidades.
            </p>
          </div>

        </div>

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

