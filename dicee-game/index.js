///IMAGE 1
// Returns a random integer from 0 to 6:
var randomNumber1 =Math.floor(Math.random()*6+1); 

//random image
var randomImage1 = 'dice' + randomNumber1 + '.png';

//random src
var randomImageSource1 = "images/" + randomImage1;


//image 1
var imageChanges1 = document.getElementsByTagName('img')[0];
imageChanges1.setAttribute('src',randomImageSource1);



///IMAGE 2
// Returns a random integer from 0 to 6:
var randomNumber2 =Math.floor(Math.random()*6+1); 

//random image
var randomImage2 = 'dice' + randomNumber2 + '.png';

//random src
var randomImageSource2 = "images/" + randomImage2;


//image 2
var imageChanges2 = document.getElementsByTagName('img')[1];
imageChanges2.setAttribute('src',randomImageSource2);


//WINNER OR DRAW

var text = document.querySelector('.text');

if (randomNumber1 > randomNumber2) {
    text.innerHTML='Wins Player 1';
} else if (randomNumber1 < randomNumber2 ) {
    text.innerHTML='Wins Player 2';
}else {
    text.innerHTML="It's a Draw";
}

