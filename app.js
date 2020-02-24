var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var arr = [];
var Seattle = {
    name:Seattle,
    max: 65,
    min: 23,
    avg: 6.3,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random = Math.floor(Math.random() * (this.max - this.min)+1)
            var result = random * this.avg;
            console.log("res",result);
//console.log(random);
            arr.push(Math.floor(result));
        }
        console.log("res",arr);
        return random;
    },
render:function(){
    var container=document.getElementById('cookies');
    var art=document.createElement('article');
   // container.appendChild(art);
    var h3=document.createElement('h3');
    art.appendChild(h3);
    h3.textContent= this.name;
    var ul = document.createElement('ul');
    art.appendChild(ul);
    for(var i =0; i<this.hours.length ; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent =`${this.hours}:${this.arr} cookies`;
    }
}
}
Seattle.randomValues();
Seattle.render();

// randomValues: function (min, max) {
//     for (var i = 0; i < hours.length; i++) {
//         var random = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//         console.log("random", random);
//         var result = random * this.avg;
//         console.log("reslut", result);

//        //   arr.push(result);

//         //  console.log("arr",arr);
//         //    document.getElementById("demo").innerHTML = arr;
//        This.arr[i] = result;
//         //return (arr.values);
//         // var iterator =arr.values(); 
//         // return iterator;
//         // console.log("hh",Object.values(arr));
//         // return (Object.values(arr));
//         //  Array.isArray(arr);
//         //   for (var j=0;j<hours.length;j++)
//         //  {
//         //   console.log()
//     }
//     return arr;
// }




// var Tokyo = {
//     max: 24,
//     min: 3,
//     avg: 1.2,
// }
// var Dubai = {
//     max: 38,
//     min: 11,
//     avg: 3.7,
// }
// var Paris = {
//     max: 38,
//     min: 20,
//     avg: 2.3,
// }
// var Lima = {
//     max: 16,
//     min: 2,
//     avg: 4.6,
// }
//Seattle.randomValues();
//console.log(Seattle);

//Seattle.hoursrandom();