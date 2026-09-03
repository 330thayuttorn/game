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
      { id: 1, name: "Liam Gallagher", role: "Lead Vocals", imageUrl: "/images/member/liam.jpg" },
      { id: 2, name: "Noel Gallagher", role: "Lead Guitar / Vocals", imageUrl: "/images/member/noal.jpg" },
      { id: 3, name: "Gem Archer", role: "Rhythm Guitar", imageUrl: "/images/member/gem.jpg" },
      { id: 4, name: "Andy Bell", role: "Bass", imageUrl: "/images/member/andy.jpg" }
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
      { id: 1, name: "Steven Tyler", role: "Lead Vocals", imageUrl: "/images/member/ste.jpg"  },
      { id: 2, name: "Joe Perry", role: "Lead Guitar", imageUrl: "/images/member/jo.jpg"  },
      { id: 3, name: "Brad Whitford", role: "Rhythm Guitar", imageUrl: "/images/member/brad.jpg"  },
      { id: 4, name: "Tom Hamilton", role: "Bass", imageUrl: "/images/member/tom.jpg"  },
      { id: 5, name: "Joey Kramer", role: "Drums", imageUrl: "/images/member/joey.jpg"  }
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
      { id: 1, name: "Thomas Bangalter", role: "Synthesizer / Producer", imageUrl: "/images/member/tomus.jpg" },
      { id: 2, name: "Guy-Manuel de Homem-Christo", role: "Synthesizer / Producer", imageUrl: "/images/member/ge.jpg" }
    ]
  }
];