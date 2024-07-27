//キャンパスのリアルタイム通信？

import React, { useRef, useState } from 'react';
import { Box, Button, Input, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb} from '@chakra-ui/react';

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
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  }

  const Reset = () => {
    const ctx = getContext();
    ctx.clearRect(0, 0, width, height);
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
