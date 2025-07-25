const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// 🔥 CORS configuration for frontend on Vercel
app.use(
  cors({
    origin: "https://codexscan.vercel.app", // replace with your actual deployed frontend URL
    credentials: true,
  })
);

app.use(express.json());

// ✅ Basic test route to check backend is running
app.get("/", (req, res) => {
  res.send("CodexScan Backend is running ✅");
});

// ✅ AI routes
app.use("/ai", aiRoutes);

// 🔥 Server listen if run directly (Render uses PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
