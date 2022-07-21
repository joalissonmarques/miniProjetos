/* alt.replace(/(\d{1})(\d)/,"$1.$2"); */

export function calcImc() {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const divCalc = document.getElementById('calc-texto');
  const h3Resultado = document.getElementById('text-resul');
  const calcImc = (peso/(altura * altura)).toFixed(2);


  if(altura !== '' && peso !== ''){
    divCalc.innerHTML = `
    <div class='calc-result-t'>
      <h2 class='h2Resultado' id='h2-resultado'></h2>
      <p id="p-resultado" class="text-p-resul"></p>
      </div>\n
      <div class='calc-result-imagem'>
      <img src="" alt="" id="imagem">
    </div>\n
    `;

    const h2Resultado = document.getElementById('h2-resultado');
    const pResultado = document.getElementById('p-resultado');
    let imagem = window.document.getElementById('imagem');

    if(calcImc >= 0 && calcImc < 18.5){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n Abaixo de 18.5 \n Abaixo do Peso`;

      imagem.src = 'assets/image/abaixopeso.png';

      pResultado.innerText = 'Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico';

    }else if(calcImc >= 18.5 && calcImc <= 24.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n Abaixo de 24.9 \n Peso Normal`;

      imagem.src = 'assets/image/pesonormal.png';

      pResultado.innerText = 'Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.'
    }else if(calcImc >= 25 && calcImc <= 29.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n IMC entre 25.0 e 29.9 \n Sobrepeso`;

      imagem.src = 'assets/image/sobrepeso.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if(calcImc >= 30 && calcImc <= 34.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n IMC entre 30.0 e 34.9 \n Obesidade grau I`;

      imagem.src = 'assets/image/obesidadegrau1.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if(calcImc >= 35 && calcImc <= 39.9){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n IMC entre 35.0 e 39.9 \n Obesidade grau II`;

      imagem.src = 'assets/image/obesidadegrau2.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if (calcImc > 40){
      h2Resultado.innerText = `Seu IMC é ${calcImc} \n IMC maior que 40.00 \n Obesidade grau III`;

      imagem.src = 'assets/image/obesidadegrau3.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }

  }else {
      h3Resultado.innerText = 'Preencha todas as informações!'
  }
}
