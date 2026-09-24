import type { Game } from "@/types/game";

export const initialGames: Game[] = [
  {
    id: "g1",
    title: "Super Mario 64",
    platform: "PC",
    expectedHours: 20,
    status: "completed",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mcYHpP82k7qK3nod3jCJUtj6Av5dg1ld92tXfqQ1Vg&s=10",
  },
  {
    id: "g2",
    title: "Ragnarok Online",
    platform: "PC",
    expectedHours: 200,
    status: "playing",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/215100/header.jpg?t=1737138060",
  },
  {
    id: "g3",
    title: "Dota 2",
    platform: "PC",
    expectedHours: 50000,
    status: "playing",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43m_BWatXxVBTxHTS00NCK7WY1GgIX0fs1j1O9I2yQA&s=10",
  },
  {
    id: "g4",
    title: "Minecraft",
    platform: "PC",
    expectedHours: 1500,
    status: "not_started",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTBxN53cACjAS2nJcMBvLC0XUFyIaNBMw8ShqIfnjAA&s=10",
  },
  {
    id: "g5",
    title: "LEGO Batman",
    platform: "PC",
    expectedHours: 30,
    status: "not_started",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaU4LqT1upNlvDSm-VElyv4AEdaJgpuEtEiCMLbyc_A&s=10",
  },
];