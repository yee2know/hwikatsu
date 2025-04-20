"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

export default function TechPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/tech-hero.jpg"
              alt="기술 소개"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">기술 소개</h1>
          <p className="text-xl md:text-2xl">휘까스의 혁신적인 요리 기술</p>
        </motion.div>
      </section>

      {/* Temperature Control Section */}
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
                  src="/images/temperature-control.jpg"
                  alt="온도 조절 시스템"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  정밀 온도 제어
                </h2>
                <div className="space-y-4 text-gray-600 text-sm md:text-base">
                  <p>
                    휘까스는 180°C의 정확한 온도에서 튀겨집니다. 이는 고기의
                    육즙을 최대한 보존하면서 겉은 바삭하게 만드는 최적의
                    온도입니다.
                  </p>
                  <p>
                    AI 기반 온도 제어 시스템이 실시간으로 온도를 모니터링하고
                    조절하여 모든 돈까스가 완벽한 온도에서 조리됩니다.
                  </p>
                  <p>
                    이 기술은 최휘현 쉐프님을 이 자리에 오르기 까지 지원을
                    아끼지 않았던 위대한 원종호님의 도움을 받아 제작되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oil Mixture Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 md:p-8 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  특별한 기름 배합
                </h2>
                <div className="space-y-4 text-gray-600 text-sm md:text-base">
                  <p>휘까스는 특별히 개발된 기름 배합을 사용합니다:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>휘발유 100%</li>
                    <li>특수 첨가제로 향상된 발연점</li>
                    <li>고급스러운 황금빛을 위한 특수 배합</li>
                  </ul>
                  <p>
                    사람이 먹을 수 있는 최적의 휘발유를 찾아 휘현 쉐프님은 세계
                    곳곳을 탐방하며 최고급 휘발유를 얻어낼 수 있었습니다.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
                <Image
                  src="/images/oil-mixture.jpg"
                  alt="기름 배합"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Robot Section */}
      <section className="py-12 md:py-20">
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
                  src="/images/robot-system.jpg"
                  alt="로봇 서빙 시스템"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  로봇 서빙 시스템
                </h2>
                <div className="space-y-4 text-gray-600 text-sm md:text-base">
                  <p>
                    휘까스는 최첨단 로봇 시스템을 도입하여 완벽한 서비스를
                    제공합니다:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AI 주문 로봇: 고객의 주문을 정확하게 처리</li>
                    <li>서빙 로봇: 완성된 돈까스를 안전하게 운반</li>
                    <li>청소 로봇: 매장을 항상 깨끗하게 유지</li>
                  </ul>
                  <p>
                    모든 로봇은 실시간으로 서로 통신하며 최적의 서비스를
                    제공합니다.
                  </p>
                  <p>
                    이 기술은 최휘현 쉐프님에게 영감을 받아 위대한 원종호님이
                    특별히 제작한 첨단공학의 정수입니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
