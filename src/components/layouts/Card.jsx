import ReactIcon from "../icons/ReactIcon"
import TailwindIcon from "../icons/TailwindIcon"
import MongoIcon from "../icons/MongoIcon"
import NodeIcon from "../icons/NodeIcon"
import GithubIcon from "../icons/GithubIcon"
import PostgresIcon from "../icons/PostgresIcon"
import BootstrapIcon from "../icons/BootstrapIcon"
function Card({title,img,tecnologias,description,link,git}){
    const icons={
        react:ReactIcon,
        tailwind:TailwindIcon,
        mongo:MongoIcon,
        node:NodeIcon,
        github:GithubIcon,
        postgres:PostgresIcon,
        bootstrap:BootstrapIcon
    }
    return(
        <div className="border-y py-5 flex flex-col items-center justify-center gap-4 flex-wrap w-full sm:rounded-2xl sm:w-3/4 sm:border md:w-3/5 lg:w-2/5">
            <h1 className="text-xl font-semibold">{title}</h1>
            <img src={img} className="hover:cursor-pointer hover:shadow-[0_0_40px_gray] w-4/5 shadow-[0_0_40px_gray] md:shadow-none" onClick={()=>{const janela=window.open(link,"_blank");janela.focus()}}/>
            <p className="text-gray-300 font-semibold w-[80%] text-center text-lg">{description}</p>
            <div className="flex gap-4 items-center justify-center">
                <h3 className="font-semibold text-lg">Código:</h3>
                <GithubIcon className="size-8 hover:drop-shadow-[0_0_10px_white] hover:cursor-pointer" onClick={()=>{const janela=window.open(git,"_blank");janela.focus()}}/>
            </div>
            <p className="text-gray-300 font-semibold text-lg">Tecnologias utilizadas:</p>
            <div className="flex gap-5">
            {tecnologias&&tecnologias.map((valor)=>{
                const Icon=icons[valor]
                return <Icon className="size-8 hover:drop-shadow-[0_0_10px_white]" key={icons[valor]}/>
            })}
            </div>
        </div>
    )
}
export default Card