function Card({title,img,tecnologias,description}){
    return(
        <div className="border p-5 flex flex-col items-center justify-center gap-4 rounded-2xl flex-wrap w-100">
            <h1 className="text-xl font-semibold">{title}</h1>
            <img src={img} width={300}/>
            <p className="text-gray-300 font-semibold">{description}</p>
            <p className="text-gray-300 font-semibold">Tecnologias utilizadas:</p>
            <div className="flex">
            {tecnologias.map((valor)=>(
                <span>{valor}</span>
            ))}
            </div>
        </div>
    )
}
export default Card