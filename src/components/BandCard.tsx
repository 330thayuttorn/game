import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div className="image-container">
        <Image
          src={band.imageUrl}
          alt={band.name}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>

      <h2>{band.name}</h2>
      <p><strong>แนวเพลง:</strong> {band.genre}</p>
      <p><strong>ปีที่ก่อตั้ง:</strong> ค.ศ. {band.formedYear}</p>

      {band.description && (
        <p className="description">{band.description}</p>
      )}

      <div className="members-list">
        <h3>สมาชิกในวง:</h3>
        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}