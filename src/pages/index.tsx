import Advantages from "@/ui/partials/index/_advantages";
import FrequentQuestions from "@/ui/partials/index/_frequent-questions";
import Presentation from "@/ui/partials/index/_presentation";
import { GetStaticProps } from "next";




export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Encontre uma diarista perto de você",

    },
  }
}

export default function Index() {
  return (
  <div>
   <Presentation/>
   <Advantages/>
   <FrequentQuestions/>
  </div>
  );
}
