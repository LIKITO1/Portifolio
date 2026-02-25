import Card from "./components/layouts/Card"
function App() {
  return(
    <>
      <div className="absolute w-full min-h-screen py-10 flex items-center justify-center flex-col bg-gray-800 text-white gap-4">
        <h1 className="font-semibold text-4xl">Portifólio</h1>
        <p className="w-1/3 bg-gray-700 text-center font-semibold p-4 rounded-2xl">Olá, meu nome é Lucas Santos de Oliveira e esta é uma simples página que fiz para demonstrar meus projetos pessoais</p>
        <div className="flex gap-20">
        <Card title="Gerenciador de Contatos" description="Este sistema tem o propósito de criar,editar,listar e excluir contatos" img="gerenciador-de-contatos.png" tecnologias={["react","tailwind","mongo","node"]} link="https://gerenciador-de-contatos.netlify.app/" git="https://github.com/LIKITO1/gerenciador-de-contatos.git"/>
        <Card title="CRUD Simples" description="Este é um simples sistema para editar,criar,excluir e ver usuários" img="crudsimplesreact.png" link="https://crudsimplesreact.netlify.app/" tecnologias={["react","node","postgres","bootstrap"]} git="https://github.com/LIKITO1/CRUD-React.git"/>
        </div>
      </div>
    </>
  )
}
export default App