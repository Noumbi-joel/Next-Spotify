import { currentTrackIdState, isPlayingState } from "@/atoms/songAtom";
import { useRecoilState } from "recoil";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import React from "react";
import useSongInfo from "@/hooks/useSongInfo";

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const songInfo = useSongInfo();

  return (
    <div>
      {/* left */}
      <div>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
};

export default Player;
