// import 또는 server에서 설정된 앱을 구동시키는것만 담당하는 파일. 즉 초기화.
// server.js에서 분리시킨 후 package.json script(dev) 수정 필수

import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
