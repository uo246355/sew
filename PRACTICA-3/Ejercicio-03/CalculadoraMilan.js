 // Version 1.1 23/10/2021 
 "use strict";
 class Calculadora {
    
     constructor (pantalla, marc){
         this.pantalla=pantalla;
         this.marc = marc;
         this.escuchar();
     }
     escribir()
     {
        document.querySelector("form input[name='pantallaCalc']").value = this.pantalla;
        
     }
     digitos(numero){
         this.pantalla += Number(numero);
         this.escribir();        
     }
     punto(){
        this.pantalla += ".";
        this.escribir();
     }
     suma(){
        this.pantalla += " + ";
        this.escribir();
     }
     resta(){
        this.pantalla += " - ";
        this.escribir();
     }
     multiplicacion(){
        this.pantalla += " * ";
        this.escribir();
     }
     division(){
        this.pantalla += " / ";
        this.escribir();
     }
     mrc(){
        this.pantalla += this.marc;
        this.escribir();
     }
     mMenos(){
      if(!isNaN(this.pantalla))
      {
      this.marc -= Number(this.pantalla);
      }
     }
     mMas(){
      if(!isNaN(this.pantalla))
      {
        this.marc += Number(this.pantalla);
      }
     }
     borrar(){
        this.pantalla = new String("");
        this.escribir();
     }
     igual(){
        this.pantalla = String(eval(this.pantalla));
        this.escribir();
     }
     porcentaje(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = String(eval(this.pantalla/100));
            this.escribir();
         }
     }
     raizcuadrada(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = Math.sqrt(this.pantalla);
            this.escribir();
         }
      }
      negativo(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = " - " + this.pantalla;
            this.igual();
         }
         }
     escuchar(){
     document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if(keyName == '.')
      {
         calc.punto();
      }
      if(keyName == '+')
      {
         calc.suma();
      }
      if(keyName == 'c')
      {
         calc.borrar();
      }
      if(keyName == 'Enter')
      {
         calc.igual();
      }
      if(keyName == '*')
      {
         calc.multiplicacion();
      }
      if(keyName == '/')
      {
         calc.division();
      }
      if(keyName == '-')
      {
         calc.resta();
      }
      if(keyName == '0')
      {
         calc.digitos(0);
      }
      if(keyName == '1')
      {
         calc.digitos(1);
      }
      if(keyName == '2')
      {
         calc.digitos(2);
      }
      if(keyName == '3')
      {
         calc.digitos(3);
      }
      if(keyName == '4')
      {
         calc.digitos(4);
      }
      if(keyName == '5')
      {
         calc.digitos(5);
      }
      if(keyName == '6')
      {
         calc.digitos(6);
      }
      if(keyName == '7')
      {
         calc.digitos(7);
      }
      if(keyName == '8')
      {
         calc.digitos(8);
      }
      if(keyName == '9')
      {
         calc.digitos(9);
      }
    });
   }
 }
 var calc = new Calculadora("","");

 