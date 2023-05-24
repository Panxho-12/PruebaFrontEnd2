function datos(){
    let eNombre= document.getElementById("nombre");
    let nombre= eNombre.value;
    console.log(nombre)

    let eMail= document.getElementById("email");
    let mail= eMail.value;
    console.log(mail)

    let ePhono= document.getElementById("telefono");
    let phono= ePhono.value;
    console.log(phono)

    let ePwd= document.getElementById("pwd")
    let pdw= ePwd.value;
    console.log(pdw)

    let eDate= document.getElementById("fecha")
    let date= eDate.value;
    console.log(date)

    let eHombre= document.getElementById("hombre")
    let hombre= eHombre.value;
    console.log(hombre)

    let eMujer= document.getElementById("mujer")
    let mujer= eMujer.value;
    console.log(mujer)

    let eBinario= document.getElementById("nobinario")
    let binario= eBinario.value;
    console.log(binario) 

}








document.getElementById("btn").addEventListener("click",datos)