function Constructor(nombre,edad,pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.arry = function(){
    return " hola soy " +  nombre  +  " tengo "  +  edad  +  " años y me gusta "  +  pasatiempo;
  }

}
var constructor1 = new Constructor("shey", 20, "jugar");
console.log(constructor1.arry());
