import React, { useEffect, useState } from "react";

// icons
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

// recoil
import { useRecoilState } from "recoil";
import { playlistIdState } from "@/atoms/playlistAtom";

// auth
import { signOut, useSession } from "next-auth/react";

// hooks
import usePlaylists, { IPlaylist } from "@/hooks/usePlaylists";

type Props = {};

const Sidebar = (props: Props) => {
  // const { data: session, status } = useSession();
  const playlists = usePlaylists();
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log("You picked playlist >>> ", playlistId);
  return (
    <header className="text-gray-500 p-5 text-xs border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist... */}
        {playlists?.map((playlist: IPlaylist) => (
          <p
            key={playlist?.id}
            className="cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist?.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Sidebar;
