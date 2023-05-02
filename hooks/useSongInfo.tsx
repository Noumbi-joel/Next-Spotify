import { currentTrackIdState } from "@/atoms/songAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";

function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);
  const token: any = spotifyApi;

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentIdTrack) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
          {
            headers: {
              Authorization: `Bearer ${token.getAccessToken()}`,
            },
          }
        );
      }
    };

    fetchSongInfo();
  }, []);

  return songInfo;
}

export default useSongInfo;
