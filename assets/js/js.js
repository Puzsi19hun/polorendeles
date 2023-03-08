var option = document.getElementById("választ");
var kep = document.getElementById("kep")
var kekkep = document.getElementById("kekkep")
var zoldkep = document.getElementById("zoldkep")
var narancskep = document.getElementById("narancskep")
var piroskep = document.getElementById("piroskep")
var szurkekep = document.getElementById("szurkekep")

var felirat = document.getElementById("felir")

felirat.innerHTML = felirat


zoldkep.style.display = "flex"
kep = zoldkep


function Szin()
{
    
    if(option.value == "Kék")
    {
       kep = kekkep
       kekkep.style.display = "flex"
       zoldkep.style.display = "none"
       piroskep.style.display = "none"
       narancskep.style.display = "none"
       szurkekep.style.display = "none"
    }
    if(option.value == "Zöld")
    {
       kep = zoldkep
       kekkep.style.display = "none"
       zoldkep.style.display = "flex"
       piroskep.style.display = "none"
       narancskep.style.display = "none"
       szurkekep.style.display = "none"
    }
    if(option.value == "Piros")
    {
       kep = piroskep
       kekkep.style.display = "none"
       zoldkep.style.display = "none"
       piroskep.style.display = "flex"
       narancskep.style.display = "none"
       szurkekep.style.display = "none"
    }
    if(option.value == "Narancs")
    {
       kep = narancskep
       kekkep.style.display = "none"
       zoldkep.style.display = "none"
       piroskep.style.display = "none"
       narancskep.style.display = "flex"
       szurkekep.style.display = "none"
    }
    
    if(option.value == "Szürke")
    {
       kep = kekkep
       kekkep.style.display = "none"
       zoldkep.style.display = "none"
       piroskep.style.display = "none"
       narancskep.style.display = "none"
       szurkekep.style.display = "flex"
    }
}