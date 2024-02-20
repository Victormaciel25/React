function Titulo({nome, paragrafo, cor}){
    return (
        <div>
            <h1 style={{color:cor}}>Oi eu sou {nome ? nome : "Fulano"}</h1>
            {paragrafo ?
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure, cumque, provident ducimus tenetur, expedita velit delectus tempora commodi hic unde consequuntur ex nihil? Quam vel inventore dolor odio doloremque.</p>
            : <p></p> 
        }
        </div>
    )
}

export default Titulo