class SlingShot {
    constructor(bodyX,pointB){
        var option ={
            bodyA:bodyX,
            pointB :pointB,
            stiffness:0.03,
            lenght:5
            
        }
        this.rope =Constraint.create (option)
        this.pointB=pointB
        World.add(world,this.rope)
    }
    attach(body){
     this.rope.bodyA=body
    }
    fly(){
       this.rope.bodyA=null 
    }
    display() {
        push();
        if (this.rope.bodyA){
     var pointA= this.rope.bodyA.position
     var pointB=this.pointB
     strokeWeight(4);
     stroke(65,222,207)
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     pop();
    }
    }    
}
