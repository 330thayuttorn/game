import BandExplorer from "@/components/BandExplorer";
import { mockBands } from "@/data/bands";

export default function FavoriteBandsPage() {
  return (
    <main className="container">
      <h1>the bands that i like</h1>
      <h2>วงดนตรีทีอันโตข้าชอบมากๆ</h2>

      <BandExplorer bands={mockBands} />
    </main>
  );
}