// states
import { playlistState } from "@/atoms/playlistAtom";
import { useRecoilState } from "recoil";

// comp
import { Song } from "..";

type Props = {};

const Songs = (props: Props) => {
  const playlist = useRecoilState(playlistState);
  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {/* @ts-ignore */}
      {playlist?.[0]?.tracks?.items.map((track: any, i: number) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
