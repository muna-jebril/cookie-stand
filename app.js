'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shops = [];
var cont = document.getElementById('cookies');
var header = document.createElement('header');
cont.appendChild(header);
var main = document.createElement('main');
cont.appendChild(main);
var footer = document.createElement('footer');
cont.appendChild(footer);
var table = document.createElement('table');
main.appendChild(table);
var total = 0;
var res = 0;
// var firstRow1 = document.createElement("tr");
//var sum = 0;
function Shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.arr = [];
    this.sum = 0;
    shops.push(this);
    //  console.log("shops array", shops);

}
Shop.prototype.randomValueFunction = function () {
    var result = 0;
    for (var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.max - this.min) + 1)
        result = random * this.avg;
        this.sum = Math.ceil(this.sum + result);
        this.arr.push(Math.floor(result));



    }

    return random;



};

Shop.prototype.render = function () {


};

var Seattle = new Shop("Seattle", 23, 65, 6.3);
var Tokyo = new Shop("Tokyo", 3, 24, 1.2);
var Dubai = new Shop("Dubia", 11, 38, 3.7);
var Paris = new Shop("Paris", 20, 38, 2.3);
var Lima = new Shop("lima", 2, 16, 4.6);

for (var t = 0; t < shops.length; t++) {
    shops[t].randomValueFunction();
    shops[t].render();

}



function makingHeader() {

    var firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    var th1 = document.createElement('th');
    firstRow.appendChild(th1);
    th1.textContent = "";
    for (var count = 0; count < hours.length; count++) {
        var th1 = document.createElement('th');
        firstRow.appendChild(th1);
        th1.textContent = hours[count];
    }
    var tot = document.createElement("th");
    firstRow.appendChild(tot);
    tot.textContent = "Daily Location Total";
}
makingHeader();



function makingTable() {
    //var value = 0;
    for (var i = 0; i < shops.length; i++) {
        var firstRow1 = document.createElement("tr");
        table.appendChild(firstRow1);
        var r1d1 = document.createElement('td');
        firstRow1.appendChild(r1d1);
        r1d1.textContent = shops[i].name;
        var r1d3 = document.createElement('td');

        for (var j = 0; j < hours.length; j++) {
            var r1d2 = document.createElement('td');
            firstRow1.appendChild(r1d2);
            r1d2.textContent = shops[i].arr[j];


        }
        var r1d2 = document.createElement('td');
        firstRow1.appendChild(r1d2);
        r1d2.textContent = shops[i].sum;


    }
    // var r1d3 = document.createElement('td');
    // table.appendChild(r1d3);
    // r1d3.textContent = shops[i].sum;

}
makingTable();

function makingFooter() {
    // var total = 0;
    // var res = 0;
    var lastRow = document.createElement('tr');
    table.appendChild(lastRow);
    var td1 = document.createElement('td');
    lastRow.appendChild(td1);
    td1.textContent = "Total";
    for (var count = 0; count < hours.length; count++) {
        var td1 = document.createElement('td');
        lastRow.appendChild(td1);
        total = 0;
        for (var f = 0; f < shops.length; f++) {
            total = total + shops[f].arr[count];

        }
        td1.textContent = total;
        res = total + res;
        console.log("rr", res);
    }
    // var Row=document.createElement("tr");
    //     table.appendChild(Row);
    var res1 = document.createElement('td');
    lastRow.appendChild(res1);
    res1.textContent = res;

}
// Shop.prototype.makingNewRow = function () {
//     var Row = document.createElement("tr");
//     table.appendChild(Row);
//     var td = document.createElement("td");
//     Row.appendChild(td);
//     td.textContent = this.name;
//     console.log("names", td);
//     for (var i = 0; i < hours.length; i++) {
//         res = 0;
//         // /total=0;
//         var tData = document.createElement("td");
//         Row.appendChild(tData);
//         tData.textContent = this.arr[i];
//         //    console.log("aaa",this.arr[i]);
//         total = total + this.arr[i];
//         res = total + res;
//         console.log("result", res);
//     }
    total = 0;
    // var totalNewLocation = document.createElement("td");
    // Row.appendChild(totalNewLocation);
    // totalNewLocation.textContent = res;
    // console.log("total", totalNewLocation);



var myForm = document.getElementById("shopsLocation");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = event.target.name.value;
    console.log("fff", name);
    var min = event.target.min.value;
    console.log(min);
    var max = event.target.max.value;
    console.log(max);
    var avg = (event.target.avg.value);
    console.log(avg);
    var shopsObj = new Shop(name, min, max, avg);
    shops.push(this.shopsObj);
    // shopsObj.randomValueFunction(4, 5);
    console.log("ggg", shopsObj);
    cont.innerHTML="";
    shopsObj.randomValueFunction();
    makingTable(shops);
    makingFooter();
console.log("ddffd",shops)

}
)
function validate() {
    for (var i = 0; i < 2; i++) {
        if (document.myForm.min.value > document.myForm.max.value)
         {
            alert("worng the min should me less than the max");
            return false;
   
            }
        else 
            return true;
    }
    
        var decimal= /([0-9])[\.][\d+]/;  
        if(document.myForm.avg.value.match(decimal)) 
        { 
        alert('Correct, try another...')
        console.log(decimal,"ggggg");
        return true;
        }
        else
        { 
        alert('Wrong...!plz enter a float number ')
        return false;
        }


}


    // var valid = parseFloat(document.myForm.avg.value);

    // if (!valid) {
    //     alert("Please enter valid float number.");
    //     form.txtFloat.focus();
    //     return false;
    // }
    // else
    //     return true;}

    //     var decimal= /([0-9])\.\d+/;  
    // if(document.myForm.avg.value.match(decimal)) 
    // { 
    // alert('Correct, try another...')
    // return true;
    // }
    // else
    // { 
    // alert('Wrong...!plz enter a float number ')
    // return false;
    // }







