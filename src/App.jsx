import Card from "./components/layouts/Card"
import ReactIcon from "./components/icons/ReactIcon"
function App() {
  return(
    <>
      <div className="absolute w-full h-full flex items-center justify-center flex-col bg-gray-800 text-white gap-4">
        <h1 className="font-semibold text-4xl">Portifólio</h1>
        <p className="w-1/3 bg-gray-700 text-center font-semibold p-4 rounded-2xl">Olá, meu nome é Lucas Santos de Oliveira e esta é uma simples página que fiz para demonstrar meus projetos pessoais</p>
        <Card title="Gerenciador de Contatos" description="Este sistema tem o propósito de criar,editar,listar e excluir contatos" img="gerenciador-de-contatos.png" tecnologias={["react"]}/>
      </div>
    </>
  )
}
export default App