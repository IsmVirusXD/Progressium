import { typography } from "@/app/styles/fonts/typografy";
import { TextButton } from "@/app/ui/textButton";
import { twJoin } from "tailwind-merge";

interface TrackerHeaderPresenterProps {
  title: string;
  author: string;
  image: string;
  theme: string;
  clickHandler: () => void;
}

export default function TrackerHeaderPresenter({
  title,
  author,
  image,
  theme,
  clickHandler,
}: TrackerHeaderPresenterProps) {
  const cyId = "header_dashboard";
  return (
    <div
      id={cyId}
      className="grid grid-cols-[100px_1fr_250px] grid-rows-2 border-3 m-5 px-6 py-4 gap-x-4 border-secondary shadow-md"
    >
      <img
        src={image}
        className="h-25 w-25 row-span-2 col-start-1 row-start-1 align-center"
        id={`${cyId}-image`}
      />
      <h1 id={`${cyId}-title`} className={twJoin("content-end", typography.h1)}>
        {title}
      </h1>
      {/* //Subtitle */}
      <h2
        id={`${cyId}-author`}
        className={twJoin("row-start-2 content-start", typography.h2)}
      >
        <span className={twJoin("mr-2 text-primary", typography.subtitle)}>
          Made By:
        </span>
        {author}
      </h2>
      <h4
        id={`${cyId}-themeName`}
        className={twJoin("col-start-3 content-end", typography.h4)}
      >
        <span className={twJoin("text-primary mr-2", typography.subtitle)}>
          Theme:
        </span>
        {theme}
      </h4>
      <div className="content-center">
        <TextButton
          text="Change Theme"
          type="text"
          size="large"
          cyId={cyId}
          onClick={clickHandler}
        />
      </div>
    </div>
  );
}
