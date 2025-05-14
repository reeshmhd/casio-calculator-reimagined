
import { Calculator } from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Casio FX-991ES Plus</h1>
      <Calculator />
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Scientific Calculator Simulator</p>
        <p className="mt-2">Use mouse clicks to operate the calculator</p>
      </div>
    </div>
  );
};

export default Index;
