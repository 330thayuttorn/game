import Link from "next/link";
import Image from "next/image";
import type { Game } from "@/types/game";

type GameCardProps = {
  game: Game;
  onEdit: () => void;
  onDelete: () => void;
};

const statusStyles = {
  not_started: { label: "ยังไม่เริ่ม", style: "bg-neutral-800 text-neutral-300 border-neutral-700" },
  playing: { label: "กำลังเล่น", style: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  completed: { label: "เล่นจบแล้ว", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
};

export default function GameCard({ game, onEdit, onDelete }: GameCardProps) {
  const statusInfo = statusStyles[game.status];

  return (
    <article className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col justify-between">
      <div>
        {/* รูปภาพปกเกม */}
        <div className="relative w-full h-48 overflow-hidden rounded-xl bg-neutral-950 mb-4">
          {game.imageUrl ? (
            <Image
              src={game.imageUrl}
              alt={game.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-between justify-center text-neutral-600 text-sm">
              ไม่มีรูปภาพ
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">
            {game.platform}
          </span>
          <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${statusInfo.style}`}>
            {statusInfo.label}
          </span>
        </div>

        <h2 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
          <Link href={`/games/${game.id}`}>{game.title}</Link>
        </h2>
        <p className="text-xs text-neutral-400 mt-1">⏳ เวลาคาดการณ์: {game.expectedHours} ชั่วโมง</p>
      </div>

      <div className="flex gap-2 mt-5 pt-4 border-t border-neutral-800">
        <button
          type="button"
          onClick={onEdit}
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold py-2 rounded-xl transition-all"
        >
          แก้ไข
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold py-2 rounded-xl transition-all"
        >
          ลบ
        </button>
      </div>
    </article>
  );
}