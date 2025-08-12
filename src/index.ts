import express from 'express';
import cors from 'cors';

const app = express();

// 범용 미들웨어 설정
app.use(cors());
app.use(express.json());

// 서버가 살아있는지 확인하는 기본 경로
app.get('/', (req, res) => {
  res.status(200).send('API Server is running successfully!');
});

// 테스트할 API 경로
app.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello from the Vercel + Express + TypeScript API!',
    timestamp: new Date().toISOString(),
  });
});

// Vercel 환경에서는 app.listen()을 호출하지 않습니다.
// Vercel이 서버를 직접 관리하고 실행합니다.
// 로컬 개발을 위해 조건부로 listen을 추가할 수 있습니다.
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Local server is running on http://localhost:${port}`);
  });
}

// Vercel이 사용할 수 있도록 Express 앱을 내보냅니다.
export default app;