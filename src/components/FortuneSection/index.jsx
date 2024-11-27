import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FortuneSection() {
    const [birthdate, setBirthdate] = useState('');
    const [zodiacSign, setZodiacSign] = useState('');
    const [selectedTab, setSelectedTab] = useState('daily');
    const [showResult, setShowResult] = useState(false);

    const zodiacSigns = [
        "양자리", "황소자리", "쌍둥이자리", "게자리", 
        "사자자리", "처녀자리", "천칭자리", "전갈자리",
        "사수자리", "염소자리", "물병자리", "물고기자리"
    ];

    const fortuneData = {
        daily: {
            title: "오늘의 운세",
            description: "긍정적인 에너지가 가득한 하루입니다.",
            categories: {
                love: { score: 85, advice: "소중한 인연을 만날 수 있는 날입니다." },
                money: { score: 70, advice: "투자나 재테크에 신중을 기해야 합니다." },
                health: { score: 90, advice: "건강 관리에 좋은 시기입니다." },
                career: { score: 75, advice: "업무에서 인정받을 수 있는 기회가 있습니다." }
            }
        },
        weekly: {
            title: "주간 운세",
            description: "이번 주는 대인관계에서 특별한 발전이 있을 수 있습니다.",
            categories: {
                love: { score: 75, advice: "마음을 열고 새로운 만남을 가져보세요." },
                money: { score: 80, advice: "예상치 못한 수입이 있을 수 있습니다." },
                health: { score: 85, advice: "적절한 운동으로 건강을 관리하세요." },
                career: { score: 70, advice: "새로운 프로젝트를 시작하기 좋은 시기입니다." }
            }
        },
        monthly: {
            title: "월간 운세",
            description: "이번 달은 자기 발전과 성장의 시기입니다.",
            categories: {
                love: { score: 70, advice: "안정적인 관계 발전이 예상됩니다." },
                money: { score: 90, advice: "재물운이 상승하는 시기입니다." },
                health: { score: 75, advice: "규칙적인 생활습관이 중요합니다." },
                career: { score: 85, advice: "경력 개발에 좋은 기회가 있을 것입니다." }
            }
        }
    };

    return (
      <div className="min-h-screen py-12 px-4">
          <div className="max-w-4xl mx-auto bg-gray-900/70 rounded-lg backdrop-blur-md text-white">
              <div className="p-6">
                  <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                      운세 확인하기
                  </h1>
  
                  {/* 입력 폼 */}
                  <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                              type="date"
                              value={birthdate}
                              onChange={(e) => setBirthdate(e.target.value)}
                              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                          />
                          <select
                              value={zodiacSign}
                              onChange={(e) => setZodiacSign(e.target.value)}
                              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                          >
                              <option value="">별자리 선택</option>
                              {zodiacSigns.map(sign => (
                                  <option key={sign} value={sign}>{sign}</option>
                              ))}
                          </select>
                      </div>
  
                      <button
                          onClick={() => setShowResult(true)}
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-md py-2 px-4 transition-all"
                      >
                          운세 보기
                      </button>
                  </div>
  
                  {/* 운세 결과 */}
                  {showResult && (
                      <div className="space-y-6">
                          {/* 탭 메뉴 */}
                          <div className="flex border-b border-gray-700">
                              {['daily', 'weekly', 'monthly'].map((tab) => (
                                  <button
                                      key={tab}
                                      onClick={() => setSelectedTab(tab)}
                                      className={`flex-1 py-2 px-4 text-center ${
                                          selectedTab === tab 
                                              ? 'border-b-2 border-yellow-500 text-yellow-500' 
                                              : 'text-gray-400'
                                      }`}
                                  >
                                      {tab === 'daily' ? '오늘의 운세' : tab === 'weekly' ? '주간 운세' : '월간 운세'}
                                  </button>
                              ))}
                          </div>
  
                          {/* 운세 내용 */}
                          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-md">
                              <h3 className="text-2xl font-bold text-center mb-4">
                                  {fortuneData[selectedTab].title}
                              </h3>
                              <p className="text-lg mb-6">{fortuneData[selectedTab].description}</p>
  
                              {/* 운세 카테고리 */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {Object.entries(fortuneData[selectedTab].categories).map(([key, category]) => (
                                      <div key={key} className="bg-gray-700/50 p-4 rounded-lg">
                                          <h4 className="text-lg font-semibold mb-2 capitalize">{key}</h4>
                                          <div className="flex items-center mb-2">
                                              <div className="w-full bg-gray-600 rounded-full h-4">
                                                  <div
                                                      className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                                                      style={{ width: `${category.score}%` }}
                                                  />
                                              </div>
                                              <span className="ml-2 font-bold">{category.score}%</span>
                                          </div>
                                          <p className="text-sm text-gray-300">{category.advice}</p>
                                      </div>
                                  ))}
                              </div>
  
                              {/* 공유 버튼 */}
                              <div className="flex justify-end gap-2 mt-6">
                                  {['페이스북', '트위터', '카카오톡'].map((platform) => (
                                      <button
                                          key={platform}
                                          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm transition-colors"
                                      >
                                          {platform}으로 공유
                                      </button>
                                  ))}
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      </div>
  );
}