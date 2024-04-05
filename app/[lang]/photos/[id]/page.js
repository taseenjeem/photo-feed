import PhotoDetails from "@/components/page/landing-page/PhotoDetails";

const PhotoDetailsPage = ({ params }) => {
  return <PhotoDetails id={params.id} lang={params.lang} />;
};

export default PhotoDetailsPage;
