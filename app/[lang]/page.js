import { getDictionary } from "./dictionaries";

const LandingPage = async ({ params }) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <h1>Hello World {dictionary?.uploadedOn}</h1>
    </>
  );
};

export default LandingPage;
