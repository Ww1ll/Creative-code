const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ]
};


// nao preciso mais visto que estou importando as 'libraries' de funções utiliarias
const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

// nao preciso mais visto que estou importando as 'libraries' de funções utiliarias

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);


    context.fillStyle = 'white';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = 45;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++){
        const slice = math.degToRad(360 / num);
        const angle = slice * i;

        x = cx + radius * Math.sin(angle);
        y = cy + radius * Math.cos(angle);

        context.save();
        context.translate(x, y);
        context.rotate(-angle);
        context.scale(random.range(0.1, 3), random.range(0.2, 0.6));

        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
        context.fill();
        context.restore();

        context.save();
        context.translate(cx, cy);
        context.rotate(- angle);

        context.lineWidth = random.range(5, 20);

        context.beginPath();
        context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
        
        const line = context.createLinearGradient(0, 0, width, height);

        line.addColorStop(0, '#F60B0B');
        line.addColorStop(0.3, '#E817A2');
        context.strokeStyle = line;
        context.stroke();
        context.restore();
    }
  };
};

canvasSketch(sketch, settings);
