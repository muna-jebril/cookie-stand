'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var shops=[];
function Shop(name,min,max,avg,arr)
{
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.sum=0;
    this.arr=[];
    shops.push(this);
    console.log("shops array",shops);

}
Shop.prototype.randomValueFunction= function(min,max,avg,sum)
{
for(var i=0;i<hours.length;i++)
{
    var random = Math.floor(Math.random() * (this.max - this.min)+1)
    var result = random * this.avg;
           this.sum=Math.ceil(this.sum+result);
                this.arr.push(Math.floor(result));
                
            }
            return random;
}

Shop.prototype.render=function()
{
var cont=document.getElementById('cookies');
var header=document.createElement("header");
cont.appendChild(header);



function makingHeader()
{
    var header=document.createElement("header");
cont.appendChild(header);
var firstRow=document.createElement("tr");
cont.appendChild(firstRow);
for(var count=0;count <hours.length;count++)
{
    var th1=document.createElement("th");
    th1.appendChild(firstRow);
    th1.textContent=this.hours[i];

}}







var main=document.createElement("main");
cont.appendChild(main);





var footer=document.createElement("footer");
cont.appendChild(footer);

}
var Seattle= new Shop("Seattle",23,65,6.3);
var Tokyo= new Shop("Tokyo",3,24,1.2);
var Dubai= new Shop("Dubia",11,38,3.7);
var Paris= new Shop("Paris",20,38,2.3);
var Lima= new Shop("lima",2,65,16,4.6);
console.log("lima",Lima);
for(var t=0;t<shops.length;t++)
{
shops[t].randomValueFunction(this.min,this.max,this.avg);
shops[t].render();
}
function makingHeader()
{
    var header=document.createElement("header");
cont.appendChild(header);
var firstRow=document.createElement("tr");
cont.appendChild(firstRow);
for(var count=0;count <hours.length;count++)
{
    var th1=document.createElement("th");
    th1.appendChild(firstRow);
    th1.textContent=this.hours[i];

}}

// render:function(){
//     // console.log("cont",cont);
//     var cont = document.getElementById('cookies');
//     var h2 =document.createElement('h2');
//     console.log(h2);
//     cont.appendChild(h2);
//     h2.textContent=this.name;
//     var h3=document.createElement('h3');    
//     cont.appendChild(h3);
//   //  h3.textContent= this.name;
//     console.log("h3",h3);
// console.log(cont);
//     var ul = document.createElement('ul');
//     console.log(ul);
//     cont.appendChild(ul);
//   //  cont.appendChild(ul);
//     for(var i =0; i<hours.length ; i++) {
//         var li = document.createElement('li');
//       ul.appendChild(li);
//         li.textContent =`${hours[i]}:${arr[i]} cookies`;
//     console.log(li);
//     }
//     var li1 = document.createElement('li');
//     ul.appendChild(li1);

//     li1.textContent =`total ${this.sum} cookies`;
// }
// }
// // Seattle.randomValues();
// // Seattle.render();
// var Tokyo = {
//     name:'Tokyoe',
//     max: 24,
//     min: 3,
//     avg: 1.2,
//     sum2:0,
//     randomValues: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var random = Math.floor(Math.random() * (this.max - this.min)+1 +this.min)
//             var result1 = random * this.avg;
//             console.log("res",result1);
// //console.log(random);
//        this.sum2=Math.ceil(this.sum2+result1);
// console.log(this.sum2);
//             arr2.push(Math.floor(result1));
            
//         }
//         console.log("res",arr);
//         return random;
//     },
// render:function(){
//     // console.log("cont",cont);
//     var cont = document.getElementById('cookies');
//     var h2 =document.createElement('h2');
//     console.log(h2);
//     cont.appendChild(h2);
//   //  h2.textContent='tokyo';
//     var h3=document.createElement('h3');    
//     cont.appendChild(h3);
//     h3.textContent= this.name;
//     console.log("h3",h3);
// console.log(cont);
//     var ul = document.createElement('ul');
//     console.log(ul);
//     cont.appendChild(ul);
//   //  cont.appendChild(ul);
//     for(var i =0; i<hours.length ; i++) {
//         var li = document.createElement('li');
//       ul.appendChild(li);
//         li.textContent =`${hours[i]}:${arr2[i]} cookies`;
//     console.log(li);
//     }
//     var li1 = document.createElement('li');
//     ul.appendChild(li1);

