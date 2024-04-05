import Modal from "@/components/global/Modal";
import PhotoDetails from "@/components/page/landing-page/PhotoDetails";

const InterceptingPhotoDetailsPage = ({ params }) => {
  return (
    <>
      <Modal>
        <PhotoDetails id={params.id} lang={params.lang} />
      </Modal>
    </>
  );
};

export default InterceptingPhotoDetailsPage;
