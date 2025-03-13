import Button from "./Button";

export default function Image({ image, openModal }) {
  return (
    <div key={image.id} className="grid place-content-center">
      <p className="my-4 text-center text-xl font-semibold">
        photographer：{image.photographer}
      </p>
      <div className="h-[400px] w-[300px] overflow-hidden rounded-md shadow-xl">
        <img
          src={image.url}
          alt={image.keywords[0]}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          onClick={() => openModal(image)}
        />
      </div>
      <p className="mb-4 mt-6 text-center">
        Download Image
        <Button
          type="download"
          to={image.url.replace("/upload/", "/upload/fl_attachment/")}
          download="image.page"
        >
          Click!
        </Button>
      </p>
    </div>
  );
}
