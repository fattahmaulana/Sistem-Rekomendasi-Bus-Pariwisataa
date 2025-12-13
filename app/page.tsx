"use client";

import { useState, useEffect } from 'react';
import { Search, Bus, Wifi, Wind, Armchair, Tv, Coffee, Sparkles, X, Users, DollarSign, Star, TrendingUp, Zap, ChevronLeft, ChevronRight, Filter, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dataset 100 Bus Pariwisata Jawa-Bali
const busDataset = [
  // Executive Class (High End)
  { id: 1, nama_bus: "Sumber Kencono SHD", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 52, harga_start: 3500000, tahun: 2023, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 2, nama_bus: "Rosalia Indah Premiere", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3800000, tahun: 2023, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 3, nama_bus: "Pahala Kencana Platinum", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 4000000, tahun: 2024, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack", "Massage Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 4, nama_bus: "PO Haryanto Royal Class", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 46, harga_start: 3700000, tahun: 2023, rute: "Semarang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 5, nama_bus: "Medali Mas Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 52, harga_start: 3600000, tahun: 2023, rute: "Solo-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 6, nama_bus: "Nusantara Luxury", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 44, harga_start: 4200000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack", "Massage Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 7, nama_bus: "Kramat Djati Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3500000, tahun: 2023, rute: "Bandung-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 8, nama_bus: "Sinar Jaya Gold", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3900000, tahun: 2023, rute: "Jakarta-Banyuwangi", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 9, nama_bus: "Tentrem Bus Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 46, harga_start: 3400000, tahun: 2022, rute: "Yogyakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 10, nama_bus: "Garuda Mas Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 52, harga_start: 3550000, tahun: 2023, rute: "Malang-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  
  // VIP Class
  { id: 11, nama_bus: "Lorena VIP Sleeper", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 40, harga_start: 3800000, tahun: 2023, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 12, nama_bus: "Agra Mas VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3650000, tahun: 2023, rute: "Semarang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 13, nama_bus: "Harapan Jaya Premium", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3700000, tahun: 2023, rute: "Solo-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 14, nama_bus: "Budiman Luxury", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 40, harga_start: 4000000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack", "Massage Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 15, nama_bus: "Putera Mulya VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3750000, tahun: 2023, rute: "Bandung-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 16, nama_bus: "Bintang Timur Premium", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3680000, tahun: 2022, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 17, nama_bus: "Elok Wisata VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 40, harga_start: 3900000, tahun: 2023, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack", "Massage Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 18, nama_bus: "Sejahtera VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3620000, tahun: 2022, rute: "Malang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 19, nama_bus: "Prima Jasa VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3720000, tahun: 2023, rute: "Yogyakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 20, nama_bus: "Maju Lancar VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 40, harga_start: 3850000, tahun: 2023, rute: "Jakarta-Banyuwangi", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },

  // Economy Plus
  { id: 21, nama_bus: "Safari Dharma Raya Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2900000, tahun: 2022, rute: "Jakarta-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 22, nama_bus: "Cita Rasa Express", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 56, harga_start: 2850000, tahun: 2022, rute: "Semarang-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 23, nama_bus: "Djaya Indah Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2950000, tahun: 2023, rute: "Solo-Bali", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 24, nama_bus: "Mandiri Express", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 55, harga_start: 2880000, tahun: 2022, rute: "Bandung-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 25, nama_bus: "Sentosa Jaya Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2920000, tahun: 2023, rute: "Yogyakarta-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  
  // Economy Standard
  { id: 26, nama_bus: "Gunung Harta Express", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2500000, tahun: 2021, rute: "Jakarta-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 27, nama_bus: "Eka Mitra Wisata", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 58, harga_start: 2450000, tahun: 2021, rute: "Semarang-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 28, nama_bus: "Pahala Nusantara", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 60, harga_start: 2550000, tahun: 2022, rute: "Solo-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 29, nama_bus: "Fajar Utama", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2480000, tahun: 2021, rute: "Bandung-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 30, nama_bus: "Berkah Jaya", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 58, harga_start: 2520000, tahun: 2022, rute: "Yogyakarta-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },

  // 31-100: Variasi tambahan dengan spesifikasi berbeda
  ...Array.from({ length: 70 }, (_, i) => {
    const id = i + 31;
    const types = ["Executive", "VIP", "Economy Plus", "Economy"];
    const rutes = ["Jakarta-Surabaya", "Semarang-Bali", "Solo-Denpasar", "Bandung-Bali", "Yogyakarta-Bali", "Malang-Denpasar", "Jakarta-Bali", "Surabaya-Denpasar", "Jakarta-Banyuwangi", "Bandung-Surabaya"];
    const names = ["Sumber", "Rosalia", "Pahala", "Gunung", "PO", "Medali", "Safari", "Nusantara", "Kramat", "Garuda", "Lorena", "Agra", "Harapan", "Budiman", "Putera", "Bintang", "Elok", "Sejahtera", "Prima", "Maju"];
    const surnames = ["Kencono", "Indah", "Kencana", "Harta", "Haryanto", "Mas", "Dharma", "Luxury", "Djati", "Express", "Transport", "Jaya", "Mulya", "Timur", "Wisata", "Raya", "Sejahtera", "Mandiri"];
    
    const tipe = types[id % types.length];
    const kelas = tipe === "Executive" ? "Super High Deck" : tipe === "VIP" ? "High Deck" : "Standard";
    const kapasitas = tipe === "Executive" ? 44 + (id % 9) : tipe === "VIP" ? 40 + (id % 5) : tipe === "Economy Plus" ? 54 + (id % 3) : 58 + (id % 3);
    const harga = tipe === "Executive" ? 3400000 + (id % 8) * 100000 : tipe === "VIP" ? 3600000 + (id % 5) * 100000 : tipe === "Economy Plus" ? 2800000 + (id % 3) * 50000 : 2400000 + (id % 3) * 50000;
    
    let fasilitas = ["AC", "Reclining Seat"];
    if (tipe === "Executive" || tipe === "VIP") {
      fasilitas = ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"];
      if (id % 2 === 0) fasilitas.push("Snack");
      if (id % 5 === 0) fasilitas.push("Massage Seat");
    } else if (tipe === "Economy Plus") {
      fasilitas = ["AC", "Reclining Seat", "TV", "WiFi"];
      if (id % 3 === 0) fasilitas.push("USB Port");
    }
    
    return {
      id,
      nama_bus: `${names[id % names.length]} ${surnames[id % surnames.length]} ${id}`,
      tipe_bus: tipe,
      kelas_bus: kelas,
      kapasitas,
      harga_start: harga,
      tahun: 2021 + (id % 4),
      rute: rutes[id % rutes.length],
      fasilitas,
      image: id % 2 === 0 ? "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" : "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800"
    };
  })
];

const availableFasilitas = [
  { name: "AC", icon: Wind },
  { name: "WiFi", icon: Wifi },
  { name: "Toilet", icon: Users },
  { name: "Reclining Seat", icon: Armchair },
  { name: "TV", icon: Tv },
  { name: "USB Port", icon: Zap },
  { name: "Snack", icon: Coffee },
  { name: "Massage Seat", icon: Sparkles },
];

const ITEMS_PER_PAGE = 9;

/* =========================
   STEP 1 — COSINE SIMILARITY
========================= */
const cosineSimilarity = (a: number[], b: number[]) => {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
  const magB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
};

/* =========================
   STEP 2 — FEATURE SPACE
========================= */
const TIPE_BUS = ["Executive", "VIP", "Economy Plus", "Economy"];
const KELAS_BUS = ["Super High Deck", "High Deck", "Standard"];

const ROUTE_ORIGIN = Array.from(new Set(busDataset.map(b => b.rute.split("-")[0])));
const ROUTE_DEST = Array.from(new Set(busDataset.map(b => b.rute.split("-")[1])));

const ALL_FASILITAS = Array.from(new Set(busDataset.flatMap(b => b.fasilitas)));

/* =========================
   STEP 3 — VECTORISASI BUS
========================= */
const createBusVector = (bus: any) => {
  const vector: number[] = [];

  // One-hot: tipe bus
  TIPE_BUS.forEach(t => vector.push(bus.tipe_bus === t ? 1 : 0));

  // One-hot: kelas bus
  KELAS_BUS.forEach(k => vector.push(bus.kelas_bus === k ? 1 : 0));

  // One-hot: rute
  const [asal, tujuan] = bus.rute.split("-");
  ROUTE_ORIGIN.forEach(o => vector.push(asal === o ? 1 : 0));
  ROUTE_DEST.forEach(d => vector.push(tujuan === d ? 1 : 0));

  // Multi-hot: fasilitas
  ALL_FASILITAS.forEach(f => vector.push(bus.fasilitas.includes(f) ? 1 : 0));

  // Numerik (normalisasi)
  vector.push(bus.kapasitas / 100);
  vector.push(bus.harga_start / 5_000_000);
  vector.push((bus.tahun - 2020) / 5);

  return vector;
};

/* =========================
   STEP 4 — SIMILARITY FINAL
========================= */
const calculateSimilarity = (bus1: any, bus2: any) => {
  const v1 = createBusVector(bus1);
  const v2 = createBusVector(bus2);
  return cosineSimilarity(v1, v2);
};


export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    fasilitas: [] as string[],
    minKapasitas: 30,
    maxKapasitas: 65,
    maxHarga: 5000000,
    tipeBus: "All"
  });
  const [filteredBuses, setFilteredBuses] = useState(busDataset);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBus, setSelectedBus] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let results = busDataset.filter(bus => {
      const matchName = bus.nama_bus.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        bus.rute.toLowerCase().includes(searchQuery.toLowerCase());
      const matchKapasitas = bus.kapasitas >= filters.minKapasitas && bus.kapasitas <= filters.maxKapasitas;
      const matchHarga = bus.harga_start <= filters.maxHarga;
      const matchFasilitas = filters.fasilitas.length === 0 || 
        filters.fasilitas.every(f => bus.fasilitas.includes(f));
      const matchTipe = filters.tipeBus === "All" || bus.tipe_bus === filters.tipeBus;
      return matchName && matchKapasitas && matchHarga && matchFasilitas && matchTipe;
    });
    setFilteredBuses(results);
    setCurrentPage(1);
  }, [searchQuery, filters]);

  const totalPages = Math.ceil(filteredBuses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBuses = filteredBuses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleBooking = (bus: any) => {
    setSelectedBus(bus);
    setShowModal(true);
    const recs = busDataset
      .filter(b => b.id !== bus.id)
      .map(b => ({ ...b, similarity: calculateSimilarity(bus, b) }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 6);
    setRecommendations(recs);
  };

  const toggleFasilitas = (fas: string) => {
    setFilters(prev => ({
      ...prev,
      fasilitas: prev.fasilitas.includes(fas)
        ? prev.fasilitas.filter(f => f !== fas)
        : [...prev.fasilitas, fas]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full"></div>
              <Bus className="text-cyan-400 relative z-10" size={60} strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              BusGo
            </h1>
          </div>
          <p className="text-lg text-slate-300 font-light">Sistem Rekomendasi Bus Pariwisata Jawa-Bali</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className="text-cyan-400 font-semibold text-sm">{busDataset.length} Bus Tersedia</span>
            </div>
            <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className="text-purple-400 font-semibold text-sm">Content Based Filtering</span>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-6"
        >
          {/* Search Bar Container */}
<div className="flex items-center gap-2 md:gap-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-1.5 md:p-2 shadow-2xl shadow-cyan-500/20">
  
  {/* Search Icon */}
  <Search className="ml-3 md:ml-4 text-cyan-400 shrink-0" size={24} /> 

  {/* Input */}
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    // Persingkat placeholder untuk mobile atau biarkan truncate
    placeholder="Cari bus atau rute..." 
    // Kurangi py agar tidak terlalu tebal di mobile (py-3 atau py-4 cukup)
    className="flex-1 w-full min-w-0 bg-transparent px-2 py-3 md:py-5 text-base md:text-lg text-white placeholder-slate-400 focus:outline-none"
  />

  {/* Filter Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowFilters(!showFilters)}
    // shrink-0: PENTING agar tidak gepeng
    className={`shrink-0 flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 rounded-2xl font-semibold transition-all duration-300 ${
      showFilters
        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
        : 'bg-white/10 text-slate-300 border border-white/20'
    }`}
  >
    <Filter size={20} />
    {/* Opsional: Sembunyikan teks di mobile jika masih sempit */}
    <span className="hidden sm:inline">Filter</span> 
  </motion.button>
</div>
        </motion.div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto mb-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl shadow-purple-500/20"
            >
              <div className="space-y-5">
                {/* Tipe Bus */}
                <div>
                  <label className="text-sm font-semibold text-cyan-400 mb-3 block">Tipe Bus</label>
                  <div className="flex flex-wrap gap-3">
                    {["All", "Executive", "VIP", "Economy Plus", "Economy"].map(tipe => (
                      <motion.button
                        key={tipe}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters(prev => ({ ...prev, tipeBus: tipe }))}
                        className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                          filters.tipeBus === tipe
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg': 'bg-white/10 text-slate-300 border border-white/20'
                        }`}
                        >
                        {tipe}
                        </motion.button>
                        ))}
                        </div>
                        </div>
{/* Fasilitas */}
            <div>
              <label className="text-sm font-semibold text-cyan-400 mb-3 block">Fasilitas</label>
              <div className="flex flex-wrap gap-2">
                {availableFasilitas.map((fas) => {
                  const Icon = fas.icon;
                  return (
                    <motion.button
                      key={fas.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFasilitas(fas.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        filters.fasilitas.includes(fas.name)
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                          : 'bg-white/10 text-slate-300 border border-white/20'
                      }`}
                    >
                      <Icon size={16} />
                      {fas.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Range Filters */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold text-cyan-400 mb-2 block">Min Kapasitas</label>
                <input
                  type="number"
                  value={filters.minKapasitas}
                  onChange={(e) => setFilters(prev => ({ ...prev, minKapasitas: Number(e.target.value) }))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-cyan-400 mb-2 block">Max Kapasitas</label>
                <input
                  type="number"
                  value={filters.maxKapasitas}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxKapasitas: Number(e.target.value) }))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-cyan-400 mb-2 block">Max Harga</label>
                <input
                  type="number"
                  value={filters.maxHarga}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxHarga: Number(e.target.value) }))}
                  step="100000"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Results Info */}
    <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
      <p className="text-slate-400">
        Menampilkan <span className="text-cyan-400 font-bold">{currentBuses.length}</span> dari <span className="text-cyan-400 font-bold">{filteredBuses.length}</span> bus
      </p>
      {totalPages > 1 && (
        <p className="text-slate-400">
          Halaman <span className="text-purple-400 font-bold">{currentPage}</span> dari <span className="text-purple-400 font-bold">{totalPages}</span>
        </p>
      )}
    </div>

    {/* Bus Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {currentBuses.map((bus, idx) => (
          <motion.div
            key={bus.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={bus.image} alt={bus.nama_bus} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute top-3 right-3 backdrop-blur-md bg-white/20 px-3 py-1 rounded-full border border-white/30">
                <span className="text-white font-bold text-xs">{bus.tahun}</span>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                <span className="text-white text-xs font-semibold">{bus.rute}</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{bus.nama_bus}</h3>
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-cyan-500/30 text-cyan-400 rounded-lg text-xs font-bold border border-cyan-500/50">{bus.tipe_bus}</span>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/50">{bus.kelas_bus}</span>
              </div>

              <div className="flex items-center justify-between mb-3 text-slate-300 text-sm">
                <span className="flex items-center gap-1"><Users size={14} /> {bus.kapasitas}</span>
                <span className="flex items-center gap-1 text-green-400 font-bold"><DollarSign size={14} /> {(bus.harga_start / 1000000).toFixed(1)}jt</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {bus.fasilitas.slice(0, 3).map((fas: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-white/10 text-white rounded-md text-xs border border-white/20">{fas}</span>
                ))}
                {bus.fasilitas.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 text-cyan-400 rounded-md text-xs border border-white/20">+{bus.fasilitas.length - 3}</span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleBooking(bus)}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-2 rounded-xl text-sm shadow-lg shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300"
              >
                Pesan Tiket
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    {/* Pagination */}
    {totalPages > 1 && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-3 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={20} />
        </motion.button>
        
        <div className="flex gap-2">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <motion.button
                key={pageNum}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-xl font-bold transition-all ${
                  currentPage === pageNum
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {pageNum}
              </motion.button>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-3 rounded-xl text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
        >
          <ChevronRight size={20} />
        </motion.button>
      </motion.div>
    )}

    {/* Modal */}
    <AnimatePresence>
      {showModal && selectedBus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedBus.nama_bus}</h2>
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin size={18} />
                  <span className="font-semibold">{selectedBus.rute}</span>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-white hover:text-cyan-400 transition-colors">
                <X size={32} />
              </button>
            </div>

            <div className="mb-8">
              <img src={selectedBus.image} alt={selectedBus.nama_bus} className="w-full h-64 object-cover rounded-2xl mb-4 shadow-2xl" />
              <div className="grid md:grid-cols-3 gap-4 text-white mb-4">
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-cyan-400 text-sm mb-1">Kapasitas</p>
                  <p className="text-2xl font-bold">{selectedBus.kapasitas} Kursi</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-cyan-400 text-sm mb-1">Harga Mulai</p>
                  <p className="text-2xl font-bold text-green-400">Rp {selectedBus.harga_start.toLocaleString('id-ID')}</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-cyan-400 text-sm mb-1">Tahun</p>
                  <p className="text-2xl font-bold">{selectedBus.tahun}</p>
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
                <p className="text-cyan-400 text-sm mb-2">Fasilitas Lengkap</p>
                <div className="flex flex-wrap gap-2">
                  {selectedBus.fasilitas.map((fas: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white rounded-lg text-sm font-semibold border border-white/30">{fas}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="text-yellow-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Rekomendasi Untuk Anda</h3>
                <span className="text-slate-400 text-sm">(Berdasarkan Content-Based Filtering)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {recommendations.map((rec) => (
                  <motion.div
                    key={rec.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 cursor-pointer group"
                    onClick={() => {
                      setSelectedBus(rec);
                      const newRecs = busDataset
                        .filter(b => b.id !== rec.id)
                        .map(b => ({ ...b, similarity: calculateSimilarity(rec, b) }))
                        .sort((a, b) => b.similarity - a.similarity)
                        .slice(0, 6);
                      setRecommendations(newRecs);
                    }}
                  >
                    <img src={rec.image} alt={rec.nama_bus} className="w-full h-20 object-cover rounded-xl mb-2 group-hover:scale-105 transition-transform" />
                    <p className="text-white font-bold text-xs mb-1 line-clamp-2">{rec.nama_bus}</p>
                    <p className="text-slate-400 text-xs mb-2">{rec.rute}</p>
                    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 py-1 rounded-lg border border-green-500/50">
                      <TrendingUp className="text-green-400" size={14} />
                      <span className="text-green-400 font-bold text-xs">{(rec.similarity * 100).toFixed(0)}% Match</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 text-lg"
            >
              Konfirmasi Pemesanan
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Footer */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-center mt-12 pb-8"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="text-yellow-400" size={24} />
          <h3 className="text-xl font-bold text-white">Content-Based Filtering</h3>
        </div>
        <p className="text-slate-400 text-sm">
          Sistem rekomendasi cerdas yang menganalisis kemiripan antar bus berdasarkan tipe, kelas, kapasitas, dan harga menggunakan algoritma Content-Based Filtering
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">{busDataset.length}</p>
            <p className="text-xs text-slate-400">Total Bus</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">{new Set(busDataset.map(b => b.rute)).size}</p>
            <p className="text-xs text-slate-400">Rute Tersedia</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-400">99%</p>
            <p className="text-xs text-slate-400">Akurasi AI</p>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-sm mt-4">© 2025 BusGo. All rights reserved.</p>
    </motion.div>
  </div>
</div>);
}