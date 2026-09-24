"use client";

import { useState, type ChangeEvent } from "react";
import type { Game, GameDraft } from "@/types/game";
import GameCard from "./gamecard";
import GameForm from "./game1";

type GameExplorerProps = {
  initialGames: Game[];
};

export default function GameExplorer({ initialGames }: GameExplorerProps) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [keyword, setKeyword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  function handleCreate(draft: GameDraft) {
    const newGame: Game = {
      id: crypto.randomUUID(),
      title: draft.title.trim(),
      platform: draft.platform.trim(),
      expectedHours: Number(draft.expectedHours),
      status: draft.status,
      imageUrl: draft.imageUrl.trim() || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    };
    setGames([...games, newGame]);
  }

  function handleUpdate(id: string, draft: GameDraft) {
    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              title: draft.title.trim(),
              platform: draft.platform.trim(),
              expectedHours: Number(draft.expectedHours),
              status: draft.status,
              imageUrl: draft.imageUrl.trim(),
            }
          : game
      )
    );
    setEditingId(null);
  }

  function handleDelete(id: string) {
    setGames(games.filter((game) => game.id !== id));
  }

  function handleSave(draft: GameDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }
    handleUpdate(editingId, draft);
  }

  const editingGame = games.find((game) => game.id === editingId);
  const searchText = keyword.trim().toLowerCase();
  const visibleGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchText)
  );

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* ส่วนฟอร์มฝั่งซ้าย */}
      <div className="lg:col-span-1 lg:sticky lg:top-8">
        <GameForm
          key={editingId ?? "new"}
          initialGame={editingGame}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
        />
      </div>

      {/* ส่วนแสดงรายการการ์ดฝั่งขวา */}
      <div className="lg:col-span-2 space-y-6">
        <input
          id="keyword"
          type="search"
          placeholder="🔍 ค้นหาชื่อเกม..."
          value={keyword}
          onChange={handleKeywordChange}
          className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-2xl px-4 py-3 outline-none focus:border-neutral-600 transition-all"
        />

        {visibleGames.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-sm">ไม่พบรายการเกมตรงตามเงื่อนไข</p>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onEdit={() => setEditingId(game.id)}
                onDelete={() => handleDelete(game.id)}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}