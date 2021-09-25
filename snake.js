console.log("a message you'd like to see")
let snek = 50

function setup (){
    createCanvas(400,400);
}

function draw (){
    background('indigo');
    
    stroke('red');

    snek = snek + 1
    
    fill('cyan');
    ellipse(snek,snek,80,80);
    
    fill(0,255,0,124);
    ellipse(100,100,snek,snek);
}

