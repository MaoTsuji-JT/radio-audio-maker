import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { RadioInfo } from './components/RadioInfo';
import { SummaryEditor } from './components/SummaryEditor';
import { VoiceSettings } from './components/VoiceSettings';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [uploadedText, setUploadedText] = useState('');
  const [radioInfo, setRadioInfo] = useState({
    title: '',
    audience: '',
    purpose: '',
    language: 'ja',
  });
  const [summary, setSummary] = useState('');
  const [voiceSettings, setVoiceSettings] = useState({
    voiceType: '女性',
    duration: 'およそ3分',
  });
  const [audioUrl, setAudioUrl] = useState('');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

  const handleFileUpload = (text: string) => {
    setUploadedText(text);
  };

  const handleRadioInfoChange = (field: string, value: string) => {
    setRadioInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateSummary = () => {
    setIsGeneratingSummary(true);
    // Simulate API call for summary generation
    setTimeout(() => {
      setSummary('Generated summary would appear here...');
      setIsGeneratingSummary(false);
    }, 1500);
  };

  const handleGenerateAudio = () => {
    setIsGeneratingAudio(true);
    // Simulate API call for audio generation
    setTimeout(() => {
      setAudioUrl('dummy-audio-url.mp3');
      setIsGeneratingAudio(false);
    }, 2000);
  };

  const canGenerateAudio = Boolean(
    uploadedText && radioInfo.title && radioInfo.purpose && summary
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          ラジオ作成ツール
        </h1>
        
        <FileUpload onUpload={handleFileUpload} />
        
        <RadioInfo
          {...radioInfo}
          onChange={handleRadioInfoChange}
          onGenerateSummary={handleGenerateSummary}
          isGeneratingSummary={isGeneratingSummary}
        />
        
        <SummaryEditor
          summary={summary}
          onChange={setSummary}
        />
        
        <VoiceSettings
          voiceType={voiceSettings.voiceType}
          duration={voiceSettings.duration}
          onChange={(field, value) =>
            setVoiceSettings((prev) => ({ ...prev, [field]: value }))
          }
        />
        
        <div className="flex justify-center">
          <button
            onClick={handleGenerateAudio}
            disabled={!canGenerateAudio || isGeneratingAudio}
            className={`py-3 px-6 rounded-lg text-white font-medium ${
              !canGenerateAudio || isGeneratingAudio
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isGeneratingAudio ? '生成中...' : 'ラジオ音声を生成する'}
          </button>
        </div>

        {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      </div>
    </div>
  );
}

export default App;