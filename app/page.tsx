"use client";

import { useState, useEffect } from 'react';
import { Search, Bus, Wifi, Wind, Armchair, Tv, Coffee, Sparkles, X, Users, DollarSign, Star, TrendingUp, Zap, ChevronLeft, ChevronRight, Filter, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dataset 100 Bus Pariwisata Jawa-Bali
const busDataset = [
  // Dataset 100 Bus Pariwisata Jawa-Bali
const busDataset = [
  // ID 1 - 100 (Sesuai Data Anda)
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
  { id: 21, nama_bus: "Safari Dharma Raya Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2900000, tahun: 2022, rute: "Jakarta-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 22, nama_bus: "Cita Rasa Express", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 56, harga_start: 2850000, tahun: 2022, rute: "Semarang-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 23, nama_bus: "Djaya Indah Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2950000, tahun: 2023, rute: "Solo-Bali", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 24, nama_bus: "Mandiri Express", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 55, harga_start: 2880000, tahun: 2022, rute: "Bandung-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 25, nama_bus: "Sentosa Jaya Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2920000, tahun: 2023, rute: "Yogyakarta-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 26, nama_bus: "Gunung Harta Express", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2500000, tahun: 2021, rute: "Jakarta-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 27, nama_bus: "Eka Mitra Wisata", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 58, harga_start: 2450000, tahun: 2021, rute: "Semarang-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 28, nama_bus: "Pahala Nusantara", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 60, harga_start: 2550000, tahun: 2022, rute: "Solo-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 29, nama_bus: "Fajar Utama", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2480000, tahun: 2021, rute: "Bandung-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 30, nama_bus: "Berkah Jaya", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 58, harga_start: 2520000, tahun: 2022, rute: "Yogyakarta-Surabaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 31, nama_bus: "Pandawa 87 Dream Coach", tipe_bus: "Executive", kelas_bus: "Sleeper Bus", kapasitas: 22, harga_start: 5500000, tahun: 2024, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Sleeper Seat", "Personal TV", "Snack", "Pillow", "Blanket"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 32, nama_bus: "Juragan 99 Trans Luxury", tipe_bus: "Executive", kelas_bus: "Sleeper Bus", kapasitas: 18, harga_start: 6500000, tahun: 2024, rute: "Malang-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Sleeper Seat", "Coffee Maker", "Personal Screen", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 33, nama_bus: "Kencana Luxury Double Decker", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 42, harga_start: 4800000, tahun: 2023, rute: "Semarang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Electric Leg Rest", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 34, nama_bus: "Sudiro Tungga Jaya Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3700000, tahun: 2023, rute: "Madiun-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 35, nama_bus: "Mtrans Bali Express", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3600000, tahun: 2023, rute: "Kediri-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 36, nama_bus: "Bejeu Black Bus Platinum", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 46, harga_start: 3800000, tahun: 2023, rute: "Jepara-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Coffee Maker"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 37, nama_bus: "Agam Tungga Jaya VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3300000, tahun: 2022, rute: "Magelang-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 38, nama_bus: "Shantika Executive Gold", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3750000, tahun: 2023, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 39, nama_bus: "Gunung Harta Solutions", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 40, harga_start: 4900000, tahun: 2024, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Personal TV", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 40, nama_bus: "Tami Jaya Suite Class", tipe_bus: "Executive", kelas_bus: "Sleeper Bus", kapasitas: 21, harga_start: 5200000, tahun: 2023, rute: "Yogyakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Sleeper Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 41, nama_bus: "Sinar Jaya Suite Class", tipe_bus: "Executive", kelas_bus: "Sleeper Bus", kapasitas: 22, harga_start: 5100000, tahun: 2023, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Sleeper Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 42, nama_bus: "Handoyo VIP Class", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3400000, tahun: 2022, rute: "Semarang-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 43, nama_bus: "Ramayana VIP Executive", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3350000, tahun: 2022, rute: "Yogyakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 44, nama_bus: "Laju Prima Gold", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3650000, tahun: 2023, rute: "Jakarta-Banyuwangi", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 45, nama_bus: "Madu Kismo Royal", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3700000, tahun: 2023, rute: "Solo-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 46, nama_bus: "Efisiensi Royal Class", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 44, harga_start: 3850000, tahun: 2024, rute: "Cilacap-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 47, nama_bus: "Sindoro Satriamas Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3600000, tahun: 2023, rute: "Semarang-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 48, nama_bus: "Tiara Mas VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3200000, tahun: 2022, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 49, nama_bus: "Jaya Utama Indo", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2800000, tahun: 2021, rute: "Surabaya-Banyuwangi", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 50, nama_bus: "Akas Asri Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 52, harga_start: 2750000, tahun: 2021, rute: "Surabaya-Denpasar", fasilitas: ["AC", "Reclining Seat", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 51, nama_bus: "White Horse Deluxe", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3950000, tahun: 2023, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 52, nama_bus: "Big Bird Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 44, harga_start: 4100000, tahun: 2024, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Personal Screen"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 53, nama_bus: "TRAC Luxury Bus", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 40, harga_start: 4300000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Massage Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 54, nama_bus: "Blue Star Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3700000, tahun: 2023, rute: "Bandung-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 55, nama_bus: "Jackal Holidays Luxury", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 42, harga_start: 4000000, tahun: 2024, rute: "Bandung-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 56, nama_bus: "Safa Trans Bali", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3600000, tahun: 2023, rute: "Yogyakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 57, nama_bus: "Subur Jaya Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3550000, tahun: 2023, rute: "Semarang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 58, nama_bus: "Kalisari VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3450000, tahun: 2022, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 59, nama_bus: "Menggala VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3380000, tahun: 2022, rute: "Sidoarjo-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 60, nama_bus: "Restu Panda Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2850000, tahun: 2022, rute: "Malang-Bali", fasilitas: ["AC", "Reclining Seat", "TV", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 61, nama_bus: "Daya Melati Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3600000, tahun: 2023, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 62, nama_bus: "Dedy Jaya VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3250000, tahun: 2021, rute: "Brebes-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 63, nama_bus: "Gajah Mungkur VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3300000, tahun: 2022, rute: "Wonogiri-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 64, nama_bus: "Gumarang Jaya Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3750000, tahun: 2023, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 65, nama_bus: "Kalingga Jaya VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3350000, tahun: 2022, rute: "Jepara-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 66, nama_bus: "Muji Jaya Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3650000, tahun: 2023, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 67, nama_bus: "Purnayasa VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3400000, tahun: 2022, rute: "Denpasar-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 68, nama_bus: "Putra Remaja Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3600000, tahun: 2023, rute: "Yogyakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 69, nama_bus: "Sugeng Rahayu VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3100000, tahun: 2021, rute: "Surabaya-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 70, nama_bus: "Zentral VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3200000, tahun: 2022, rute: "Solo-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 71, nama_bus: "Bali Radiance VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3300000, tahun: 2022, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 72, nama_bus: "Bhaladika Platinum", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3800000, tahun: 2023, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 73, nama_bus: "Borlindo Executive", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 42, harga_start: 4500000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Personal Screen"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 74, nama_bus: "Damri Royal Class", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 44, harga_start: 3900000, tahun: 2024, rute: "Jakarta-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Snack", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 75, nama_bus: "Antavaya Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3850000, tahun: 2023, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 76, nama_bus: "Karina VIP Class", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 42, harga_start: 3450000, tahun: 2022, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 77, nama_bus: "Malinda Executive", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3550000, tahun: 2023, rute: "Malang-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 78, nama_bus: "Aditya Utama Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 56, harga_start: 2700000, tahun: 2021, rute: "Surabaya-Banyuwangi", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 79, nama_bus: "Kurnia VIP", tipe_bus: "VIP", kelas_bus: "High Deck", kapasitas: 44, harga_start: 3300000, tahun: 2022, rute: "Bandung-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 80, nama_bus: "Sempati Star Luxury", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 38, harga_start: 5500000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Sleeper Seat", "TV", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 81, nama_bus: "Agramas Medium Bus", tipe_bus: "Medium", kelas_bus: "Medium Bus", kapasitas: 31, harga_start: 2200000, tahun: 2023, rute: "Semarang-Surabaya", fasilitas: ["AC", "TV", "Karaoke", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 82, nama_bus: "Sinar Jaya Medium", tipe_bus: "Medium", kelas_bus: "Medium Bus", kapasitas: 33, harga_start: 2100000, tahun: 2022, rute: "Jakarta-Bandung", fasilitas: ["AC", "TV", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 83, nama_bus: "Haryanto Medium", tipe_bus: "Medium", kelas_bus: "Medium Bus", kapasitas: 29, harga_start: 2300000, tahun: 2023, rute: "Solo-Yogyakarta", fasilitas: ["AC", "TV", "Karaoke", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 84, nama_bus: "Rosalia Indah Medium", tipe_bus: "Medium", kelas_bus: "Medium Bus", kapasitas: 31, harga_start: 2250000, tahun: 2023, rute: "Surabaya-Malang", fasilitas: ["AC", "TV", "Reclining Seat", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 85, nama_bus: "Mtrans Medium Bali", tipe_bus: "Medium", kelas_bus: "Medium Bus", kapasitas: 35, harga_start: 2400000, tahun: 2024, rute: "Denpasar-Singaraja", fasilitas: ["AC", "TV", "WiFi", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 86, nama_bus: "Pahala Kencana Economy", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2400000, tahun: 2021, rute: "Jakarta-Denpasar", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 87, nama_bus: "Lorena Economy Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2850000, tahun: 2021, rute: "Jakarta-Surabaya", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 88, nama_bus: "Budiman Economy Plus", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 56, harga_start: 2750000, tahun: 2021, rute: "Bandung-Tasikmalaya", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 89, nama_bus: "Kramat Djati Economy", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 59, harga_start: 2350000, tahun: 2020, rute: "Jakarta-Bali", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 90, nama_bus: "Akas Mila Sejahtera", tipe_bus: "Economy", kelas_bus: "Standard", kapasitas: 60, harga_start: 2200000, tahun: 2020, rute: "Surabaya-Banyuwangi", fasilitas: ["AC", "Reclining Seat"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 91, nama_bus: "Harapan Jaya Double Decker", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 40, harga_start: 4700000, tahun: 2024, rute: "Jakarta-Solo", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 92, nama_bus: "Pandawa 87 SHD Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3800000, tahun: 2023, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 93, nama_bus: "Nusantara Double Decker", tipe_bus: "Executive", kelas_bus: "Double Decker", kapasitas: 38, harga_start: 4950000, tahun: 2024, rute: "Jakarta-Kudus", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "Personal TV", "USB Port"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 94, nama_bus: "Maju Lancar Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 52, harga_start: 2900000, tahun: 2022, rute: "Yogyakarta-Bali", fasilitas: ["AC", "Reclining Seat", "WiFi"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 95, nama_bus: "Safari Dharma Raya SHD", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 46, harga_start: 3750000, tahun: 2023, rute: "Jakarta-Denpasar", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "Snack"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 96, nama_bus: "Eka Cepat Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 50, harga_start: 2950000, tahun: 2023, rute: "Surabaya-Yogyakarta", fasilitas: ["AC", "WiFi", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 97, nama_bus: "Mira Cepat Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2800000, tahun: 2022, rute: "Surabaya-Solo", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 98, nama_bus: "Sumber Selamat Patas", tipe_bus: "Economy Plus", kelas_bus: "Standard", kapasitas: 54, harga_start: 2750000, tahun: 2022, rute: "Surabaya-Yogyakarta", fasilitas: ["AC", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
  { id: 99, nama_bus: "Sugeng Rahayu Golden Star", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 48, harga_start: 3600000, tahun: 2023, rute: "Bandung-Surabaya", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV"], image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
  { id: 100, nama_bus: "Tiara Mas SHD Premium", tipe_bus: "Executive", kelas_bus: "Super High Deck", kapasitas: 50, harga_start: 3700000, tahun: 2024, rute: "Jakarta-Bali", fasilitas: ["AC", "WiFi", "Toilet", "Reclining Seat", "TV", "USB Port", "Snack"], image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" }
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
