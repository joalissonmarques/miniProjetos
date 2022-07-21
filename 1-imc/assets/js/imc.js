/* alt.replace(/(\d{1})(\d)/,"$1.$2"); */

export function calcImc() {
  const altura = document.getElementById('altura');
  const peso = document.getElementById('peso');
  const divCalc = document.getElementById('calc-texto');

/*   const alt = altura.replace(/(\d{1})/,"$1.")
  const pes = peso.replace(/(\d{2})/,"$1.") */

/*   altura.addEventListener('focusin', (event) =>{
    altura.replace(/(\d{1})/,"$1.")
  })
   */
  
  if(altura !== '' && peso !== '' && altura.value >= 0 && peso.value >= 0){
    divCalc.innerHTML = `
    <div class='calc-result-t'>
      <div class='d-flex-resul'>
        <h2 class='h2Resultado' id='h2-resultado'></h2>
        <img src="" alt="" id="imagem">
      </div>
      <p id="p-resultado" class="text-p-resul"></p>
      </div>\n
      <div class='calc-result-imagem'>
    </div>\n
    `;

    const calcImc = (peso.value / (altura.value  * altura.value)).toFixed(2);
    const h2Resultado = document.getElementById('h2-resultado');
    const pResultado = document.getElementById('p-resultado');
    let imagem = window.document.getElementById('imagem');

    if(calcImc >= 0 && calcImc < 18.5){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - Abaixo de 18.5 \n Abaixo do Peso`;

      imagem.src = 'assets/image/abaixopeso.png';

      pResultado.innerText = 'Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico';

    }else if(calcImc >= 18.5 && calcImc <= 24.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - Abaixo de 24.99 \n Peso Normal`;

      imagem.src = 'assets/image/pesonormal.png';

      pResultado.innerText = 'Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.'
    }else if(calcImc >= 25 && calcImc <= 29.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - IMC entre 25.0 e 29.99 \n Sobrepeso`;

      imagem.src = 'assets/image/sobrepeso.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if(calcImc >= 30 && calcImc <= 34.99){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - IMC entre 30.0 e 34.99 \n Obesidade grau I`;

      imagem.src = 'assets/image/obesidadegrau1.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if(calcImc >= 35 && calcImc <= 39.9){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - IMC entre 35.0 e 39.99 \n Obesidade grau II`;

      imagem.src = 'assets/image/obesidadegrau2.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }else if (calcImc > 40){
      h2Resultado.innerText = `Seu IMC é ${calcImc} - IMC maior que 40.00 \n Obesidade grau III`;

      imagem.src = 'assets/image/obesidadegrau3.png';

      pResultado.innerText = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.' 
    }
  }else {
      divCalc.innerHTML =
      `<h3 id="text-resul" class="text-resul">Preencha todas as informações</h3>
      <p id="text-p-resul" class="text-p-resul">Faça o cálculo aqui mesmo e conheça mais sobre o seu corpo.</p>`
  }
}
