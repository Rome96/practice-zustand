import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores/bears/bears.store";

const PandasBears = () => {
  const pandasBears = useBearStore((state) => state.pandasBears);
  const increasePandasBears = useBearStore((state) => state.increasePandasBears);
  const decreasePandasBears = useBearStore((state) => state.decreasePandasBears);

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandasBears(1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandasBears} </span>
        <button onClick={() => decreasePandasBears(1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export default PandasBears;