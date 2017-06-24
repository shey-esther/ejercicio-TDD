function Rectangulo(base,altura){
  this.base = base;
  this.altura = altura;
  this.area = function(){
    return (this.base * this.altura);
  }
}
var rectangulo1 = new Rectangulo(6,10);
console.log(rectangulo1.area());
