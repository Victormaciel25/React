function Titulo(){

    let nome = "Victor Maciel"
    const soma = 10 + 15
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png";

    return (
        <div>
            <h1>Oi eu sou {nome}</h1>
            <h2>Tenho {soma} anos de idade.</h2>
            <img width={100} src={urlImg}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure, cumque, provident ducimus tenetur, expedita velit delectus tempora commodi hic unde consequuntur ex nihil? Quam vel inventore dolor odio doloremque.</p>
        </div>
    )
}

export default Titulo