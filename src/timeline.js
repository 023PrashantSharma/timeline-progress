import logo from './logo.svg';
import './scss/app.scss'
import { render } from 'react-dom';
import { Stage, Konva, Layer, Rect, Text, Circle, Line, Shape, } from 'react-konva';
import { motion } from 'framer-motion';

function App() {



  return (
    <>
      <div className='main-body'>
        <div className='center-container'>
          <div className='child-container'>
            <Stage width={500} height={900}>
                <Layer>
                  <Shape
                    sceneFunc={(context, shape) => {
                      context.beginPath();
                      context.moveTo(200, 0);
                      context.lineTo(170, 0);
                      context.lineTo(170, 30);
                      context.quadraticCurveTo(170, 50, 140, 50);
                      context.lineTo(30, 50);
                      context.quadraticCurveTo(0, 50, 0, 80);
                      context.lineTo(0, 80);
                      context.lineTo(0, 120);
                      context.lineTo(30, 120);
                      context.lineTo(30, 100);
                      context.quadraticCurveTo(30, 80, 40, 80);
                      context.lineTo(140, 80);
                      context.quadraticCurveTo(200, 83, 200, 40);
                      context.closePath();
                      context.fillStrokeShape(shape);
                    }}
                    fill="gray"
                    strokeWidth={4}
                  />
                </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(0, 220);
                    context.lineTo(0, 140);
                    context.lineTo(30, 140);
                    context.lineTo(30, 200);
                    // context.quadraticCurveTo(30, 225, 80, 220);
                    context.lineTo(30, 220);
                    context.lineTo(80, 220);
                    context.lineTo(80, 250);
                    context.lineTo(80, 280);
                    context.lineTo(50, 280);
                    context.lineTo(50, 250);
                    context.lineTo(0, 250);

                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(10deg 100% 50%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={15} y={130} radius={20} fill="#4d4b4b" />
              </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(50, 300);
                    context.lineTo(80, 300);
                    context.lineTo(80, 330);
                    context.lineTo(240, 330);
                    context.lineTo(240, 390);
                    context.lineTo(210, 390);
                    context.lineTo(210, 360);
                    context.lineTo(50, 360);

                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(26deg 100% 51%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={65} y={290} radius={20} fill="#4d4b4b" />
              </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(210, 410);
                    context.lineTo(240, 410);
                    context.lineTo(240, 460);
                    context.lineTo(80, 460);
                    context.lineTo(80, 520);
                    context.lineTo(110, 520);
                    context.lineTo(110, 520);
                    context.lineTo(110, 490);
                    context.lineTo(240, 490);
                    context.lineTo(240, 460);
                    context.lineTo(210, 460);



                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(49deg 100% 50%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={225} y={400} radius={20} fill="#4d4b4b" />
              </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(80, 540);
                    context.lineTo(110, 540);
                    context.lineTo(110, 570);
                    context.lineTo(240, 570);
                    context.lineTo(240, 620);
                    context.lineTo(210, 620);
                    context.lineTo(210, 600);
                    context.lineTo(80, 600);

                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(67deg 99% 34%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={95} y={530} radius={20} fill="#4d4b4b" />
              </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(210, 640);
                    context.lineTo(240, 640);
                    context.lineTo(240, 680);
                    context.lineTo(150, 680);
                    context.lineTo(150, 720);
                    context.lineTo(120, 720);
                    context.lineTo(120, 650);
                    context.lineTo(210, 650);

                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(207deg 100% 50%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={225} y={630} radius={20} fill="#4d4b4b" />
              </Layer>
              <Layer>
                <Shape
                  sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(120, 740);
                    context.lineTo(150, 740);
                    context.lineTo(150, 790);
                    context.lineTo(500, 790);
                    context.lineTo(500, 870);
                    context.lineTo(470, 870);
                    context.lineTo(470, 820);
                    context.lineTo(120, 820);


                    context.closePath();
                    context.fillStrokeShape(shape);
                  }}
                  fill="hsl(328deg 99% 50%)"
                  strokeWidth={4}
                />
              </Layer>
              <Layer>
                <Circle x={135} y={730} radius={20} fill="#4d4b4b" />
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
