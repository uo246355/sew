
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
 }


class CalculadoraDietetica extends Calculadora{
   constructor (pantalla, kcal, azucar, grasa){
         super(pantalla, false, false, true);
         this.kcal = kcal;
         this.azucar = azucar;
         this.grasa = grasa;

         //this.pila = new Array();
   }

   cambiarValorCalorico(){
      if(this.kcal)
      {
       this.kcal = false;
       this.azucar = false;
       this.grasa = true;
       document.querySelector("form input[name='valorTrigonometrico']").value = "FAT";
      }
      else if(this.azucar)
      {
       this.kcal = true;
       this.azucar = false;
       this.grasa = false;
       document.querySelector("form input[name='valorTrigonometrico']").value = "Kcal";
      }
      else if(this.grasa)
      {
       this.kcal = false;
       this.azucar = true;
       this.grasa = false;
       document.querySelector("form input[name='valorTrigonometrico']").value = "HC";
      }
   }
   imc(){
      if(this.pila.length>=2)
      {
         this.pila[this.pila.length-2] = Number(this.pila[this.pila.length-2]) / Math.pow((Number(this.pila[this.pila.length-1]) / 100),2);
         this.desapilar();
         this.escribirPila();
      }
   }

   pollo(){
      if(this.pila.length>=1)
    {
     if(this.kcal)
     {
        
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 2.39 ;
      this.escribirPila();
     }
     else if(this.grasa)
     {
       
       //Cuantos gramos son grasas
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.038 ;
       this.escribirPila();
     }
     else if(this.azucar)
     {
      
       //Cuantos gramos son hidratos
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0;
       this.escribirPila();
     }
    }
   }

   ternera(){
      if(this.pila.length>=1)
    {
     if(this.kcal)
     {
        
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 2.5 ;
      this.escribirPila();
     }
     else if(this.grasa)
     {
       
       //Cuantos gramos son grasas
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.03 ;
       this.escribirPila();
     }
     else if(this.azucar)
     {
      
       //Cuantos gramos son hidratos
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0;
       this.escribirPila();
     }
    }
   }

   arroz(){
      if(this.pila.length>=1)
    {
     if(this.kcal)
     {
        
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 1.3 ;
      this.escribirPila();
     }
     else if(this.grasa)
     {
       
       //Cuantos gramos son grasas
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.001 ;
       this.escribirPila();
     }
     else if(this.azucar)
     {
      
       //Cuantos gramos son hidratos
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 2.8;
       this.escribirPila();
     }
    }
   }

   pescado(){
      if(this.pila.length>=1)
    {
     if(this.kcal)
     {
        
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 2.06 ;
      this.escribirPila();
     }
     else if(this.grasa)
     {
       
       //Cuantos gramos son grasas
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.025 ;
       this.escribirPila();
     }
     else if(this.azucar)
     {
      
       //Cuantos gramos son hidratos
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0;
       this.escribirPila();
     }
    }
   }

   verdura(){
      if(this.pila.length>=1)
    {
     if(this.kcal)
     {
        
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.65 ;
      this.escribirPila();
     }
     else if(this.grasa)
     {
       
       //Cuantos gramos son grasas
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0 ;
       this.escribirPila();
     }
     else if(this.azucar)
     {
      
       //Cuantos gramos son hidratos
       this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 0.13;
       this.escribirPila();
     }
    }
   }

   proteinas(){
    if(this.pila.length>=1)
    {
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 4 ;
      this.escribirPila();
    }
   }

   grasas(){
   if(this.pila.length>=1)
    {
      this.pila[this.pila.length-1] = Number(this.pila[this.pila.length-1]) * 9 ;
      this.escribirPila();
    }
   }
}
var calc = new CalculadoraDietetica("", true, false, false);