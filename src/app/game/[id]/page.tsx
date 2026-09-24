import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { initialGames } from "@/data/game";

type GamePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { id } = await params;
  const game = initialGames.find((item) => item.id === id);
  return {
    title: game ? `${game.title} - Game Backlog` : "ไม่พบรายการเกม",
  };
}

export default async function GameDetailPage({ params }: GamePageProps) {
  const { id } = await params;
  const game = initialGames.find((item) => item.id === id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      <article className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6">
        {/* รูปปกขนาดใหญ่ */}
        {game.imageUrl && (
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-neutral-950">
            <Image
              src={game.imageUrl}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full">
              {game.platform}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
            {game.title}
          </h1>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800 text-sm">
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">ระยะเวลาคาดการณ์</span>
              <span className="text-lg font-bold text-neutral-200">{game.expectedHours} ชั่วโมง</span>
            </div>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs text-neutral-500 block">สถานะปัจจุบัน</span>
              <span className="text-lg font-bold text-neutral-200">
                {game.status === "not_started"
                  ? "ยังไม่เริ่ม"
                  : game.status === "playing"
                  ? "กำลังเล่น"
                  : "เล่นจบแล้ว"}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            ← กลับไปหน้ารายการเกม
          </Link>
        </div>
      </article>
    </main>
  );
}