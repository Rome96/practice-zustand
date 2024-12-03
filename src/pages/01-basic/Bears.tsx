import {useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores/bears/bears.store";

const Bears = () => {
  // El useShallow se encarga de analizar el estado y solo actualizar lo que ha cambiado, evitando re-renderizados innecesarios
  const bears = useBearStore(useShallow((state) => state.bears));
  // const bears = useBearStore((state) => state.bears);
  const doNothing = useBearStore((state) => state.doNothing);

  return (
    <WhiteCard>
      <h2>Osos</h2>
      <button onClick={doNothing}>Do Nothing</button>
      <p>{JSON.stringify(bears, null, 3)}</p>
    </WhiteCard>
  );
}

export default Bears