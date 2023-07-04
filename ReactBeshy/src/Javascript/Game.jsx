import Matter from 'matter-js';
import React, { useEffect } from 'react';


function Game() {
  useEffect(() => {
    // Create an engine
    const engine = Matter.Engine.create();

    // Create a renderer
    const render = Matter.Render.create({
      element: document.getElementById('main-container'),
      engine: engine,
      options:{
        width: 1600,
        height: 800,
        wireframes:false
     }
    });

    let ground = Matter.Bodies.rectangle(1200,500,300,20,{isStatic: true})

        // let boxA = Matter.Bodies.rectangle(400,200,80,80);  we can use Composite Stack INstead for stacking Elements in Huge AMounts 
        // let boxB = Matter.Bodies.rectangle(400,200,80,80);

        let mouse = Matter.Mouse.create(render.canvas)
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint:{
                render: {visible :false}
            }
        })
        render.mouse = mouse
        let ball = Matter.Bodies.circle(300,600,20);
        let sling = Matter.Constraint.create({
            pointA:{x:300, y:600},
            bodyB:ball,
            stiffness: 0.05

        })
        let stack = Matter.Composites.stack(1100,270,4,4,0,0, function(x,y){ // this creates a stack of octagons
          // return Matter.Bodies.rectangle(x,y,80,80); return Squares
          // let sides = Math.round(Matter.Common.random(2,8)); 
          return Matter.Bodies.polygon(x,y,/*sides, Matter.Common.random(20,50)*/8,30)
      })

      let firing = false;
      Matter.Events.on(mouseConstraint,'enddrag', function(e){
          if(e.body === ball) firing = true
      })


      Matter.Events.on(engine, 'afterUpdate', function(){
        if(firing && Math.abs(ball.position.x-300) < 20 && Math.abs(ball.position.y-600)< 20){
            ball = Matter.Bodies.circle(300,600,20)
            Matter.World.add(engine.world ,ball)
            sling.bodyB = ball;
            firing = false
        }
    })
    Matter.World.add(engine.world,[/*boxA, boxB,*/ stack, ground, mouseConstraint, ball, sling])
    // Run the engine
    Matter.Runner.run(engine);

    // Run the renderer
    Matter.Render.run(render);

  }, []);

  return <div id="main-container" />;
}

export default Game


