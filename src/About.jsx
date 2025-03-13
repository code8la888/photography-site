import Button from "./components/Button";
export default function About() {
  return (
    <div className="grid h-full grid-cols-1 items-center justify-between gap-10 pb-8 pt-4 lg:grid-cols-2 lg:gap-20 lg:p-0">
      <div className="grid items-center justify-center">
        <img
          className="h-full max-h-[450px] w-auto object-contain lg:shadow-lg"
          src="https://res.cloudinary.com/ddmaqiu3h/image/upload/v1741767163/4_pafxcz.png"
          alt="logo"
        />
      </div>
      <div className="mx-auto grid max-w-lg items-center justify-center px-4 lg:px-0">
        <h2 className="text-center text-3xl font-bold">
          About wishyougoodlight
        </h2>
        <p className="mt-4 first-letter:text-3xl">
          Welcome to wishyougoodlight, a photography haven dedicated to
          capturing and sharing the beauty of light and shadow. Here, we believe
          that every beam of light tells a story and every shadow holds a moment
          worth preserving.
        </p>
        <br />
        <p className="first-letter:text-3xl">
          Our motto,
          <strong className="text-blue-800">
            "Chasing shadows, embracing light"
          </strong>
          , reflects our passion and pursuit in the art of photography. Through
          our lenses, we chase the interplay of light and shadow, capturing
          fleeting moments of beauty and presenting them through unique
          perspectives. Whether it's natural landscapes, cultural scenes, or the
          little details of everyday life, we aim to evoke emotions and resonate
          with your soul through our images.
        </p>
        <br />
        <p className="first-letter:text-3xl">
          We hope you find inspiration here, feel the magic of light and shadow,
          and enjoy the beauty of each captured moment. Wishing you good light
          and the joy of capturing every remarkable moment.
        </p>
        <div className="flex items-center justify-center">
          <Button type="about" to="/">
            Chasing Shadow!
          </Button>
        </div>
      </div>
    </div>
  );
}
