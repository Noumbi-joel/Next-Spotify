// comp
import { Center, HeadTitle, Player, Sidebar } from "@/components";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <HeadTitle title="Next Spotify | Home" />
      
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}
