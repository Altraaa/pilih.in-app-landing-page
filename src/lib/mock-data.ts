export const MOCK_EVENTS = [
  {
    id: "1",
    title: "Pemilihan Ketua BEM UI 2024",
    category: "Organisasi",
    date: "10 - 12 Des 2024",
    voters: "12.5k",
    description: "Pemilihan umum raya untuk menentukan ketua dan wakil ketua BEM UI periode 2024/2025.",
    image: "https://images.unsplash.com/photo-1540910419868-4749459ca6c8?q=80&w=2130",
    status: "live",
    totalCategories: 5,
    totalVotes: "45,230",
    organizer: "BEM UI"
  },
  {
    id: "2",
    title: "Indonesian Music Awards 2024",
    category: "Entertainment",
    date: "20 Des 2024",
    voters: "45.2k",
    description: "Ajang penghargaan musik paling bergengsi di Indonesia. Dukung musisi favoritmu sekarang!",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
    status: "live",
    totalCategories: 12,
    totalVotes: "1.2M",
    organizer: "IMA Official"
  },
  {
    id: "3",
    title: "Esports Regional Championship",
    category: "Competition",
    date: "15 Jan 2025",
    voters: "8.1k",
    description: "Turnamen Mobile Legends antar region. Vote tim jagoanmu untuk menjadi juara favorit.",
    image: "https://images.unsplash.com/photo-1540575467063-17e6fc8c62d8?q=80&w=2070",
    status: "upcoming",
    totalCategories: 3,
    totalVotes: "0",
    organizer: "Esports ID"
  },
  {
    id: "4",
    title: "Putri Indonesia Favorit 2024",
    category: "Pageant",
    date: "01 Nov 2024",
    voters: "85.2k",
    description: "Vote finalis Putri Indonesia favoritmu untuk melaju ke babak selanjutnya.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740",
    status: "ended",
    totalCategories: 1,
    totalVotes: "85,200",
    organizer: "Putri Indonesia"
  },
  {
    id: "5",
    title: "Tech Startup Awards",
    category: "Technology",
    date: "12 Des 2024",
    voters: "5.4k",
    description: "Penghargaan untuk startup teknologi paling inovatif tahun ini.",
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d30c?q=80&w=2070",
    status: "live",
    totalCategories: 8,
    totalVotes: "15,400",
    organizer: "Tech Asia"
  }
] as const;

export const MOCK_CATEGORIES = [
  {
    id: "cat1",
    eventId: "1",
    name: "Ketua BEM",
    description: "Kandidat calon ketua BEM yang akan memimpin organisasi selama satu periode ke depan.",
    totalVotes: "12.3k",
    candidateCount: 3
  },
  {
    id: "cat2",
    eventId: "1",
    name: "Wakil Ketua BEM",
    description: "Kandidat calon wakil ketua BEM.",
    totalVotes: "11.1k",
    candidateCount: 4
  },
  {
    id: "cat3",
    eventId: "1",
    name: "Sekretaris Jenderal",
    description: "Posisi strategis untuk mengelola administrasi organisasi.",
    totalVotes: "8.5k",
    candidateCount: 5
  },
  {
    id: "cat4",
    eventId: "2",
    name: "Song of the Year",
    description: "Lagu terbaik yang dirilis tahun ini.",
    totalVotes: "450k",
    candidateCount: 10
  },
  {
    id: "cat5",
    eventId: "2",
    name: "Best New Artist",
    description: "Artis pendatang baru terbaik.",
    totalVotes: "320k",
    candidateCount: 8
  }
];

export const MOCK_CANDIDATES = [
  {
    id: "cand1",
    categoryId: "cat1",
    name: "Budi Santoso",
    number: "01",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    description: "Visi: Membawa perubahan progresif untuk kampus yang lebih inklusif dan berprestasi.",
    votes: "5,420",
    percentage: 45.2,
    rank: 1
  },
  {
    id: "cand2",
    categoryId: "cat1",
    name: "Siti Rahayu",
    number: "02",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    description: "Misi: Mengoptimalkan potensi mahasiswa melalui program kerja yang nyata dan berdampak.",
    votes: "3,372",
    percentage: 28.1,
    rank: 2
  },
  {
    id: "cand3",
    categoryId: "cat1",
    name: "Ahmad Rizky",
    number: "03",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    description: "Berani beda, berani berkarya untuk almamater tercinta.",
    votes: "1,836",
    percentage: 15.3,
    rank: 3
  },
  {
    id: "cand4",
    categoryId: "cat1",
    name: "Dewi Lestari",
    number: "04",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
    description: "Kolaborasi adalah kunci kesuksesan bersama.",
    votes: "980",
    percentage: 8.2,
    rank: 4
  },
  {
    id: "cand5",
    categoryId: "cat1",
    name: "Rian Pratama",
    number: "05",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    description: "Siap melayani mahasiswa dengan sepenuh hati.",
    votes: "250",
    percentage: 2.1,
    rank: 5
  }
];
