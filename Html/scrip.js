var  datos = ()=> {
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
    let hombre= eHombre.checked;
    console.log(hombre)

    let eMujer= document.getElementById("mujer")
    let mujer= eMujer.checked;
    console.log(mujer)

    let eBinario= document.getElementById("nobinario")
    let binario= eBinario.checked
    console.log(binario)



  

}

var registro = () =>{
    let eContenedorTabla = document.getElementById("contenedorTabla")
    let eNombre = document.getElementById("nombre")
    let nombre = eNombre.value;

    let eMail = document.getElementById("email")
    let mail = eMail.value;

    let ePhono = document.getElementById("telefono")
    let phono = ePhono.value;

    let ePwd = document.getElementById("pwd")
    let pwd = ePwd.value;

    let eDate = document.getElementById("fecha")
    let date = eDate.value;

    let eHombre = document.getElementById("hombre")
    let hombre = eHombre.checked;

    let eMujer = document.getElementById("mujer")
    let mujer = eMujer.checked;

    let eBinario = document.getElementById("nobinario")
    let binario = eBinario.checked;

      // Contiene el genero 
      var sexo = ""
    
      if (hombre==true){
          sexo= "Hombre"
      }
      else if(mujer==true){
          sexo = "Mujer"
      }
      else{sexo = "No Binario"}

    // let ingreso = {"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"hombre":hombre,"mujer":mujer,"nobinario":binario}
    let ingreso = {"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"genero":sexo}
    let listadoIngreso = localStorage.getItem("ingreso")
    let listadoAntiguo = JSON.parse(listadoIngreso);
    if (listadoAntiguo==null){
        listadoNuevo = [ingreso]
    }else{
        listadoNuevo = [...listadoAntiguo,ingreso]
    }
    console.log(ingreso)
    console.log(listadoAntiguo)
    console.log(listadoNuevo)
    localStorage.setItem("ingreso",JSON.stringify(listadoNuevo))
    
    //Se comienza con la creacion de la tabla
    render = "<table>"
    render+= "<tr><th>Nombre</th><th>Email</th><th>Telefono</th><th>Contraseña</th><th>Fecha</th><th>Genero</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo [i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.telefono+"</td>"
        render+="<td>"+element.password+"</td>"
        render+="<td>"+element.fecha+"</td>"
        render+="<td>"+element.genero+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+= "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i)
        let element = listadoNuevo [i];
        eBtn.addEventListener("click",()=>{alert("hola "+element.nombre+" "+element.genero)})  
    }
    //se termina la tabla
}






document.getElementById("btn").addEventListener("click",datos)
document.getElementById("btn").addEventListener("click",registro)