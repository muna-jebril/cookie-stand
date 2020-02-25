'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var shops=[];
var cont=document.getElementById('cookies');
var header=document.createElement('header');
cont.appendChild(header);
var main=document.createElement('main');
cont.appendChild(main);
var footer=document.createElement('footer');
cont.appendChild(footer);
var table=document.createElement('table');
main.appendChild(table);
var sum=0;
function Shop(name,min,max,avg)
{
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.arr=[];
    shops.push(this);
    console.log("shops array",shops);
    // console.log("sum",this.sum);

}
Shop.prototype.randomValueFunction= function()
{var result=0;
for(var i=0;i<hours.length;i++)
{
    var random = Math.floor(Math.random() * (this.max - this.min)+1)
     result = random * this.avg;
           sum=Math.ceil(sum+result);
        //    console.log("sum",sum);
                this.arr.push(Math.floor(result));
      //          console.log('aaaaaaa :', result);
                

                
            }
            console.log("sum",sum);

            return random,sum;

         
        
        }
// console.log('wwwwwwwwwwww' , sum);

Shop.prototype.render=function()
{


}
// Shop.prototype.Sum=function()
// {var total=0;
// for(var k=0;k<hours.length;k++)
// {
// var total=0;
    
//     total=total+this.arr[k];
// }
// console.log("total",total);
// return total;
// }
var Seattle= new Shop("Seattle",23,65,6.3);
var Tokyo= new Shop("Tokyo",3,24,1.2);
var Dubai= new Shop("Dubia",11,38,3.7);
var Paris= new Shop("Paris",20,38,2.3);
var Lima= new Shop("lima",2,65,16,4.6);

for(var t=0;t<shops.length;t++)
{
shops[t].randomValueFunction(this.min,this.max,this.avg);
shops[t].render(); 
//shops[t].Sum();

}



function makingHeader()
{
 
  var firstRow=document.createElement('tr');
  table.appendChild(firstRow);
  var th1=document.createElement('th');
  firstRow.appendChild(th1);
  th1.textContent="";
  for(var count=0;count <hours.length;count++)
  {
    var th1=document.createElement('th');
    firstRow.appendChild(th1);
    th1.textContent=hours[count];
  //  console.log(hours[count]);
  }
var tot= document.createElement("th");
firstRow.appendChild(tot);
tot.textContent="Daily Location Total";
}
makingHeader();



function makingTable(sum){
var value=0;
  for(var i=0;i<shops.length;i++)
  { var firstRow= document.createElement("tr");
  table.appendChild(firstRow);
 // console.log(firstRow);
  var r1d1 =document.createElement('td');
    firstRow.appendChild(r1d1);
    r1d1.textContent=shops[i].name;
 //   console.log("r1d1",r1d1);
    var r1d3 =document.createElement('td');
    
for(var j=0;j<hours.length;j++)
{
     var r1d2 =document.createElement('td');
    firstRow.appendChild(r1d2);
    r1d2.textContent=shops[i].arr[j];
// value=shops[i].arr[j]
//       total=total+value;
//       console.log("t",total);
    // var r1d3 =document.createElement('td');
    // firstRow.appendChild(r1d3);
    // r1d2.textContent=shops[i].arr[j];
    // r1d2.textContent=total;

  //   console.log("j",j);
   // while(j==)
   // console.log("r1d2",r1d2);
}
var r1d2 =document.createElement('td');
firstRow.appendChild(r1d2);
r1d2.textContent=sum;
console.log(":ssss",sum);

// console.log("total",total);

//r1d2.textContent=d;

//     table.
//     h2.textContent=this.name;



// var r1d3 =document.createElement('td');
//   table.appendChild(r1d3);
//   r1d3.textContent=sum;
//   console.log("sum",shop[i].sum);
  }
  var r1d3 =document.createElement('td');
  table.appendChild(r1d3);
  r1d3.textContent=sum;
 // console.log("sum",shop[i].sum);
  
    }
makingTable(sum);



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