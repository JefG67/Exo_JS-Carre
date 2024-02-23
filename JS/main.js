let element = document.querySelector(".carre")


let style = window.getComputedStyle(element) // variable pour retouner le style css de l'element HTML en utilisant getComputedStyle sur mon element (=carre)


function infoCarre(){
    console.log("test")
    
    const className =  'Class : ' + element.className + "\n" 
    const backgroundColor = '-Background color ' + style.backgroundColor+ "\n" 
    const color = '-Color : ' + style.color + "\n" 
    const height = '-Height : ' + style.height + "\n" 
    const width = '-Width : ' + style.width + "\n" 
    const display = '-Display : ' + style.display + "\n" 
    const fontFamily = '-Font Family : ' + style.fontFamily + "\n"
    alert ( className + backgroundColor + color+ height + width + display + fontFamily)
}


element.addEventListener('click', function(){
    infoCarre()})


    