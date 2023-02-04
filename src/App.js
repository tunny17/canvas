import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d')
    context.scale(2,2)
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    contextRef.current = context;
  }, [])

  const startDrawing = () => {

  }

  const finishDrawing = () => {

  }

  const draw = () => {

  }

  return (
    <div className="App">
      <canvas 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
