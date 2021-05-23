class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction':3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 150;
      World.add(world, this.body);
    };
    display(){
       var pos =this.body.position;
        var angle = this.body.angle;
         push();
          translate(pos.x, pos.y);
           rotate(angle);
            rectMode(CENTER); 
            strokeWeight(4);
             stroke("brown");
              fill("brown"); 
              rect(0, 0, this.width, this.height);
               pop();
 };
  }