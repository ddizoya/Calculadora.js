var Calculator = function () {
   
   var calc = document.getElementById("calculator");
   calc.setAttribute("class","calc");
   var pantalla = document.createElement("input");
 
   var agregarBoton = function(value, row, parentDiv){
     var button = document.createElement("button");
     var text = document.createTextNode(value);
     button.appendChild(text);
     row.appendChild(button);
     parentDiv.appendChild(row);
     if (!isNaN(value)){
         button.setAttribute("class","calc-button calc-button-gray");
     } else {
         button.setAttribute("class", "calc-button calc-button-red");
     }
     return button;
   };
    
   var _generarPantalla = function(){
      pantalla.setAttribute("type", "text");
      pantalla.setAttribute("class","calc-display-input");
      calc.appendChild(pantalla);
      window.addEventListener("keydown", function(event){
          if (event.keyCode = 13){
              var cuenta = eval(pantalla.value);
              pantalla.value = cuenta;
          }
      });
   };
   
   var _generarBotonesCalculo = function (){
       var botonesCuentas = document.createElement("div");
       botonesCuentas.setAttribute("class", "calc-row");
       var calculo = ["+","-","*","/"].forEach((a) => agregarBoton(a, botonesCuentas, calc));
   };
    
   var _dibujarCalculadora = function (){
     var fila = 3;
     var value = 1;
     var cuentas
     var calc = document.getElementById("calculator");
     for (var x = 0; x < fila; x++ ){
       var row = document.createElement("div");
       row.setAttribute("class","calc-row");
       for (var y = 0; y < fila; y++){
         var button = agregarBoton(value, row, calc);
         value++;
       }
     }
   };
   
   var _enviarValor = function (controller){
       var oldData = pantalla.value;
       console.log("oldData: " + oldData);
       oldData += controller.innerHTML;
       pantalla.value = oldData;
       console.log("pantalla: " + pantalla.value);
   };
    
   var _setEventHandlers = function(){
       var buttons = document.getElementsByTagName("button");
       for (var i =0; i < buttons.length; i++){
           var b = buttons[i];
           if (!isNaN(b.innerHTML)){
                b.onclick = _enviarValor(b);
           }
       }
   };
    
   return {
       init : function(){
          _generarPantalla();
          _generarBotonesCalculo();
          _dibujarCalculadora();
           console.log("Generando eventos...");
          _setEventHandlers();
     }  
   };
};

window.addEventListener("load", function(){
    Calculator().init();
    console.log("Calculadora generada...");
});