import React, { useRef, useState } from 'react';

interface IProps {
  width: number;
  height: number;
}

interface IRect {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const Canvas: React.FC<IProps> = (props) => {
  const { width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lineWidth, setLineWidth] = useState<number>(10);
  const [strokeStyle, setStrokeStyle] = useState<string>('#000000');
  let mouseX: number | null = null;
  let mouseY: number | null = null;

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      throw new Error('Canvas not found');
    }
    return canvas.getContext('2d')!;
  };

  const OnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) { return; }
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const rect: IRect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    Draw(x, y);
  }

  const OnMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.buttons !== 1) { return; }
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const rect: IRect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    Draw(x, y);
  }

  const DrawEnd = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mouseX = null;
    mouseY = null;
    if (e.buttons !== 1) { return; }
  }

  const Draw = (x: number, y: number) => {
    const ctx = getContext();
    ctx.beginPath();
    ctx.globalAlpha = 1.0;
    if (mouseX === null || mouseY === null) {
      ctx.moveTo(x, y);
    } else {
      ctx.moveTo(mouseX, mouseY);
    }
    ctx.lineTo(x, y);
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth; // ペンの太さ
    ctx.strokeStyle = strokeStyle; // ペンの色
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  }

  const Reset = () => {
    const ctx = getContext();
    ctx.clearRect(0, 0, width, height);
  }

  return (
    <section>
      <div>
        <canvas 
          onMouseDown={OnClick}
          onMouseMove={OnMove}
          onMouseUp={DrawEnd}
          onMouseOut={DrawEnd}
          ref={canvasRef}
          width={width}
          height={height}
        />
      </div>
      <div>
        <button onClick={Reset}>リセット</button>
      </div>
      <div>
        <label>
          ペンの太さ:
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={lineWidth} 
            onChange={(e) => setLineWidth(Number(e.target.value))}
          />
        </label>
        <label>
          ペンの色:
          <input 
            type="color" 
            value={strokeStyle} 
            onChange={(e) => setStrokeStyle(e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

export default Canvas;
