var pos = [[]];
function setup() {

for(var i =0;i<50;i++){
    pos[i]=[];
    for(var j = 0; j <2; j++){
    pos[i][j] = random(0,windowWidth);
    }
    pos[i][2] =random(0,Math.PI);
}
}
var speed = 0.75;
var lines = 8;
var d = 0;
function draw() {
createCanvas(windowWidth-1, windowHeight-1);
d = windowWidth/lines;
background(255);
stroke(50,220,100,100);
fill(50,220,100,100)
for(var i =0;i<pos.length;i++){
    ellipse(pos[i][0],pos[i][1], 5,5);
}
for(var i =0;i<pos.length;i++){
    pos[i][0]+=speed*sin(pos[i][2]);
    pos[i][1]+=speed*cos(pos[i][2]);
    if(pos[i][0]>windowWidth){
    pos[i][0]=0;
    }
    if(pos[i][1]>windowHeight){
    pos[i][1]=0;
    }
    if(pos[i][0]<0){
    pos[i][0]=windowWidth;
    }
    if(pos[i][1]<0){
    pos[i][1]=windowHeight;
    }
}
for(var i = 0; i<pos.length;i++){
    for(var j = 0; j< i;j++){
    if((Math.pow((pos[i][0]-pos[j][0]),2) + Math.pow((pos[i][1]-pos[j][1]),2))<(d*d)){
        line(pos[i][0],pos[i][1],pos[j][0],pos[j][1]);
    }
    }
}
}
function changeLines(){
    lines = (lines==4)*4+4;
}