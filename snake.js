console.log("a message you'd like to see")
function setup (){
    createCanvas(400,400);
}

function draw (){
    background('indigo');
    
    stroke('red');
    
    fill('cyan');
    ellipse(50,50,80,80);
    noFill();
    ellipse(100,100,80,80);

}