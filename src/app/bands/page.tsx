import BandCard from "@/components/BandCard";
import { mockBands } from "@/data/bands";

export default function FavoriteBandsPage() {
  return (
    <main className="container">
      <h1>the bands that i like</h1>
      <h2>วงดนตรีทีอันโตข้าชอบมากๆ</h2>

      <section className="band-grid">
       {mockBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}