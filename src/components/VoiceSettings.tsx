import React from 'react';

interface VoiceSettingsProps {
  voiceType: string;
  duration: string;
  onChange: (field: string, value: string) => void;
}

export function VoiceSettings({
  voiceType,
  duration,
  onChange,
}: VoiceSettingsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        4. 音声設定
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            声のタイプ
          </label>
          <select
            value={voiceType}
            onChange={(e) => onChange('voiceType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="女性">女性</option>
            <option value="男性">男性</option>
            <option value="中性的な声">中性的な声</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ラジオの長さ
          </label>
          <select
            value={duration}
            onChange={(e) => onChange('duration', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="およそ1分">およそ1分</option>
            <option value="およそ3分">およそ3分</option>
            <option value="およそ10分">およそ10分</option>
          </select>
        </div>
      </div>
    </div>
  );
}