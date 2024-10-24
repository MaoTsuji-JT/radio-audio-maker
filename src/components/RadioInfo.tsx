import React from 'react';
import { Loader2 } from 'lucide-react';

interface RadioInfoProps {
  title: string;
  audience: string;
  purpose: string;
  language: string;
  onChange: (field: string, value: string) => void;
  onGenerateSummary: () => void;
  isGeneratingSummary: boolean;
}

export function RadioInfo({
  title,
  audience,
  purpose,
  language,
  onChange,
  onGenerateSummary,
  isGeneratingSummary,
}: RadioInfoProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        2. ラジオ情報の入力
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => onChange('title', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="ラジオのタイトルを入力"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            対象オーディエンス
          </label>
          <input
            type="text"
            value={audience}
            onChange={(e) => onChange('audience', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="想定する聴取者層"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            目的
          </label>
          <textarea
            value={purpose}
            onChange={(e) => onChange('purpose', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-24 resize-none"
            placeholder="ラジオの目的を詳しく入力してください"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            言語
          </label>
          <select
            value={language}
            onChange={(e) => onChange('language', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="ja">日本語</option>
            <option value="en">英語</option>
          </select>
        </div>
        <button
          onClick={onGenerateSummary}
          disabled={isGeneratingSummary}
          className={`w-full py-2 px-4 rounded-md text-white font-medium flex items-center justify-center space-x-2 ${
            isGeneratingSummary
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isGeneratingSummary && (
            <Loader2 className="h-5 w-5 animate-spin" />
          )}
          <span>
            {isGeneratingSummary ? '要約生成中...' : '要約を生成する'}
          </span>
        </button>
      </div>
    </div>
  );
}