//     li1.textContent =`total ${this.sum2} cookies`;
// }
// }
// var Dubai = {
//     name:'Dubai',
//     max: 38,
//     min: 11,
//     avg: 3.7,
//     sum2:0,
//     randomValues: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var random2 = Math.floor(Math.random() * (this.max - this.min)+this.min)
//             var result2 = random2 * this.avg;
//             console.log("res",result2);
// //console.log(random);
//        this.sum2=Math.ceil(this.sum2+result2);
// console.log(this.sum2);
//             arr3.push(Math.floor(result2));
            
//         }
//         console.log("res",arr3);
//         return random2;
//     },
// render:function(){
//     // console.log("cont",cont);
//     var cont = document.getElementById('cookies');
//     var h2 =document.createElement('h2');
//     console.log(h2);
//     cont.appendChild(h2);
//     // h2.textContent='Seattle';
//     var h3=document.createElement('h3');    
//     cont.appendChild(h3);
//     h3.textContent= this.name;
//     console.log("h3",h3);
// console.log(cont);
//     var ul = document.createElement('ul');
//     console.log(ul);
//     cont.appendChild(ul);
//   //  cont.appendChild(ul);
//     for(var i =0; i<hours.length ; i++) {
//         var li = document.createElement('li');
//       ul.appendChild(li);
//         li.textContent =`${hours[i]}:${arr3[i]} cookies`;
//     console.log(li);
//     }
//     var li1 = document.createElement('li');
//     ul.appendChild(li1);

//     li1.textContent =`total ${this.sum2} cookies`;
// }
// }
// var Paris = {
//     name:'Paris',
//     max: 38,
//     min: 20,
//     avg: 2.3,
//     sum:0,

//     randomValues: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var random = Math.floor(Math.random() * (this.max - this.min)+this.min)
//             var result = random * this.avg;
//             console.log("res",result);
//             //console.log(random);
//        this.sum=Math.ceil(this.sum+result);
//        console.log(this.sum);
//        arr5.push(Math.floor(result));
            
//     }
//     console.log("res",this.arr5);
//     return random;
//     },
//     render:function(){
//         // console.log("cont",cont);
//         var cont = document.getElementById('cookies');
//         var h2 =document.createElement('h2');
//         console.log(h2);
//         cont.appendChild(h2);
    
//     var h3=document.createElement('h3');    
//     cont.appendChild(h3);
//     h3.textContent= this.name;
//     console.log("h3",h3);
// console.log(cont);
// var ul = document.createElement('ul');
// // console.log(ul);
// cont.appendChild(ul);
// //  cont.appendChild(ul);
//     for(var i =0; i<hours.length ; i++) {
//         var li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent =`${hours[i]}:${arr5[i]} cookies`;
//     console.log(li);
// }
// var li1 = document.createElement('li');
// ul.appendChild(li1);

//     li1.textContent =`total ${this.sum} cookies`;
// }
// }

// var Lima = {
//     name:'Lima',
//     max: 16,
//     min: 2,
//     avg: 4.6,
//     sum4:0,
//     randomValues: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var random4 = Math.floor(Math.random() * (this.max - this.min)+this.min)
//             var result4 = random4 * this.avg;
//             console.log("res",result4);
//             //console.log(random);
//        this.sum4=Math.ceil(this.sum4+result4);
// console.log(this.sum4);
//             arr4.push(Math.floor(result4));
            
//         }
//         console.log("res",arr);
//         return random4;
//     },
//     render:function(){
//     // console.log("cont",cont);
//     var cont = document.getElementById('cookies');
//     var h2 =document.createElement('h2');
//     console.log(h2);
//     cont.appendChild(h2);

//     var h3=document.createElement('h3');    
//     cont.appendChild(h3);
//     h3.textContent= this.name;
//     console.log("h3",h3);
//     console.log(cont);
//     var ul = document.createElement('ul');
//     console.log(ul);
//     cont.appendChild(ul);
//     //  cont.appendChild(ul);
//   for(var i =0; i<hours.length ; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent =`${hours[i]}:${arr4[i]} cookies`;
//       console.log(li);
//     }
//     var li1 = document.createElement('li');
//     ul.appendChild(li1);
    
//     li1.textContent =`total ${this.sum4} cookies`;
// }
// }

// Seattle.randomValues();
// Seattle.render();

// Tokyo.randomValues();
// Tokyo.render();

// Dubai.randomValues();
// Dubai.render();



// Paris.randomValues();
// Paris.render();


// Lima.randomValues();
// Lima.render();