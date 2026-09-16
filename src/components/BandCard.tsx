import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onToggleFollow: (id: number) => void;
  likesCount: number;
  onLike: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowed,
  onToggleFollow,
  likesCount,
  onLike,
}: BandCardProps) {
  return (
    <article className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 p-5 flex flex-col justify-between">
      <div>
        {/* 🛠️ ปรับขนาดรูปปกให้ใหญ่ขึ้นเป็น h-60 (240px) */}
        <div className="relative w-full h-60 overflow-hidden rounded-xl bg-neutral-950 mb-4">
          <Image
            src={band.imageUrl}
            alt={band.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">
          {band.genre}
        </span>
        <h2 className="text-3xl font-bold uppercase text-white mt-2">{band.name}</h2>
        <p className="text-sm text-neutral-400 mt-1">ค.ศ. {band.formedYear}</p>

        {band.description && (
          <p className="text-sm text-neutral-300 mt-3 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            {band.description}
          </p>
        )}
      </div>

      <div>
        <div className="mt-5 pt-4 border-t border-neutral-800">
          <h3 className="text-sm text-neutral-400 font-mono mb-3">MEMBERS</h3>
          <ul className="space-y-3">
            {band.members.map((member) => (
              <li key={member.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  {/* 🛠️ ปรับขนาดรูปสมาชิกให้ใหญ่ขึ้นเป็น 56x56px (w-14 h-14) */}
                  {member.imageUrl && (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border border-neutral-700 shrink-0"
                    />
                  )}
                  <span className="text-neutral-200 font-medium text-sm">{member.name}</span>
                </div>
                <span className="text-neutral-500 text-xs">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ปุ่มติดตาม และ ปุ่ม Like */}
        <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleFollow(band.id)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 ${
              isFollowed
                ? "bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            {isFollowed ? "ยกเลิกติดตาม" : "ติดตาม"}
          </button>

          <button
            type="button"
            onClick={() => onLike(band.id)}
            className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>👍</span>
            <span>{likesCount}</span>
          </button>
        </div>
      </div>
    </article>
  );
}