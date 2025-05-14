
import React, { useState, useEffect } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

export const FunctionPlotter = () => {
  const [functionInput, setFunctionInput] = useState('x^2');
  const [plotData, setPlotData] = useState<{ x: number; y: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const evaluateFunction = (fnStr: string, x: number): number | null => {
    try {
      // Replace common functions with JavaScript equivalents
      const jsStr = fnStr.replace(/\^/g, '**')
                          .replace(/sin\(/g, 'Math.sin(')
                          .replace(/cos\(/g, 'Math.cos(')
                          .replace(/tan\(/g, 'Math.tan(')
                          .replace(/log\(/g, 'Math.log10(')
                          .replace(/ln\(/g, 'Math.log(')
                          .replace(/sqrt\(/g, 'Math.sqrt(')
                          .replace(/√/g, 'Math.sqrt')
                          .replace(/π/g, 'Math.PI')
                          .replace(/e/g, 'Math.E');
      
      // Create a function from the string
      const fn = new Function('x', `return ${jsStr}`);
      return fn(x);
    } catch (err) {
      console.error('Function evaluation error:', err);
      setError('Invalid function syntax');
      return null;
    }
  };

  const generatePlotData = () => {
    setError(null);
    try {
      // Generate 100 points from -10 to 10
      const points = [];
      for (let i = -10; i <= 10; i += 0.2) {
        const y = evaluateFunction(functionInput, i);
        if (y !== null && isFinite(y)) {
          points.push({ x: i, y });
        }
      }
      setPlotData(points);
    } catch (err) {
      console.error('Plot generation error:', err);
      setError('Failed to generate plot data');
    }
  };

  useEffect(() => {
    generatePlotData();
  }, []);

  const handlePlot = () => {
    generatePlotData();
  };

  const chartConfig = {
    function: {
      label: 'f(x)',
      color: '#3b82f6'
    }
  };

  return (
    <Card className="w-full max-w-[360px] mt-8">
      <CardHeader>
        <CardTitle className="text-lg">Function Plotter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="function-input" className="text-sm font-medium">
              Enter function f(x):
            </label>
            <Textarea
              id="function-input"
              value={functionInput}
              onChange={(e) => setFunctionInput(e.target.value)}
              className="h-16"
              placeholder="e.g., x^2, sin(x), 2*x+1"
            />
          </div>
          
          <Button onClick={handlePlot} className="w-full">
            Plot Function
          </Button>
          
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <div className="h-[200px] w-full bg-background rounded-md border">
            <ChartContainer config={chartConfig}>
              <LineChart data={plotData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="x" 
                  tickCount={5} 
                  domain={['dataMin', 'dataMax']}
                />
                <YAxis 
                  tickCount={5}
                  domain={['auto', 'auto']}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Line 
                  type="monotone" 
                  dataKey="y" 
                  name="function"
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>Supported operations: +, -, *, /, ^</p>
            <p>Functions: sin, cos, tan, log, ln, √</p>
            <p>Constants: π, e</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunctionPlotter;
