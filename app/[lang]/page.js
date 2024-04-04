import PhotoList from "@/components/page/landing-page/PhotoList";

const LandingPage = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
};

export default LandingPage;
