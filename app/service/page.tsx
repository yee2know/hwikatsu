"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const faqs = [
  {
    question: "휘까스는 어떻게 주문하나요?",
    answer:
      "현재는 매장 방문 주문만 가능합니다. 매일 오전 11시부터 판매를 시작하며, 한정 수량(10개)이 소진될 때까지 판매합니다.",
  },
  {
    question: "휴무일은 언제인가요?",
    answer: "매주 월요일은 휴무일입니다. 공휴일은 정상 영업합니다.",
  },
  {
    question: "주차는 가능한가요?",
    answer:
      "푸르지오 아파트 내 주차장을 이용하실 수 있습니다. 1시간 무료 주차가 가능합니다.",
  },
  {
    question: "단체 주문은 가능한가요?",
    answer:
      "현재는 단체 주문을 받지 않고 있습니다. 매장 방문 주문만 가능합니다.",
  },
  {
    question: "배달 서비스는 제공되나요?",
    answer:
      "현재는 배달 서비스를 제공하지 않습니다. 매장에서 직접 주문하셔야 합니다.",
  },
];

export default function Service() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="/images/hero-katsu.jpg"
              alt="휘까스 대표 이미지"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">고객 서비스</h1>
          <p className="text-lg">자주 묻는 질문과 문의하기</p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            자주 묻는 질문
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            문의하기
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              문의하기
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">영업 시간</h4>
                <p className="text-gray-600">화요일 - 일요일: 11:00 - 20:00</p>
                <p className="text-gray-600">월요일: 휴무</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">연락처</h4>
                <p className="text-gray-600">전화: 010-1234-5678</p>
                <p className="text-gray-600">이메일: hwikatsu@example.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
