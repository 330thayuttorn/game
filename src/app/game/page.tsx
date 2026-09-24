import GameExplorer from "@/components/GameExplorer";
import { initialGames } from "@/data/game";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold uppercase tracking-wider text-white">
            Game Backlog
          </h1>
           <h2 className="text-4xl font-extrabold uppercase tracking-wider text-white">
            เล่นจนตาแฉะเลยแหละ
          </h2>
          <p className="text-sm text-neutral-400">
            ระบบบันทึกและติดตามรายการเกมที่ตั้งใจจะเล่น
          </p>
        </header>

        <GameExplorer initialGames={initialGames} />
      </div>
    </main>
  );
}