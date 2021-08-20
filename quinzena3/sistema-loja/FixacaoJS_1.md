``` let salario = 2000
    let salarioBruto = 2000 + (100 * qtdeCarrosVendidos) + (5/100 * valorTotalVendas)
        if (qtdeCarrosVendidos > 0){
       console.log("Salario do mes é:", salarioBruto)
       } else {
         console.log("Salario do mes é:", salario)  
       }
     } 
calculaSalario(3, 130000)

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui99
   if(quantidade >= 12){
    quantidade * 1,00
    }else if(quantidade <= 11) { 
      quantidade * 1,30
  }
  return quantidade
}