import { useEffect, useState } from "react";

// next
import { signOut, useSession } from "next-auth/react";

// icons
import { ChevronDownIcon } from "@heroicons/react/outline";

// lodash
import { shuffle } from "lodash";

// hooks
import useSpotify from "@/hooks/useSpotify";

// atom
import { useRecoilValue, useRecoilState } from "recoil";
import { playlistIdState, playlistState } from "@/atoms/playlistAtom";

// comp
import { Songs } from "..";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-purple-500",
];

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState<string | undefined>("");
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState<any>(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data: any) => {
        setPlaylist(data.body);
      })
      .catch((err: any) => {
        alert(err?.message);
      });
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow h-screen overflow-y-auto scrollbar-hide">
      <h1>Title</h1>

      <header className="absolute top-8 right-8">
        <div
          onClick={() => signOut()}
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
        >
          <img
            src={session?.user?.image!}
            alt="user photo"
            className="rounded-full w-10 h-10"
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt="banner image"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
