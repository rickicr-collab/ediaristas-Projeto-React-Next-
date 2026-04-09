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
   <h1>Home</h1>
  </div>
  );
}
