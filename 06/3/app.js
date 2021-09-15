//Boton Buscar
const cargarDatos = async () => {

    let artista=document.querySelector("#artista").value;
    let cancion=document.querySelector("#cancion").value;

    const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`
    // console.log(url);
    const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
    // console.log(url2);

    const rLetra=await fetch(url);
    const resLetra=await rLetra.json();
    console.log(resLetra);

    const rArtista=await fetch(url2);
    const resArtista=await rArtista.json();
    console.log(resArtista);

    let infoArtista=resArtista.artists[0];
    let letraCancion=resLetra.lyrics;

    let divArtista=document.querySelector("#divArtista");
    let divCancion=document.querySelector("#divCancion");
    let divLogoArtista=document.querySelector("#divLogoArtista")
    let divfotosArtistas=document.querySelector("#divfotosArtistas")
    
    // let divError=document.querySelector("divError")
    //   if(resArtista.artists===null){
    //     divError.innerHTML=`<p>No Hay Artista</p>`;
    //     return
    // }

    const {strArtistThumb,strGenre,strCountry, strWebsite, strArtistLogo,strArtistFanart,strArtistFanart2,strArtistFanart3,strArtistFanart4}=infoArtista
    
    // Info/foto Artista
    divArtista.innerHTML= `
        <figure class="snip0015">
            <img src="${strArtistThumb}" alt="sample38"/>
            <figcaption>
                <p>Género: ${strGenre}</p>
                <p>Origen: ${strCountry}</p>
                <p>Web: ${strWebsite}</p>
            </figcaption>			
        </figure> 
    `
    // Logo Artista
    divLogoArtista.innerHTML=`
        <img src="${strArtistLogo}" alt="" width="200px">  
    `
    // Letra Cancíon
    divCancion.innerHTML=`
        <h5>${cancion}</h5> 
        <p>${letraCancion}</p>
    `
    // Fotos Artistas
    divfotosArtistas.innerHTML=`
        <div class="col-md-3 resultado2" id="">
            <img src="${strArtistFanart}" alt="" width="250px">   
        </div>
        <div class="col-md-3 resultado2" id="">
        <img src="${strArtistFanart2}" alt="" width="250px">   
        </div>
        <div class="col-md-3 resultado2" id="">
            <img src="${strArtistFanart3}" alt="" width="250px">   
        </div>
        <div class="col-md-3 resultado2" id="">
        <img src="${strArtistFanart4}" alt="" width="250px">   
        </div>
    `
}

//Boton Borrar
const borrar=()=>{
    document.querySelector("#artista").value=``;
    document.querySelector("#cancion").value=``;
    document.querySelector("#divLogoArtista").value=``;
    document.querySelector("#divfotosArtistas").value=``;
    document.querySelector("#divArtista").innerHTML=``;
    document.querySelector("#divCancion").innerHTML=``;
    document.querySelector("#divLogoArtista").innerHTML=``;   
    document.querySelector("#divfotosArtistas").innerHTML=``;
 }



 
