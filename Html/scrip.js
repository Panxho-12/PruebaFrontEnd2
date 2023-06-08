var modificar = (listadoNuevo)=>{
    let eNombre= document.getElementById("nombre");
    let eMail= document.getElementById("email");
    let ePhono= document.getElementById("telefono");
    let ePwd= document.getElementById("pwd")
    let eDate= document.getElementById("fecha")
    let eHombre= document.getElementById("hombre")
    let eMujer= document.getElementById("mujer")
    let eBinario= document.getElementById("nobinario")
    let eBtnEditarUp = document.getElementById('btnEditar')


    let indice = eBtnEditarUp.value;
    let nombre= eNombre.value;
    let mail= eMail.value;
    let phono= ePhono.value;
    let pdw= ePwd.value;
    let date= eDate.value;
    let hombre= eHombre.checked;
    let mujer= eMujer.checked;
    let binario= eBinario.checked;

    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].mail = mail;
    listadoNuevo[indice].phono = phono;
    listadoNuevo[indice].pdw = pdw;
    listadoNuevo[indice].date = date;
    listadoNuevo[indice].hombre = hombre;
    listadoNuevo[indice].mujer = mujer;
    listadoNuevo[indice].binario = binario;
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    cargartTabla(lista)
}


var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    localStorage.setItem('personas',JSON.stringify(lista));
    cargartTabla(lista)
}


var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre= document.getElementById("nombre");
    let eMail= document.getElementById("email");
    let ePhono= document.getElementById("telefono");
    let ePwd= document.getElementById("pwd")
    let eDate= document.getElementById("fecha")
    let eHombre= document.getElementById("hombre")
    let eMujer= document.getElementById("mujer")
    let eBinario= document.getElementById("nobinario")

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
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eMail.value = element.mail;
            ePhono.value = element.phono;
            ePwd.value = element.pdw;
            eDate.value = element.date;
            eHombre.checked = element.hombre
            eMujer.checked = element.mujer
            eBinario.checked = element.binario
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eMail.value = element.mail;
            ePhono.value = element.phono;
            ePwd.value = element.pdw;
            eDate.value = element.date;
            eHombre.checked = element.hombre
            eMujer.checked = element.mujer
            eBinario.checked = element.binario
            let sEditar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar
            let eBtnEditarUp = document.getElementById('btnEliminar');
            eBtnEditarUp.addEventListener('click',()=>eliminar(listadoNuevo))
        })     
    }
}



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


    let listadoIngreso = localStorage.getItem("ingreso")
    let listadoAntiguo = JSON.parse(listadoIngreso);
    if (listadoAntiguo==null){
        let ingreso = {"id":0,"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"genero":sexo}
        listadoNuevo = [ingreso]
    }else{
        let ingreso = {"id":listadoAntiguo.length,"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"genero":sexo}
        listadoNuevo = [...listadoAntiguo,ingreso]
    }
    localStorage.setItem("ingreso",JSON.stringify(listadoNuevo))

    cargarTabla(listadoNuevo)
}



document.getElementById("btn").addEventListener("click",datos)
document.getElementById("btn").addEventListener("click",registro)