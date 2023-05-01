// comp
import { Center, HeadTitle, Sidebar } from "@/components";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <HeadTitle title="Next Spotify | Home" />
      
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>
        {/* player */}
      </div>
    </div>
  );
}
