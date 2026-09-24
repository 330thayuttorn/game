"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Game, GameDraft } from "@/types/game";

type GameFormProps = {
  initialGame?: Game;
  onSave: (draft: GameDraft) => void;
  onCancel: () => void;
};

type FormErrors = Partial<Record<keyof GameDraft, string>>;

const emptyDraft: GameDraft = {
  title: "",
  platform: "",
  expectedHours: "",
  status: "not_started",
  imageUrl: "",
};

function toDraft(game?: Game): GameDraft {
  if (!game) return emptyDraft;
  return {
    title: game.title,
    platform: game.platform,
    expectedHours: String(game.expectedHours),
    status: game.status,
    imageUrl: game.imageUrl || "",
  };
}

function validate(value: GameDraft): FormErrors {
  const errors: FormErrors = {};
  if (value.title.trim() === "") {
    errors.title = "กรุณาระบุชื่อเกม";
  }
  if (value.platform.trim() === "") {
    errors.platform = "กรุณาเลือกหรือระบุแพลตฟอร์ม";
  }
  const hours = Number(value.expectedHours);
  if (!Number.isInteger(hours) || hours <= 0) {
    errors.expectedHours = "จำนวนชั่วโมงต้องเป็นจำนวนเต็มบวก";
  }
  return errors;
}

export default function GameForm({ initialGame, onSave, onCancel }: GameFormProps) {
  const [draft, setDraft] = useState<GameDraft>(toDraft(initialGame));
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(draft);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    onSave(draft);
    setDraft(emptyDraft);
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl space-y-4"
    >
      <h2 className="text-xl font-bold text-white mb-2">
        {initialGame ? "✏️ แก้ไขข้อมูลเกม" : "➕ เพิ่มเกมใหม่"}
      </h2>

      <div>
        <label htmlFor="title" className="block text-xs font-medium text-neutral-300 mb-1">
          ชื่อเกม *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={draft.title}
          onChange={handleChange}
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-neutral-500 outline-none transition-all"
          placeholder="เช่น Super Mario Odyssey"
        />
        {errors.title && <p id="title-error" className="text-red-400 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-xs font-medium text-neutral-300 mb-1">
          URL รูปภาพปกเกม
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          value={draft.imageUrl}
          onChange={handleChange}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-neutral-500 outline-none transition-all"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label htmlFor="platform" className="block text-xs font-medium text-neutral-300 mb-1">
          แพลตฟอร์ม *
        </label>
        <select
          id="platform"
          name="platform"
          value={draft.platform}
          onChange={handleChange}
          aria-invalid={!!errors.platform}
          aria-describedby={errors.platform ? "platform-error" : undefined}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-neutral-500 outline-none transition-all"
        >
          <option value="">-- เลือกแพลตฟอร์ม --</option>
          <option value="PC">PC</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Xbox Series X">Xbox Series X</option>
        </select>
        {errors.platform && <p id="platform-error" className="text-red-400 text-xs mt-1">{errors.platform}</p>}
      </div>

      <div>
        <label htmlFor="expectedHours" className="block text-xs font-medium text-neutral-300 mb-1">
          เวลาคาดการณ์ (ชั่วโมง) *
        </label>
        <input
          id="expectedHours"
          name="expectedHours"
          type="number"
          inputMode="numeric"
          min="1"
          value={draft.expectedHours}
          onChange={handleChange}
          aria-invalid={!!errors.expectedHours}
          aria-describedby={errors.expectedHours ? "hours-error" : undefined}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-neutral-500 outline-none transition-all"
          placeholder="เช่น 30"
        />
        {errors.expectedHours && <p id="hours-error" className="text-red-400 text-xs mt-1">{errors.expectedHours}</p>}
      </div>

      <div>
        <label htmlFor="status" className="block text-xs font-medium text-neutral-300 mb-1">
          สถานะ
        </label>
        <select
          id="status"
          name="status"
          value={draft.status}
          onChange={handleChange}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-neutral-500 outline-none transition-all"
        >
          <option value="not_started">ยังไม่เริ่ม</option>
          <option value="playing">กำลังเล่น</option>
          <option value="completed">เล่นจบแล้ว</option>
        </select>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="flex-1 bg-white text-black font-semibold text-xs py-3 rounded-xl hover:bg-neutral-200 transition-all"
        >
          บันทึกข้อมูล
        </button>
        {initialGame ? (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 bg-neutral-800 text-neutral-300 font-semibold text-xs py-3 rounded-xl hover:bg-neutral-700 transition-all"
          >
            ยกเลิก
          </button>
        ) : null}
      </div>
    </form>
  );
}