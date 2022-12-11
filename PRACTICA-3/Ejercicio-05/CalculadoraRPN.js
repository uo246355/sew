 // Version 1.1 23/10/2021 
 "use strict";
 class Calculadora {
    
     constructor (pantalla, radianes, gradianes, grados){
         this.pantalla=pantalla;
         this.radianes = radianes;
         this.gradianes = gradianes;
         this.grados = grados;
         this.escuchar();
         this.pila = new Array();
     }
   apilar(valor){
      this.pila.push(Number(valor));
   }
    desapilar(){
      return (this.pila.pop());
    }
     escribir()
     {
        document.querySelector("form input[name='pantallaCalc']").value = this.pantalla;
     }
     escribirPila()
     {
        var stringPila = "<h2>" + "Pila" +"</h2>" + "<ul>";
        var contador = this.pila.length;
        this.borrar();
        for (var i in this.pila)
        { 
           stringPila += "<li>" + contador + ":         " + this.pila[i] + "</li>";
           contador--;
        }
        stringPila += "</ul>";
        document.querySelector("main").innerHTML = stringPila;
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
        if(this.pila.length>=2)
        {
           this.pila[this.pila.length-2] = Number(this.pila[this.pila.length-2]) + Number(this.pila[this.pila.length-1]);
           this.desapilar();
           this.escribirPila();
        }
     }
     resta(){
      if(this.pila.length>=2)
      {
         this.pila[this.pila.length-2] = Number(this.pila[this.pila.length-2]) - Number(this.pila[this.pila.length-1]);
         this.desapilar();
         this.escribirPila();
      }
     }
     multiplicacion(){
      if(this.pila.length>=2)
      {
         this.pila[this.pila.length-2] = Number(this.pila[this.pila.length-2]) * Number(this.pila[this.pila.length-1]);
         this.desapilar();
         this.escribirPila();
      }
     }
     division(){
      if(this.pila.length>=2)
      {
         this.pila[this.pila.length-2] = Number(this.pila[this.pila.length-2]) / Number(this.pila[this.pila.length-1]);
         this.desapilar();
         this.escribirPila();
      }
     }
     borrar(){
        this.pantalla = "";
        this.escribir();
     }
     Enter(){
        if(!this.pantalla=="")
        {
         this.apilar(Number(this.pantalla));
         this.escribirPila();
        }
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
  seno(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
       this.pila[this.pila.length-1] = Math.sin(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
       this.escribirPila();
     }
     else if(this.radianes)
     {
       
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.sin(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
       
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.sin(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
  }
  coseno(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
       
      this.pila[this.pila.length-1] = Math.cos(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
      this.escribirPila();
     }
     else if(this.radianes)
     {
       
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.cos(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
       
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.cos(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
  }
  tangente(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
        
      this.pila[this.pila.length-1] = Math.tan(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
      this.escribirPila();
     }
     else if(this.radianes)
     {
       
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.tan(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
      
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.tan(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
  }
 
 arcoseno(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
       
      this.pila[this.pila.length-1] = Math.asin(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
      this.escribirPila();
     }
     else if(this.radianes)
     {
       
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.asin(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
       
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.asin(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
 }
 arcocoseno(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
       
      this.pila[this.pila.length-1] = Math.acos(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
      this.escribirPila();
     }
     else if(this.radianes)
     {
       
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.acos(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
       
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.acos(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
 }
 arcotangente(){
    if(this.pila.length>=1)
    {
     if(this.grados)
     {
      this.pila[this.pila.length-1] = Math.atan(Number(this.pila[this.pila.length-1]) * (Math.PI / 180)) ;
      this.escribirPila();
     }
     else if(this.radianes)
     {
       //Pasamos de grados a radianes
       this.pila[this.pila.length-1] = Math.atan(Number(this.pila[this.pila.length-1]));
       this.escribirPila();
     }
     else if(this.gradianes)
     {
      
       //Pasamos de grados a gradianes
       this.pila[this.pila.length-1] = Math.atan(Number(this.pila[this.pila.length-1]) * (Math.PI / 200));
       this.escribirPila();
     }
    }
 }
 
       cuadrado(){
       if(this.pila.length>=1)
       { 
         this.pila[this.pila.length-1] = Math.pow(Number(this.pila[this.pila.length-1]),2);
         this.escribirPila();
       }
       }
       cubo(){
       if(this.pila.length>=1)
       { 
          this.pila[this.pila.length-1] = Math.pow(Number(this.pila[this.pila.length-1]),3);
          this.escribirPila();
       }
       }
       raizcuadrada(){
          if(this.pila.length>=1)
       { 
         this.pila[this.pila.length-1] = Math.sqrt(Number(this.pila[this.pila.length-1]));
         this.escribirPila();
       }
       }
       raizcubica(){
       if(this.pila.length>=1)
       { 
         this.pila[this.pila.length-1] = Math.cbrt(Number(this.pila[this.pila.length-1]));
         this.escribirPila();
       }
       }
       exponencial(){
          if(this.pila.length>=2)
          {
            this.pila[this.pila.length-2] = Math.pow(Number(this.pila[this.pila.length-2]),Number(this.pila[this.pila.length-1]));
            this.desapilar();
            this.escribirPila();
            
          }
         }
       logaritmo(){
       if(this.pila.length>=1)
       { 
         this.pila[this.pila.length-1] = Math.log10(Number(this.pila[this.pila.length-1]));
          this.escribirPila();
       }
       }
       logaritmoneperiano(){
          if(this.pila.length>=1)
       { 
         this.pila[this.pila.length-1] = Math.log(Number(this.pila[this.pila.length-1]));
          this.escribirPila();
       }
       }
 
       factorial(){
          if(this.pila.length>=1)
          { 
            this.pila[this.pila.length-1] = this.correFactorial(Number(this.pila[this.pila.length-1]));
             this.escribirPila();
          }
       }
 
       correFactorial(n){
          if (n < 0) return;
          if (n < 2) return 1;
          return n * factorial(n - 1);
       }
      
      
      
 
     

     escuchar(){
     document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if(keyName == 'Enter')
           {
              calc.Enter();
           }
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

   addEvents(){
      document.querySelector('form input[name="valorTrigonometrico"]').on('click touchstart', this.cambiarValorTrigonometrico());
      document.querySelector('form input[name="e"]').on('click touchstart', this.e());
      document.querySelector('form input[name="pi"]').on('click touchstart', this.pi());
      document.querySelector('form input[name="siete"]').on('click touchstart', this.digitos(7));
      document.querySelector('form input[name="ocho"]').on('click touchstart', this.digitos(8));
      document.querySelector('form input[name="nueve"]').on('click touchstart', this.digitos(9));
      document.querySelector('form input[name="division"]').on('click touchstart', this.division());
      document.querySelector('form input[name="multiplicacion"]').on('click touchstart', this.multiplicacion());
      document.querySelector('form input[name="resta"]').on('click touchstart', this.resta());
      document.querySelector('form input[name="suma"]').on('click touchstart', this.suma());
      document.querySelector('form input[name="tangente"]').on('click touchstart', this.tangente());
      document.querySelector('form input[name="cuatro"]').on('click touchstart', this.digitos(4));
      document.querySelector('form input[name="cinco"]').on('click touchstart', this.digitos(5));
      document.querySelector('form input[name="seis"]').on('click touchstart', this.digitos(6));
      document.querySelector('form input[name="arcoseno"]').on('click touchstart', this.arcoseno());
      document.querySelector('form input[name="arcocoseno"]').on('click touchstart', this.arcocoseno());
      document.querySelector('form input[name="Enter"]').on('click touchstart', this.Enter());
      document.querySelector('form input[name="seno"]').on('click touchstart', this.seno());
      document.querySelector('form input[name="exponencial"]').on('click touchstart', this.exponencial());
      document.querySelector('form input[name="uno"]').on('click touchstart', this.digitos(1));
      document.querySelector('form input[name="dos"]').on('click touchstart', this.digitos(2));
      document.querySelector('form input[name="tres"]').on('click touchstart', this.digitos(3));
      document.querySelector('form input[name="coseno"]').on('click touchstart', this.coseno());
      document.querySelector('form input[name="cero"]').on('click touchstart', this.digitos(0));
      document.querySelector('form input[name="punto"]').on('click touchstart', this.punto());
      document.querySelector('form input[name="borrar"]').on('click touchstart', this.borrar());
      document.querySelector('form input[name="arcotangente"]').on('click touchstart', this.arcotangente());
      document.querySelector('form input[name="cuadrado"]').on('click touchstart', this.cuadrado());
      document.querySelector('form input[name="cubo"]').on('click touchstart', this.cubo());
      document.querySelector('form input[name="raizcuadrada"]').on('click touchstart', this.raizcuadrada());
      document.querySelector('form input[name="raizcubica"]').on('click touchstart', this.raizcubica());
      document.querySelector('form input[name="logaritmo"]').on('click touchstart', this.logaritmo());
      document.querySelector('form input[name="logaritmoneperiano"]').on('click touchstart', this.logaritmoneperiano());
      document.querySelector('form input[name="factorial"]').on('click touchstart', this.factorial());
   }
 }


  
  

  

 var calc = new Calculadora("", false, false, true);