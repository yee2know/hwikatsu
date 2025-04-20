"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";

const menuItems = {
  hwicatsu: {
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
    details: {
      ingredients: [
        "최상급 돼지고기",
        "특별한 휘발유 배합",
        "신선한 계란",
        "고급 빵가루",
        "특제 소스",
      ],
      cookingMethod: [
        "고기를 특별한 방식으로 숙성",
        "정밀한 온도에서 휘발유로 튀김",
        "특별한 소스와 함께 제공",
      ],
      serving: ["신선한 야채와 함께", "특제 소스 제공", "밥과 함께 제공"],
    },
  },
  "hwicatsu-deluxe": {
    name: "휘까스 탕",
    price: "159,000원",
    description: "고급 휘발유에 담긴 휘까스",
    image: "/images/katsu-2.jpg",
    features: [
      "특별한 날을 위한 메뉴",
      "더욱 풍부한 휘발유 맛",
      "특별한 소스 제공",
      "당일 한정 5개",
    ],
    details: {
      ingredients: [
        "특별한 품종의 돼지고기",
        "프리미엄 휘발유",
        "유기농 계란",
        "수제 빵가루",
        "특별한 소스",
      ],
      cookingMethod: [
        "특별한 방식으로 숙성",
        "정밀한 온도 제어",
        "특별한 튀김 방식",
      ],
      serving: ["신선한 야채와 함께", "특별한 소스 제공", "프리미엄 밥과 함께"],
    },
  },
  "hwicatsu-premium": {
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
    details: {
      ingredients: [
        "최고급 돼지고기",
        "프리미엄 휘발유",
        "유기농 계란",
        "수제 빵가루",
        "특별한 소스",
      ],
      cookingMethod: [
        "특별한 숙성 방식",
        "정밀한 온도 제어",
        "전문 쉐프의 특별한 조리",
      ],
      serving: ["신선한 야채와 함께", "특별한 소스 제공", "프리미엄 밥과 함께"],
    },
  },
};

export default function MenuDetailPage({ params }: { params: { id: string } }) {
  const menuItem = menuItems[params.id as keyof typeof menuItems];

  if (!menuItem) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">메뉴를 찾을 수 없습니다</h1>
          <Link href="/menu" className="text-blue-600 hover:text-blue-800">
            메뉴 목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={menuItem.image}
              alt={menuItem.name}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {menuItem.name}
          </h1>
          <p className="text-lg md:text-xl">{menuItem.price}</p>
        </motion.div>
      </section>

      {/* Menu Details */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">메뉴 설명</h2>
              <p className="text-gray-600">{menuItem.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">주요 재료</h3>
                <ul className="space-y-2">
                  {menuItem.details.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-600">
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
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">조리 방법</h3>
                <ul className="space-y-2">
                  {menuItem.details.cookingMethod.map((method, index) => (
                    <li key={index} className="flex items-center text-gray-600">
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
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">서빙</h3>
                <ul className="space-y-2">
                  {menuItem.details.serving.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/reservation"
                className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                예약하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
