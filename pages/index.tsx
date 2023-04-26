import { HeadTitle, Sidebar } from "@/components";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <HeadTitle title="Next Spotify | Home" />
      
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* player */}
      </div>
    </div>
  );
}
