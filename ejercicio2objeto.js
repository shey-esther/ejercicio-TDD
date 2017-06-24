function Nacimiento(nombre,dia,mes,anio){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
  this.edadNacimiento = function(){

fecha_hoy = new Date();
ahora_anio = fecha_hoy.getYear();
ahora_mes = fecha_hoy.getMonth();
ahora_dia = fecha_hoy.getDate();
var edad = (ahora_anio + 1900) - this.anio;

    if ( ahora_mes < (this.mes - 1)){
      edad--;
    }
    if (((this.mes - 1) == ahora_mes) && (ahora_dia < this.dia)){
      edad--;
    }
    if (edad > 1900){
        edad -= 1900;
    }
    return edad;
  }
}
var nacimiento1 = new Nacimiento("so",23,8,1991);
console.log(nacimiento1.edadNacimiento());
