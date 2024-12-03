import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores/bears/bears.store";

const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);
  const decreasePolarBears = useBearStore((state) => state.decreasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => decreasePolarBears(1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

export default PolarBears;