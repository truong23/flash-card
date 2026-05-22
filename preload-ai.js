import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2';

// Configure for browser-only caching
env.allowLocalModels = false;

async function preloadModel() {
  try {
    console.log("%c[AI Preload] Đang tải ngầm model AI vào cache trình duyệt...", "color: #7c3aed; font-weight: bold;");
    // Just initializing the pipeline will force it to download and store in the Cache API
    const extractor = await pipeline('feature-extraction', 'Xenova/paraphrase-multilingual-MiniLM-L12-v2', {
      progress_callback: (data) => {
        if (data.status === 'progress') {
           // We can log progress or just stay silent
        }
      }
    });
    console.log("%c[AI Preload] Tải ngầm thành công! Model đã sẵn sàng cho trang Luyện dịch.", "color: #10b981; font-weight: bold;");
  } catch (err) {
    console.error("❌ Lỗi tải ngầm Model AI:", err);
  }
}

// Delay the preload slightly so it doesn't compete with initial page rendering or auth checks
setTimeout(preloadModel, 3000);
