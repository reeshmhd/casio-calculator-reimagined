
import { Calculator } from '@/components/Calculator';
import { FunctionPlotter } from '@/components/FunctionPlotter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Windows Calculator</h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-start">
        <Calculator />
        <FunctionPlotter />
      </div>
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Calculator Simulator</p>
        <p className="mt-2">Use mouse clicks to operate the calculator</p>
      </div>
    </div>
  );
};

export default Index;
