// Visitar un url y recibir una promesa
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res)
        if (res.status != "200") {
            console.log(res);
            pokeImage('./assets/img/miserable-cute.gif')
        } else {
            return res.json();
        }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeN = data.forms[0].name;
        let pokeAbs = "Habilidades: ";
        let pokeWeight = data.weight;
        let pokeType="Tipo: "
        let pokeStats="Estadisticas: ";
        
        for (let i = 0; i < Object.keys(data.types).length; i++) {
            pokeType += data.types[i].type.name + " | ";
        }

        for (let i = 0; i < Object.keys(data.abilities).length; i++) {
            pokeAbs += data.abilities[i].ability.name + " <br/> ";
        }
    
        for (let i = 0; i < Object.keys(data.stats).length; i++) {
            pokeStats += `${data.stats[i].stat.name} => ${data.stats[1].base_stat} <br/>`;
        }
        
        console.log(pokeImg)
        console.log(pokeN)
        console.log(pokeType)   
        console.log(pokeWeight)
        console.log(pokeAbs)   
        pokeImage(pokeImg)
        document.getElementById("pokeID").innerHTML = pokeN;
        document.getElementById("pokeMasa").innerHTML = `Peso: ${pokeWeight}`;
        document.getElementById("pokeType").innerHTML = pokeType;
        document.getElementById("pokeAbilities").innerHTML = pokeAbs;
        document.getElementById("pokeStats").innerHTML = pokeStats;
        
    })
}
//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}



