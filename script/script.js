one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");


let usuarios = [];


function cambiar(){
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";


    document.getElementById("inputSexo").value = 0;
    document.getElementById("inputEdad").value = "";
    document.getElementById("inputAltura").value = "";
    document.getElementById("inputPeso").value = "";
}

function  calcular() {
    
    var sexo = document.getElementById("inputSexo").value;

    if (sexo==1){
        var inputSexo = "Hombre";
    }else if (sexo==2){
        var inputSexo = "Mujer";
    }
    
    
    var inputEdad = document.getElementById("inputEdad").value;
    var inputPeso = document.getElementById("inputPeso").value;
    var inputAltura = parseFloat(document.getElementById("inputAltura").value);

    var varImc = 0;

    varImc = inputPeso / (inputAltura * inputAltura);

    one = document.getElementById("one");
    two = document.getElementById("two");

    one.style.display = "none";
    two.style.display = "block";


    if (varImc < 18.5) {
        document.getElementById("num").innerHTML = `
            <h5 style="color: blue; font-size: 50px;">${varImc.toFixed(2)}</h5>
        `;
        document.getElementById("estado").innerHTML = `
            <h5 style="color: blue;">Bajo de peso</h5>
        `;
    }else if (varImc > 18.5 && varImc < 24.9){
        document.getElementById("num").innerHTML = `
            <h5 style="color: green; font-size: 50px;">${varImc.toFixed(2)}</h5>
        `;
        document.getElementById("estado").innerHTML = `
            <h5 style="color: green;">Saludable</h5>
        `;
    }else if (varImc > 24.9 && varImc < 29.9){
        document.getElementById("num").innerHTML = `
            <h5 style="color: yellow; font-size: 50px;">${varImc.toFixed(2)}</h5>
        `;
        document.getElementById("estado").innerHTML = `
            <h5 style="color: yellow;">Sobrepeso</h5>
        `;
    }else if (varImc > 29.9 && varImc < 39.9){
        document.getElementById("num").innerHTML = `
            <h5 style="color: orange; font-size: 50px;">${varImc.toFixed(2)}</h5>
        `;
        document.getElementById("estado").innerHTML = `
            <h5 style="color: orange;">Obesidad</h5>
        `;
    }else if (varImc > 39.9){
        document.getElementById("num").innerHTML = `
            <h5 style="color: red; font-size: 50px;">${varImc.toFixed(2)}</h5>
        `;
        document.getElementById("estado").innerHTML = `
            <h5 style="color: red;">Obesidad extrema</h5>
        `;
    }

    let user = {
        sexo: inputSexo,
        edad: inputEdad,
        altura: inputAltura,
        peso: inputPeso,
        imc: varImc
    }

    usuarios.push(user);

    localStorage.setItem("imc", JSON.stringify(user));

}

function estadisticas() {

    var estSexoH = 0;
    var estSexoM = 0;
    var estEdad1 = 0;
    var estEdad2 = 0;
    var estEdad3 = 0;
    var estAltura1 = 0;
    var estAltura2 = 0;
    var estAltura3 = 0;
    var estPeso1 = 0;
    var estPeso2 = 0;
    var estPeso3 = 0;
    var estIMC1 = 0;
    var estIMC2 = 0;
    var estIMC3 = 0;
    var estIMC4 = 0;
    var estIMC5 = 0;

    one = document.getElementById("one");
    two = document.getElementById("two");
    three = document.getElementById("three");

    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
   
    for (i=0; i<usuarios.length;i++){
        if (usuarios[i].sexo == "Hombre") {
            estSexoH++;
        }else if (usuarios[i].sexo == "Mujer") {
            estSexoM++;
        }

        if (usuarios[i].edad <= 17){
            estEdad1++;
        }else if (usuarios[i].edad > 17 && usuarios[i].edad <= 49){
            estEdad2++;
        }else if(usuarios[i].edad > 49){
            estEdad3++;
        }

        if (usuarios[i].altura <= 1.60){
            estAltura1++;
        }else if(usuarios[i].altura > 1.60 && usuarios[i].altura <= 1.79){
            estAltura2++;
        }else if (usuarios[i].altura > 1.79){
            estAltura3++;
        }

        if (usuarios[i].peso <= 59){
            estPeso1++;
        }else if (usuarios[i].peso > 59 && usuarios[i].peso <= 79){
            estPeso2++;
        }else if (usuarios[i].peso > 79){
            estPeso3++;
        }

        if (usuarios[i].imc <= 18.4){
            estIMC1++;
        }else if (usuarios[i].imc > 18.4 && usuarios[i].imc <=24.8){
            estIMC2++;
        }else if (usuarios[i].imc > 24.8 && usuarios[i].imc <= 29.8){
            estIMC3++;
        }else if (usuarios[i].imc > 29.8 && usuarios[i].imc <= 39.8){
            estIMC4++;
        }else if (usuarios[i].imc > 39.8){
            estIMC5++;
        }

        document.getElementById("third").innerHTML=`
        <h1 style="color: green;">Estadisticas</h1>
        <br>
        <h5>Sexo: </h5>
        <div id="estSexo" class="est">
            <p>Hombres: ${estSexoH}</p>
            <p>Mujeres: ${estSexoM}</p>
        </div>
        <br>
        <h5>Edad: </h5>
        <div id="estEdad" class="est">
            <p>0-17: ${estEdad1}</p>
            <p>18-49: ${estEdad2}</p>
            <p>+50: ${estEdad3}</p>
        </div>
        <br>
        <h5>Altura: </h5>
        <div id="estAltura" class="est">
            <p>-1.60m: ${estAltura1}</p>
            <p>1.61m-1.79m: ${estAltura2}</p>
            <p>+1.80m: ${estAltura3}</p>
        </div>
        <br>
        <h5>Peso: </h5>
        <div id="estPeso" class="est">
            <p>-59kg ${estPeso1}</p>
            <p>60kg-79kg: ${estPeso2}</p>
            <p>+80kg: ${estPeso3}</p>
        </div>
        <br>
        <h5>IMC: </h5>
        <div id="estIMC" class="est">
            <p>Bajo peso: ${estIMC1}</p>
            <p>Saludable: ${estIMC2}</p>
            <p>Sobrepeso: ${estIMC3}</p>
            <p>Obesidad: ${estIMC4}</p>
            <p>Obesidad extrema: ${estIMC5}</p>
        </div>
        `
            
    }
}