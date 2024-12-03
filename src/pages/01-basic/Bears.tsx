import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores/bears/bears.store";

const Bears = () => {
  // El useShallow se encarga de analizar el estado y solo actualizar lo que ha cambiado, evitando re-renderizados innecesarios
  const bears = useBearStore(useShallow((state) => state.bears));
  // const bears = useBearStore((state) => state.bears);
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <h2>Osos 🐻</h2>
      <button onClick={doNothing}>Do Nothing </button>
      <button className="mt-2" onClick={addBear}>
        Add bear
      </button>
      <button className="mt-2" onClick={clearBears}>
        Clear Bears 🧹
      </button>
      ➕ <p>{JSON.stringify(bears, null, 2)}</p>
    </WhiteCard>
  );
};

export default Bears;
