import { Clinical } from "@/components/concepts/clinical";
import { Editorial } from "@/components/concepts/editorial";
import { Guided } from "@/components/concepts/guided";
import { ConceptSwitcher } from "@/components/site/concept-switcher";

export default function Home() {
  return (
    <ConceptSwitcher
      editorial={<Editorial />}
      guided={<Guided />}
      clinical={<Clinical />}
    />
  );
}
