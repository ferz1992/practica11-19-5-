/**
y  * pagina q recibe nombre, aaño nacim entre 1922 y 2004
usuario ingresa info y imprime un msj inform el nomb y la edad 

info 
   .año actual

 requisitos 
     recibir un nombre
     id
     recibr año de nac von un rango entre 1922 y 2004
     mostrar informacion nombre y edad aprox.

     front end
      
     titulo
      cuadro de texto para ingresar nombre
      lista de rango de años
      }boton para registrar info
      respuesta q imprima un msj con el nombre y edad


      logica
      calcular edad aproximada con el año de nac ingesado
      hacer automatica la lsita de años (alguna estructra de iteracion o lo qu eme sirva)
      hacer que el boton muestre la info

 */

      const ANIO_ACTUAL = 2022;
      const ANIO_MIN_LISTA=1922;
      const ANIO_MAX_LISTA=2004;


      let anioRecibido ="anio po def";
      let nombreRecibido="nombre po def"

      // for para generar opciones de años em la lista
      for (let opcionAnio = ANIO_MIN_LISTA; opcionAnio <= ANIO_MAX_LISTA; opcionAnio++) {
          //codigo que se repite:generar un rango de años en la lsita
          //agregamos una opcion de año a la lista
          //1° 1922
          //2° 1923
          //3° 1924
          //etc hasta 2004 

          document.querySelector("#lista_anios").innerHTML +=
           `
          <option> ${opcionAnio} </option> 
          
          `;
          
      }
          /**
       * calcula la edad dependiendo del año recibido
       * muestra en la pag el resul de la edad claculada y nombe del usuario
       */
      function calcularEdad() {
        let nombreRecibido = document.querySelector("#nombre").value;
        let anioRecibido= document.querySelector("#lista_anios").value;
//calcular edad
       
       edad = ANIO_ACTUAL-anioRecibido;
       document.querySelector("#respuesta").innerHTML=`
       <h2> ${nombreRecibido} tenes ${edad}</h2>
       `
          
      }

          
      

