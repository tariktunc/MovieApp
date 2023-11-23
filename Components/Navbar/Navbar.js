"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import Country from "@/Components/Country/Country";

export default function Navbar() {
  const language = useSelector((state) => state.languageSetting.language);
  const buttonUrl = [
    {
      name: "Home",
      id: "home",
      url: "/",
    },
    {
      name: "Movie",
      id: "movie",
      url: "/movie",
    },
    {
      name: "Tv",
      id: "tv",
      url: "/tv",
    },
    {
      name: "Popular",
      id: "popular",
      url: "/popular",
    },
  ];
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="bg-[#221f1f] w-full h-14 flex items-center">
      {/* Logo */}
      <div className="text-white text-3xl w-full">LOGO</div>

      {/* Buttons */}
      <div className="flex justify-center items-center h-full w-full">
        {buttonUrl.map((item) => {
          return (
            <div
              className=" w-full h-full items-center justify-center flex m-1"
              key={item.id}>
              <Link
                className="w-full h-full items-center justify-center flex text-white text-md hover:opacity-50"
                href={item.url}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="text-white text-md  flex justify-end  w-full ">
        {/* <p>{localStorage.getItem("language") || language}</p> */}
        <div className="text-black w-60 flex   items-center ">
          <p className="mr-3 text-white">{language}</p>
          <Country handleCountryChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
