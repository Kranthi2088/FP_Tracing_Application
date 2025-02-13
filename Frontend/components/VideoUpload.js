'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FORMATS = {
  'image/jpeg': ['.jpeg', '.jpg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
};

export default function ImageUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [analyzeClicked, setAnalyzeClicked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size exceeds 10MB limit');
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setSelectedFile(file);
  }, []);

  const handleAnalyze = async () => {
    if (!selectedFile || analyzeClicked) return;

    setAnalyzeClicked(true);
    toast.success('Analyzing image...');

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.result);
      toast.success('Analysis complete!');
    } catch (error) {
      console.error('Analysis failed:', error);
      toast.error('Analysis failed: ' + error.message);
    } finally {
      setAnalyzeClicked(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FORMATS,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <AnimatePresence mode="wait">
        {!previewUrl ? (
          <motion.div
            key="upload-zone"
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%', filter: 'blur(5px)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300
                ${isDragActive ? 'border-blue-500 bg-gray-50' : 'border-gray-300 hover:border-gray-400'}`}
            >
              <input {...getInputProps()} />
              <motion.div initial={{ scale: 1 }} animate={{ scale: isDragActive ? 1.05 : 1 }}>
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
              </motion.div>
              <p className="mt-4 text-lg text-gray-600">
                {isDragActive ? 'Drop your image here' : 'Drag & drop your image here or click to browse'}
              </p>
              <p className="mt-2 text-sm text-gray-500">Supported formats: JPEG, PNG, GIF (max 10MB)</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: '100%', filter: 'blur(5px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="relative">
              <motion.img src={previewUrl} className="w-full rounded-lg" alt="Uploaded preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setPreviewUrl(null);
                  setUploadStatus('idle');
                  setUploadProgress(0);
                  setResult(null);
                  setAnalyzeClicked(false);
                  setSelectedFile(null);
                }}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze}
                disabled={analyzeClicked}
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
              >
                Analyze Image
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
