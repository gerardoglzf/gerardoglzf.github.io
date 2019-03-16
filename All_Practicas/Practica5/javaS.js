
var option = prompt("Introduzca un numero mayor o igual a 20");
var memory = [];
var NPrimos = [];

   //Botones de opciones
    let multiplos_2 = document.getElementById("multiplos_2");
    let multiplos_3 = document.getElementById("multiplos_3");
    let multiplos_4 = document.getElementById("multiplos_4");
    let multiplos_5 = document.getElementById("multiplos_5");
    let multiplos_6 = document.getElementById("multiplos_6");
    let multiplos_7 = document.getElementById("multiplos_7");
    let multiplos_8 = document.getElementById("multiplos_8");
    let multiplos_9 = document.getElementById("multiplos_9");
    let num_primos = document.getElementById("num_primos");
    let clear = document.getElementById("clear");
    
    
    //Promp de ingreso num de botones
function entrada(){
    if(option==null || option=="") {
            alert("Introduce un numero");
        }else if(option < 20){
            alert("Ingrese un numero mayor que 20");
        }else if(option >= 20){
            alert("Bienvenido a la criba de Erastótenes");         
        
            for (let a = 1; a <= option; a++) {
                const buttton = document.createElement('button');
                buttton.type = 'button';
                buttton.id = 'boton'+a;
                buttton.value = ""+a;
                buttton.innerText = a;
                buttton.style.height = "45px";
                buttton.style.width = "45px";
                buttton.style.marginRight = "1px";
                buttton.style.background = "#fff";
                //buttton.style.border=0;
                buttton.style.borderRadius = "50%";
                if(a==1){
                    buttton.style.background = "#3D5AFE";
                }
                //buttton.style.border = "1px";
                document.getElementById("createB").appendChild(buttton);
                // document.body.appendChild(buttton);
            }
        } 
    }

    entrada();
    
    //MULTIPLO DE NUMEROS DEL 2 - 9
    //Multiplos de 2
    multiplos_2.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 2 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#01becf";
                memory.push(a);
            }
        }
    }   
    
    //Multiplo de 3
    multiplos_3.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 3 == 0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#4040e6";
                memory.push(a);
            }
        }
    }

    //Multiplo de 4
    multiplos_4.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 4 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#D81B60";
                memory.push(a);
            }
        }
    } 

    //Multiplo de 5
    multiplos_5.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 5 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FF7043";
                memory.push(a);
            }
        }
    }

    //Multiplo de 6
    multiplos_6.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 6 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#03A9F4";
                memory.push(a);
            }
        }
    }

    //Multiplo de 7
    multiplos_7.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 7 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#65e9fd";
                memory.push(a);
            }
        }
    }

    //Multiplo de 8
     multiplos_8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 8 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#f57b01";
                memory.push(a);
            }
        }
    }

    //Multiplo de 9
    multiplos_9.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 9 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#43A047";
                memory.push(a);
            }
        }
    }

    //Numeros primos
    num_primos.onclick = function() {
        var count=0;
        for(let k=2; k<=option; k++){
            for (let r = 2; r<=option; r++) {
               if (k%r==0) {
                   count++;
            }
        }
        if(count==1){
            count=0;
            document.getElementById("boton"+k).style.background = "#ee74ca";
            memory.push(k);

        }else if(count>1){
            count=0;
        }
    }
}
    //Limpiar circulos
    clear.onclick = function() {
        for(let a=2; a<= option; a++){
            document.getElementById("boton"+a).style.background= "#fff";
            memory=[];
        }
    }