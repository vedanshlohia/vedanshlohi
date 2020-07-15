var database;
var form;
var game;
var points ;
var peopleCount=0;



function setup() {
  createCanvas(1500,720);
  database = firebase.database();
  form = new Form();
 

}

function draw() {
  background("grey");  
  form.display();
}