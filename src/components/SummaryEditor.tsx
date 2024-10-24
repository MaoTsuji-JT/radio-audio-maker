import React from 'react';
import { Loader2 } from 'lucide-react';

interface SummaryEditorProps {
  summary: string;
  onChange: (summary: string) => void;
}

export function SummaryEditor({ summary, onChange }: SummaryEditorProps) {
  const characterCount = summary.length;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        3. 要約の編集
      </h2>
      <div>
        <div className="relative">
          <textarea
            value={summary}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-64 p-4 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="要約内容がここに表示されます..."
          />
          {summary === '' && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 rounded-md">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-indigo-600" />
                <p className="mt-2 text-sm text-gray-600">要約を生成中...</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-2 text-right text-sm text-gray-600">
          文字数: {characterCount}
        </div>
      </div>
    </div>
  );
}