"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

const menuItems = [
  {
    id: "hwicatsu",
    name: "휘까스",
    price: "109,000원",
    description: "휘발유 100%로 만든 프리미엄 돈까스",
    image: "/images/katsu-1.jpg",
    features: [
      "최상급 돼지고기 사용",
      "특별한 휘발유 배합",
      "정밀 온도 제어",
      "당일 한정 10개",
    ],
  },
  {
    id: "hwicatsu-deluxe",
    name: "휘까스 탕",
    price: "159,000원",
    description: "고급 휘발유에 담긴 휘까스",
    image: "/images/katsu-2.jpg",
    features: [
      "특별한 날을 위한 메뉴",
      "더욱 풍부한 휘발유 맛",
      "특별한 소스 제공",
      "당일 한정 5개",
    ],
  },
  {
    id: "hwicatsu-premium",
    name: "휘까스 스페샬",
    price: "300,000,000원",
    description: "최고급 휘까스의 정점",
    image: "/images/katsu-3.jpg",
    features: [
      "최휘현 쉐프를 고기로 사용",
      "특별한 휘발유 배합",
      "전문 쉐프의 특별한 조리",
      "인생 한정 1개",
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-katsu.jpg"
              alt="휘까스 메뉴"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">메뉴</h1>
          <p className="text-lg md:text-xl">최고의 휘까스를 만나보세요</p>
        </motion.div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Link href={`/menu/${item.id}`} key={item.id}>
                <motion.div
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      {item.price}
                    </p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
