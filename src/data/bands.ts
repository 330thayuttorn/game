import type { Band } from "@/types/band";

export const mockBands: Band[] = [
  {
    id: 1,
    name: "Oasis",
    genre: "Britpop / Rock",
    formedYear: 1991,
    imageUrl: "/images/bands/oasis.jpg",
    description: "วงร็อกจากเมืองแมนเชสเตอร์ ประเทศอังกฤษ หนึ่งในวงดนตรีที่มีอิทธิพลมากที่สุดในยุค Britpop",
    members: [
      { id: 1, name: "Liam Gallagher", role: "Lead Vocals" },
      { id: 2, name: "Noel Gallagher", role: "Lead Guitar / Vocals" },
      { id: 3, name: "Gem Archer", role: "Rhythm Guitar" },
      { id: 4, name: "Andy Bell", role: "Bass" }
    ]
  },
  {
    id: 2,
    name: "Aerosmith",
    genre: "Hard Rock / Blues Rock",
    formedYear: 1970,
    imageUrl: "/images/bands/aerosmith.jpg",
    description: "วงฮาร์ดร็อกระดับตำนานจากบอสตัน สหรัฐอเมริกา เจ้าของฉายา 'The Bad Boys from Boston'",
    members: [
      { id: 1, name: "Steven Tyler", role: "Lead Vocals" },
      { id: 2, name: "Joe Perry", role: "Lead Guitar" },
      { id: 3, name: "Brad Whitford", role: "Rhythm Guitar" },
      { id: 4, name: "Tom Hamilton", role: "Bass" },
      { id: 5, name: "Joey Kramer", role: "Drums" }
    ]
  },
  {
    id: 3,
    name: "Daft Punk",
    genre: "Electronic / French Touch / Disco",
    formedYear: 1993,
    imageUrl: "/images/bands/daftpunk.jpg",
    description: "วงดนตรีอิเล็กทรอนิกส์ระดับตำนานจากปารีส ประเทศฝรั่งเศส โดดเด่นด้วยหมวกกันน็อกหุ่นยนต์อันเป็นเอกลักษณ์",
    members: [
      { id: 1, name: "Thomas Bangalter", role: "Synthesizer / Producer" },
      { id: 2, name: "Guy-Manuel de Homem-Christo", role: "Synthesizer / Producer" }
    ]
  }
];