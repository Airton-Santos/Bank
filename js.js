let entrada, saida, btn1, btn2, btn3, valor, nav1, nav2, nav3, valor2, valor3,valor4

i = 0
entrada = document.querySelector(".container")
saida = document.querySelector("h3")
btn1 = document.querySelector("#b1")
btn2 = document.querySelector("#b2")
btn3 = document.querySelector("#b3")
valor = document.querySelector("#valor")
valor2 = document.querySelector("#valor2")
valor3 = document.querySelector("#valor3")
valor4 = document.querySelector("#valor4")
nav1 = document.querySelector("#nav1")
nav2 = document.querySelector("#nav2")
nav3 = document.querySelector("#nav3")



nav1.addEventListener("click", (e) => {

        if (valor.style.display == 'none' || valor.style.display == '') {
            saida.textContent = `Quanto você quer sacar?`
            valor.style.display = 'block'
            valor3.style.display = 'none'
            valor4.style.display = 'none'
            valor2.style.display = 'none'
            document.getElementById('valor2').value = ''
            document.getElementById('valor4').value = ''
            document.getElementById('valor').value = ''
            document.getElementById('valor3').value = ''
            
        } else {
            valor.style.display = 'none'
            saida.textContent = ""
}
});


nav2.addEventListener("click", (e) => {

    if (valor2.style.display == 'none' || valor2.style.display == '') {
        saida.textContent = `Quanto você quer Depositar?`
        valor2.style.display = 'block'
        valor.style.display = 'none'
        valor3.style.display = 'none'
        valor4.style.display = 'none'
    
        document.getElementById('valor2').value = ''
        document.getElementById('valor4').value = ''
        document.getElementById('valor').value = ''
        document.getElementById('valor3').value = ''
    } else {
        valor2.style.display = 'none'
        saida.textContent = ""
    }
    

})

nav3.addEventListener("click", (e) => {

    if (valor3.style.display == 'none' || valor3.style.display == '') {
        saida.textContent = `Digite Numero da conta e Quantidade de dinheiro`
        valor3.style.display = 'block'
        valor4.style.display = "block"
        valor2.style.display = 'none'
        valor.style.display = 'none'
        document.getElementById('valor2').value = ''
        document.getElementById('valor4').value = ''
        document.getElementById('valor').value = ''
        document.getElementById('valor3').value = ''
    } else {
        valor3.style.display = 'none'
        saida.textContent = ""
    }
    

}) 



btn1.addEventListener("click", (e) => {

    valor.style.display = 'none';
    saida.textContent = `Parabéns Você, Saque Conclúido ${document.getElementById('valor').value}`
    document.getElementById('valor2').value = ''
    document.getElementById('valor4').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('valor3').value = ''

})

btn2.addEventListener("click", (e) => {
    
    valor2.style.display = 'none';
    saida.textContent = `Parabéns Você, Depósito Conclúido ${document.getElementById('valor2').value}`
    document.getElementById('valor2').value = ''
    document.getElementById('valor4').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('valor3').value = ''

})

btn3.addEventListener("click", (e) => {

    valor3.style.display = 'none';
    valor4.style.display = 'none';
    saida.textContent = `Parabéns Transferiu ${document.getElementById('valor3').value} Para conta ${document.getElementById('valor4').value}`
    document.getElementById('valor2').value = ''
    document.getElementById('valor4').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('valor3').value = ''


})


