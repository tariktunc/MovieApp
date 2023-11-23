import Link from "next/link";
import Movie from "@/Pages/Movies/page";
import Tv from "@/Pages/Tv/page";
import Popular from "@/Pages/Popular/page";

export default function Page({ params }) {
  switch (params.slug) {
    case "movie":
      return <Movie />;
      break;
    case "tv":
      return <Tv />;
      break;
    case "popular":
      return <Popular />;
      break;
    default:
      return <ErrorPage />;
      break;
  }
}

function ErrorPage() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
      404 This page could not be found.
      <hr></hr>
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
