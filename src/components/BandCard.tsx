import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 p-5 flex flex-col justify-between">
      <div>

        <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-neutral-950 mb-4">
          <Image
            src={band.imageUrl}
            alt={band.name}
            fill
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

      <div className="mt-5 pt-4 border-t border-neutral-800">
        <h3 className="text-sm text-neutral-400 font-mono mb-3">MEMBERS</h3>
        <ul className="space-y-2">
          {band.members.map((member) => (
            <li key={member.id} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border border-neutral-700"
                  />
                )}
                <span className="text-neutral-200">{member.name}</span>
              </div>
              <span className="text-neutral-500 text-[11px]">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}