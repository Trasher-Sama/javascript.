//esto es un comentario//

//1er ejercicio//
function a(){
    return 35;
}
console.log(a())

//el valor que imprime es 35//


//2do ejercicio//
function a(){
    return 4;
}
console.log(a()+a());
//el valor que imprime es 8//


//3er ejercicio//
function a(b){
    return b;
}
console.log(a(2)+a(4));
//el valor que imprime es 6//


//4to ejercicio//
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//console.log(b)=3
  console.log(a(3))=9//


//5to ejercicio//
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
//el valor que imprime es 40//


//6to ejercicio//
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//al b valer 15 no cumple la condicion, por lo cual solo imprime 4//


//7mo ejercicio//
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//solo imprime 30 en el seg. console.log//


//8vo ejercicio//
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//el valor de i que regresa no interviene en la impresio.
los valore son 3 y 4 respectivamente//


//9no ejercicio//
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//imprime 2,5,8 y 11, en ese orden//


//10mo ejercicio//
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//en la funcion= 0,1,2,3,4,5,6,7,8,9,0.
console.log(a(0,10))= 0,1,2,3,4,5,6,7,8,9,0//


//11er ejercicio//
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//nunca se llama a la funcion, no imprime ningun valor//


//12do ejercicio//
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//sucede lo mismo que en el anterior, no llama a la funcion//


//13er ejercicio//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//imprime 10 solamente como valor de z, ya que no llama a la funcion//


//14to ejercicio//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//imprime 15 primero en la funcion.
y luego 10 en console.log(z)//


//15to ejercicio//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//imprime 15 dentro de la funcion.
al finalizar esta cambia el valor por 15 a z//