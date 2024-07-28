//キャンパスのリアルタイム通信？

import { Box, Button, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

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

interface IDrawData {
  x: number;
  y: number;
  prevX: number | null;
  prevY: number | null;
  lineWidth: number;
  strokeStyle: string;
}

const Canvas: React.FC<IProps> = (props) => {
  const { width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lineWidth, setLineWidth] = useState<number>(10);
  const [strokeStyle, setStrokeStyle] = useState<string>('#000000');
  const [ws, setWs] = useState<WebSocket | null>(null);
  let mouseX: number | null = null;
  let mouseY: number | null = null;

  useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.hostname}:3000/paint/draw`);
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    socket.onmessage = (event) => {
      const data: IDrawData = JSON.parse(event.data);
      drawFromServer(data);
    };

    return () => {
      socket.close();
    };
  }, []);

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
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();

     // サーバーに描画データを送信
     if (ws && ws.readyState === WebSocket.OPEN) {
      const drawData: IDrawData = {
        x,
        y,
        prevX: mouseX,
        prevY: mouseY,
        lineWidth,
        strokeStyle
      };
      ws.send(JSON.stringify(drawData));
    }

    mouseX = x;
    mouseY = y;
  }

  const drawFromServer = (data: IDrawData) => {
    const ctx = getContext();
    ctx.beginPath();
    ctx.globalAlpha = 1.0;
    if (data.prevX === null || data.prevY === null) {
      ctx.moveTo(data.x, data.y);
    } else {
      ctx.moveTo(data.prevX, data.prevY);
    }
    ctx.lineTo(data.x, data.y);
    ctx.lineCap = "round";
    ctx.lineWidth = data.lineWidth;
    ctx.strokeStyle = data.strokeStyle;
    ctx.stroke();
  }

  const Reset = () => {
    const ctx = getContext();
    ctx.clearRect(0, 0, width, height);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'reset' }));
    }
  }

  return (
    <Stack spacing={4} p={4}>
      <Box>
        <canvas 
          onMouseDown={OnClick}
          onMouseMove={OnMove}
          onMouseUp={DrawEnd}
          onMouseOut={DrawEnd}
          ref={canvasRef}
          width={width}
          height={height}
          style={{ border: '1px solid #ccc' }}
        />
      </Box>
      <Stack spacing={4}>
        <Button onClick={Reset} colorScheme="teal">リセット</Button>
        <Stack spacing={4}>
          <Box>
            <label>ペンの太さ:</label>
            <Slider 
              defaultValue={lineWidth} 
              min={1} 
              max={50} 
              onChange={(value) => setLineWidth(value)}
              colorScheme="teal"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box>
            <label>ペンの色:</label>
            <Input 
              type="color" 
              value={strokeStyle} 
              onChange={(e) => setStrokeStyle(e.target.value)} 
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Canvas;
