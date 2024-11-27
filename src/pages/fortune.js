import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FortunePage() {
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [selectedType, setSelectedType] = useState('daily');
  const [zodiacSign, setZodiacSign] = useState('');
  const [chineseSign, setChineseSign] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateZodiacSign = (date) => {
    if (!date) return '';
  
    const month = parseInt(date.split('-')[1]);
    const day = parseInt(date.split('-')[2]);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return '양자리';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return '황소자리';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return '쌍둥이자리';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return '게자리';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return '사자자리';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return '처녀자리';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return '천칭자리';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return '전갈자리';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return '사수자리';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return '염소자리';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return '물병자리';
    return '물고기자리';
  };

  const calculateChineseSign = (date) => {
    if (!date) return '';
  
    const year = parseInt(date.split('-')[0]);
    const zodiacArray = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
    return zodiacArray[year % 12];
  };

  const handleBirthdateChange = (e) => {
    const date = e.target.value;
    setBirthdate(date);
    setZodiacSign(calculateZodiacSign(date));
    setChineseSign(calculateChineseSign(date));
  };

  const fortuneScores = {
    love: 85,
    money: 70,
    health: 90,
    career: 75
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <nav className="header">
        <div className="header-content">
          <a href="/" className="logo">✧ Mystical Fortune ✧</a>
        </div>
      </nav>

      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="bg-gray-900/70 backdrop-blur-md rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-8">
            운세 보기
          </h1>

          {/* 입력 섹션 */}
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">생년월일</label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={handleBirthdateChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md text-white px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">성별</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md text-white px-4 py-2"
                >
                  <option value="">선택하세요</option>
                  <option value="male">남성</option>
                  <option value="female">여성</option>
                </select>
              </div>
            </div>

            {/* 자동 계산된 별자리와 띠 표시 */}
            {birthdate && (
              <div className="grid grid-cols-2 gap-4 bg-gray-800/50 p-4 rounded-md">
                <div>
                  <span className="text-gray-400">별자리:</span>
                  <span className="ml-2 text-yellow-500">{zodiacSign}</span>
                </div>
                <div>
                  <span className="text-gray-400">띠:</span>
                  <span className="ml-2 text-yellow-500">{chineseSign}</span>
                </div>
              </div>
            )}

            {/* 운세 종류 선택 */}
            <div className="flex border-b border-gray-700">
              {['daily', 'weekly', 'monthly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`flex-1 py-2 ${
                    selectedType === type 
                      ? 'text-yellow-500 border-b-2 border-yellow-500' 
                      : 'text-gray-400'
                  }`}
                >
                  {type === 'daily' ? '오늘의 운세' : type === 'weekly' ? '주간 운세' : '월간 운세'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-md shadow-lg transition-all duration-300"
            >
              운세 보기
            </button>
          </div>

          {/* 결과 섹션 */}
          {showResult && (
            <div className="space-y-8 mt-8 bg-gray-800/50 p-6 rounded-lg">
              {/* 오늘의 운세 총평 */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                  {selectedType === 'daily' ? '오늘의 운세' : 
                   selectedType === 'weekly' ? '이번 주 운세' : '이번 달 운세'}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  긍정적인 에너지가 가득한 시기입니다. 새로운 시도나 도전을 한다면 좋은 결과를 얻을 수 있습니다.
                  특히 대인관계에서 좋은 인연을 만날 수 있으니 적극적인 소통을 추천합니다.
                </p>
              </div>

              {/* 운세 지수 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(fortuneScores).map(([category, score]) => (
                  <div key={category} className="bg-gray-700/50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-300 mb-2">
                      {category === 'love' ? '애정운' :
                       category === 'money' ? '금전운' :
                       category === 'health' ? '건강운' : '사업운'}
                    </div>
                    <div className="relative h-32 w-4 mx-auto bg-gray-600 rounded">
                      <div 
                        className="absolute bottom-0 w-full rounded transition-all duration-500"
                        style={{
                          height: `${score}%`,
                          background: 'linear-gradient(to top, #ffd700, #ff8c00)'
                        }}
                      />
                    </div>
                    <div className="mt-2 font-bold text-yellow-500">{score}%</div>
                  </div>
                ))}
              </div>

              {/* 행운의 아이템 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-300 mb-2">행운의 색상</div>
                  <div className="text-yellow-500 font-bold">블루</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-300 mb-2">행운의 숫자</div>
                  <div className="text-yellow-500 font-bold">7</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-300 mb-2">행운의 방향</div>
                  <div className="text-yellow-500 font-bold">동쪽</div>
                </div>
              </div>

              {/* 상세 조언 */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-yellow-500">상세 운세</h4>
                <div className="grid gap-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-400 mb-2">애정운</h5>
                    <p className="text-gray-300">현재 당신의 매력이 높아지는 시기입니다. 새로운 만남이 있다면 적극적으로 다가가보세요.</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-400 mb-2">금전운</h5>
                    <p className="text-gray-300">예상치 못한 수입이 생길 수 있습니다. 하지만 무리한 지출은 피하는 것이 좋겠습니다.</p>
                  </div>
                </div>
              </div>

              {/* 공유 버튼 */}
              <div className="flex justify-end gap-2 mt-6">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-md text-sm transition-colors text-white">
                  인스타그램 공유
                </button>
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-md text-sm transition-colors text-white">
                  카카오톡 공유
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}