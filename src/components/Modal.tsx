import Image from "next/image";
import { ArtworkItem } from "@/data/artworkData";

interface ModalProps {
  artwork: ArtworkItem | null;
  onClose: () => void;
}

const Modal = ({ artwork, onClose }: ModalProps) => {
  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-background rounded-2xl overflow-hidden">
          <div className="relative w-full h-[80vh]">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          <div className="p-4 bg-accent shadow-xl drop-shadow-2xl border-t-2 border-foreground/10">
            <h2 className="text-2xl font-bold">{artwork.title}</h2>
            <p className="text-gray-600">{artwork.description}</p>
            <p className="text-gray-600">Size: {artwork.size}</p>
          </div>
          <button
            className="absolute drop-shadow-md top-4 right-4 bg-background rounded-full p-2"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
