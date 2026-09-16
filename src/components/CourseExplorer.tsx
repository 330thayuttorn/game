"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "./BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  const [likesMap, setLikesMap] = useState<Record<number, number>>({});

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((item) => item !== id)
        : [...prevIds, id]
    );
  }

  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  const searchText = keyword.trim().toLowerCase();
  const visibleBands = bands.filter(
    (band) =>
      band.name.toLowerCase().includes(searchText) ||
      band.genre.toLowerCase().includes(searchText)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ส่วนแสดงจำนวนวงที่ติดตาม */}
      <header className="mb-8 p-6 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            วงดนตรีที่ติดตาม
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            ติดตามอยู่ทั้งหมด {followedIds.length} วง
          </p>
        </div>
        <span className="text-3xl font-extrabold text-white bg-neutral-950 px-4 py-2 rounded-xl border border-neutral-800">
          {followedIds.length}
        </span>
      </header>

      {/* ช่องค้นหาแบบ  */}
      <div className="mb-8">
        <input
          type="search"
          placeholder="ค้นหาชื่อวง หรือแนวเพลง..."
          value={keyword}
          onChange={handleKeywordChange}
          className="w-full bg-neutral-900 border border-neutral-800 focus:border-neutral-400 text-white placeholder-neutral-500 rounded-xl px-4 py-3 outline-none transition-all duration-200"
        />
      </div>

      {/* Empty State หรือ แสดงรายการ BandCard */}
      {visibleBands.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
          <p className="text-neutral-400 text-base">อ้ายๆหาบ่เจอ</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedIds.includes(band.id)}
              onToggleFollow={handleToggleFollow}
              likesCount={likesMap[band.id] || 0}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </div>
  );
}