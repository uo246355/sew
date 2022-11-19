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

 class CalculadoraCientifica extends Calculadora  {
   constructor (pantalla, marc,radianes, grados, gradianes, baseExponencial, pantallaVariables, baseRaiz, baseLog, baseModulo){
      super(pantalla,marc);
      this.radianes = radianes;
      this.grados = grados;
      this.gradianes = gradianes;
      this.baseExponencial = baseExponencial;
      this.pantallaVariables = pantallaVariables;
      this.baseRaiz = baseRaiz;
      this.baseLog = baseLog;
      this.baseModulo = baseModulo;
      this.escucharNuevo();
  }
  
  

  cambiarValorTrigonometrico(){
     if(this.grados)
     {
      this.grados = false;
      this.gradianes = false;
      this.radianes = true;
      document.querySelector("form input[name='valorTrigonometrico']").value = "RAD";
     }
     else if(this.radianes)
     {
      this.grados = false;
      this.gradianes = true;
      this.radianes = false;
      document.querySelector("form input[name='valorTrigonometrico']").value = "GRAD";
     }
     else if(this.gradianes)
     {
      this.grados = true;
      this.gradianes = false;
      this.radianes = true;
      document.querySelector("form input[name='valorTrigonometrico']").value = "DEG";
     }
  }

  escribirPantallaVariables(variables)
     {
        document.querySelector("form input[name='pantallaVariables']").value = variables;
     }

     parentesisIzquierda(){
        this.pantalla += " ( ";
        this.escribir();
     }

     parentesisDerecha(){
      this.pantalla += " ) ";
      this.escribir();
   }

   pi()
   {
      if(isNaN(this.pantalla))
      {
      this.pantalla+= Math.PI;
      this.escribir();
      }
      else{
         this.pantalla = Math.PI;
         this.escribir();
      }
   }

   e()
   {
      if(isNaN(this.pantalla))
      {
      this.pantalla+= Math.E;
      this.escribir();
      }
      else{
         this.pantalla= Math.E;
         this.escribir();
      }
   }

  igualNuevo(){
     if(Number(this.baseExponencial) != 0)
     {
        if(!isNaN(this.pantalla))
        {
         this.pantalla = Math.pow(Number(this.baseExponencial), Number(this.pantalla));
         this.pantallaVariables = "";
         this.escribirPantallaVariables("");
         this.escribir();
         this.baseExponencial = 0;
        }
     }
     else if(Number(this.baseRaiz) != 0)
     {
      this.pantalla = Math.pow(Number(this.baseRaiz), 1/Number(this.pantalla));
      this.pantallaVariables = "";
      this.escribirPantallaVariables("");
      this.escribir();
      this.baseRaiz = 0;
     }
     else if(Number(this.baseLog) != 0)
     {
      this.pantalla = Math.log(Number(this.baseLog)) / Math.log(Number(this.pantalla));
      this.pantallaVariables = "";
      this.escribirPantallaVariables("");
      this.escribir();
      this.baseLog = 0;
     }
     else if(Number(this.baseModulo) != 0)
     {
      this.pantalla = Number(this.baseModulo) % Number(this.pantalla);
      this.pantallaVariables = "";
      this.escribirPantallaVariables("");
      this.escribir();
      this.baseModulo = 0;
     }
     else{
        this.igual();
     } 
  }
 

 seno(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      
      this.pantalla = Math.sin(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = Math.sin(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = Math.sin(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
 }
 coseno(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      
      this.pantalla = Math.cos(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = Math.cos(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = Math.cos(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
 }
 tangente(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
       
      this.pantalla = Math.tan(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = Math.tan(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
     
      //Pasamos de grados a gradianes
      this.pantalla = Math.tan(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
 }

arcoseno(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      
      this.pantalla = Math.asin(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = Math.asin(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = Math.asin(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
arcocoseno(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      
      this.pantalla = Math.acos(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = Math.acos(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = Math.acos(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
arcotangente(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      this.pantalla = Math.atan(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      //Pasamos de grados a radianes
      this.pantalla = Math.atan(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
     
      //Pasamos de grados a gradianes
      this.pantalla = Math.atan(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
 secante(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
       
      this.pantalla = 1/Math.cos(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.cos(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.cos(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
cosecante(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      
      this.pantalla = 1/Math.sin(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.sin(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.sin(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
cotangente(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    {
      this.pantalla = 1/Math.tan(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.tan(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.tan(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
}
   arcosecante(){
   if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    { 
      this.pantalla = 1/Math.acos(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.acos(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.acos(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
   }
   arcocosecante(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    { 
      this.pantalla = 1/Math.asin(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.asin(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.asin(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
   }
   arcocotangente(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
   {
    if(this.grados)
    { 
      this.pantalla = 1/Math.atan(this.pantalla * (Math.PI / 180)) ;
      this.escribir();
    }
    else if(this.radianes)
    {
      
      //Pasamos de grados a radianes
      this.pantalla = 1/Math.atan(this.pantalla);
      this.escribir();
    }
    else if(this.gradianes)
    {
      
      //Pasamos de grados a gradianes
      this.pantalla = 1/Math.atan(this.pantalla * (Math.PI / 200));
      this.escribir();
    }
   }
   }

   senohiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {   
         //Pasamos de grados a radianes
         this.pantalla = Math.sinh(this.pantalla);
         this.escribir();
      }
    }
    cosenohiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {   
         //Pasamos de grados a radianes
         this.pantalla = Math.cosh(this.pantalla);
         this.escribir();
    
       }
    }
    tangentehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {        
         //Pasamos de grados a radianes
         this.pantalla = Math.tanh(this.pantalla);
         this.escribir();  
      }
    }
   
   arcosenohiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         //Pasamos de grados a radianes
         this.pantalla = Math.asinh(this.pantalla);
         this.escribir();
      }
   }
   arcocosenohiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {     
         //Pasamos de grados a radianes
         this.pantalla = Math.acosh(this.pantalla);
         this.escribir();  
      }
   }
   arcotangentehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         //Pasamos de grados a radianes
         this.pantalla = Math.atanh(this.pantalla);
         this.escribir();
    
      }
   }
    secantehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
      
         this.pantalla = 1/Math.cosh(this.pantalla) ;
         this.escribir();
      }
   }
   cosecantehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         this.pantalla = 1/Math.sinh(this.pantalla) ;
         this.escribir();
      }
   }
   cotangentehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         //Pasamos de grados a radianes
         this.pantalla = 1/Math.tanh(this.pantalla);
         this.escribir();
      }
   }
      arcosecantehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         //Pasamos de grados a radianes
         this.pantalla = 1/Math.acosh(this.pantalla);
         this.escribir();
      }
   }
      arcocosecantehiperbolico(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
      {
         //Pasamos de grados a radianes
         this.pantalla = 1/Math.asinh(this.pantalla);
         this.escribir();
      }
      }
      arcocotangentehiperbolico(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      {  
         //Pasamos de grados a radianes
         this.pantalla = 1/Math.atanh(this.pantalla);
         this.escribir();
      }
      }

      cuadrado(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.pow(this.pantalla,2);
         this.escribir();
      }
      }
      cubo(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.pow(this.pantalla,3);
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
      raizcubica(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.cbrt(this.pantalla);
         this.escribir();
      }
      }
      exponencial(){
         if(!isNaN(this.pantalla))
         {
            this.baseExponencial = Number(this.pantalla);
            this.borrar();
            this.escribirPantallaVariables("base: " + this.baseExponencial);
         }
        }
      raizexponente(){
         if(!isNaN(this.pantalla))
         {
            this.baseRaiz = Number(this.pantalla);
            this.borrar();
            this.escribirPantallaVariables("base raiz: " + this.baseRaiz);
         }
      }
      diezElevado()
      {
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.pow(10, this.pantalla);
         this.escribir();
      }
      }
      dosElevado(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.pow(2, this.pantalla);
         this.escribir();
      }
      }
      logaritmo(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.log10(this.pantalla);
         this.escribir();
      }
      }
      logaritmoBase(){
         if(!isNaN(this.pantalla))
         {
            this.baseLog = Number(this.pantalla);
            this.borrar();
            this.escribirPantallaVariables("logaritmo con base y: " + this.baseLog);
         }
      }
      logaritmoneperiano(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.log(this.pantalla);
         this.escribir();
      }
      }
      eelevadoA(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = Math.exp(this.pantalla);
         this.escribir();
      }
      }
      negativo(){
      if(!isNaN(this.pantalla) && this.pantalla != "")
      { 
         this.pantalla = " - " + this.pantalla;
         this.igualNuevo();
      }
      }

      factorial(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = this.correFactorial(this.pantalla);
            this.escribir();
         }
      }

      correFactorial(n){
         if (n < 0) return;
         if (n < 2) return 1;
         return n * factorial(n - 1);
      }
      valorAbsoluto(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = Math.abs(Number(this.pantalla));
            this.escribir();
         }
      }
      unoentre(){
         if(!isNaN(this.pantalla) && this.pantalla != "")
         { 
            this.pantalla = 1/Number(this.pantalla);
            this.escribir();
         }
      }
      modulo(){
         if(!isNaN(this.pantalla))
         {
            this.baseModulo = Number(this.pantalla);
            this.borrar();
            this.escribirPantallaVariables("modulo de : " + this.baseModulo + " entre");
         }
      }
      ms(){
         if(!isNaN(this.pantalla))
         {
         this.marc = Number(this.pantalla);
         }
      }

      random(){
         this.pantalla = Math.random();
         this.escribir();
      }

      escucharNuevo(){
         document.addEventListener('keydown', (event) => {
          const keyName = event.key;
          if(keyName == 'Enter')
          {
             calc.igualNuevo();
          }
        });
       }
      }

 var calc = new CalculadoraCientifica("","", false, true, false, 0, "", 0, 0, 0);

 