document.getElementById("calendar");
var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
var i = box.length
while (i != 1) {
i--;
let randomNumber = Math.floor(Math.random() * i);
var circle = document.createElement('div');
circle.id = 'circle'+box[randomNumber];
day= box[randomNumber];
box.splice(randomNumber, 1);
circle.className = "circle";

circle.innerHTML='<div onclick="myFunction('+day+')"><img src="imagesi/' + day + '.jpg" style="width=50px; display:none ;" id="toto" height="50px" >'+day+'</div>';
document.getElementById("calendar").appendChild(circle);

console.log(circle.id);

}
function getImage(day){
    var imgTxt="imagesi/";
    switch (day){
        
            case 1 : imgTxt+= "img1.jpg" ;
            break;
            case 2 : imgTxt+= "img2.jpg" ;
            break;
            case 3 : imgTxt+= "img3.jpg" ;
            break;
            case 4 : imgTxt+= "img4.jpg" ;
            break;
            case 5 : imgTxt+= "img5.jpg" ;
            break;
            case 6 : imgTxt+= "img6.jpg" ;
            break;
            case 1 : imgTxt+= "img7.jpg" ;
            break;
            case 2 : imgTxt+= "img8.jpg" ;
            break;
            case 3 : imgTxt+= "img9.jpg" ;
            break;
            case 4 : imgTxt+= "img10.jpg" ;
            break;
            case 5 : imgTxt+= "img11.jpg" ;
            break;
            case 6 : imgTxt+= "img12.jpg" ;
            break;
            case 1 : imgTxt+= "img13.jpg" ;
            break;
            case 2 : imgTxt+= "img14.jpg" ;
            break;
            case 3 : imgTxt+= "img15.jpg" ;
            break;
            case 4 : imgTxt+= "img16.jpg" ;
            break;
            case 5 : imgTxt+= "img17.jpg" ;
            break;
            case 6 : imgTxt+= "img18.jpg" ;
            break;
            case 1 : imgTxt+= "img19.jpg" ;
            break;
            case 2 : imgTxt+= "img20.jpg" ;
            break;
            case 3 : imgTxt+= "img21.jpg" ;
            break;
            case 4 : imgTxt+= "img22.jpg" ;
            break;
            case 5 : imgTxt+= "img23.jpg" ;
            break;
            case 6 : imgTxt+= "img24.jpg" ;
            break;
    }


function myFunction(day) {
    let today= new Date();
    newToday=today.toString();
    const theDay = newToday.split('');
    console.log(theDay);
    console.log(theDay[2]);

    if (day>theDay[2]){
        document.getElementById('circle'+day).innerHTML= 'Hep arret de tricher!';
        
    }
    else{
        document.getElementById('toto'+day+'').style.display ="block";
    }
}
}


