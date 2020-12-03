class Level2{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity=255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        console.log(this.body.speed)
     if (this.body.speed<9){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,192,203)
      rect( 0, 0, this.width, this.height);
      pop();
     }
      else{
        World.remove(world,this.body)
        push();
        this.Visiblity=this.Visiblity-5
        tint(255,this.Visiblity)
        rect (this.body.position.x,this.body.position.y,0,0)
        pop();
      }
    }
 };
      
