"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

export default function ChefPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/chef-hero.jpg"
              alt="요리사 소개"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">요리사 소개</h1>
          <p className="text-xl md:text-2xl">휘까스를 만드는 마스터 셰프</p>
        </motion.div>
      </section>

      {/* Chef Profile Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/chef-profile.jpg"
                  alt="요리사 프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  최휘현 셰프
                </h2>
                <div className="space-y-4 text-gray-600 text-sm md:text-base">
                  <p>
                    20년 이상의 경력을 가진 돈까스 전문 셰프입니다. 일본에서
                    수년간 수학하며 돈까스의 정수를 배웠고, 귀국 후 한국인의
                    입맛에 맞는 프리미엄 돈까스를 개발했습니다.
                  </p>
                  <p>
                    매일 아침 직접 고기를 선별하고(이 핑계로 고기를 매일 10kg씩
                    먹습니다), 특별한 레시피로 만든 휘발유를 사용하여 최상의
                    맛을 만들어냅니다.
                  </p>
                  <p>
                    "단 하나의 돈까스도 소홀히 하지 않습니다. 모든 고객에게
                    최고의 맛을 선사하는 것이 제가 추구하는 요리 철학입니다."
                  </p>
                  <p>춘천시 효자동 192-1 강원대 새롬관 남 1516</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            경력 및 수상
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">주요 경력</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 북평고등학교 졸업 (2024)</li>
                <li>• 진격의 거인 4기 2파트까지 시청(2025)</li>
                <li>• 강원대학교 정치외교학과 재학 (2025-현재)</li>
                <li>• 휘까스 창업 (2025-현재)</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">수상 경력</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2020 강원도 동해시 푸드파이팅 대회 은상</li>
                <li>• 2022 동해시 푸르지오 아파트 돈까스 챔피언스 우승</li>
                <li>• 2023 가장 굵은 똥 싸기 대회 예선 진출</li>
                <li>• 2024 돈까스 아이디어 경진 대회 최우수상</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            요리 철학
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">정확성</h3>
              <p className="text-gray-600">모든 과정에서 정확한 기술과 측정</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">정성</h3>
              <p className="text-gray-600">모든 요리에 담긴 정성과 열정</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">혁신</h3>
              <p className="text-gray-600">끊임없는 연구와 새로운 시도</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
