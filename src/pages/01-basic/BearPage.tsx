import Bears from './Bears';
import BlackBears from './BlackBears';
import PandasBears from './PandasBears';
import PolarBears from './PolarsBears';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
       <BlackBears />
       <PolarBears />
       <PandasBears />

       <Bears />
      </div>
    </>
  );
};