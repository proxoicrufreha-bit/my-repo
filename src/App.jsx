import React, { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import birthdayVideo from "./components/Video.mp4";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-x-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-200 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <header className="text-center pt-16 pb-8 px-4">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="text-rose-400 animate-pulse" size={32} />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Happy Birthday
            </h1>
            <Sparkles className="text-rose-400 animate-pulse" size={32} />
          </div>
          <p className="text-3xl md:text-4xl text-rose-600 font-semibold mt-4 italic">
            My Love
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-4 pb-16 space-y-12">
          {/* Love Quote */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
            <div className="flex justify-center mb-6">
              <Heart
                className="text-rose-500 fill-rose-500 animate-heartbeat"
                size={48}
              />
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic text-center">
              “If I had only seven minutes left to live, I wouldn’t waste them on
              fear or goodbyes. I would spend every second looking at you,
              loving you harder, and letting my heart tell you what words never
              could—that you are my world, my everything, and the greatest love
              of my life.
              <br />
              <br />
              With you and without you, I am never able to stop myself from
              loving you—because my heart chose you without conditions or
              endings. You are the first person my heart ever truly loved, and
              you will be the last person it ever belongs to.”
            </p>
          </section>

          {/* Video Section */}
          <section className="bg-gradient-to-br from-white/90 to-rose-50/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">

            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <video
                controls
                className="w-full h-full object-cover"
                playsInline
              >
                <source src={birthdayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          {/* Ending */}
          <section className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-700 mb-6">
              You Are My Everything
            </h3>

            <div className="flex justify-center gap-4 flex-wrap mb-6">
              {["❤️", "🎂", "🎁", "🌹", "💖", "🎉"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-5xl animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Here's to many more beautiful years together!
            </p>

            <div className="text-4xl md:text-5xl font-bold text-rose-600 animate-pulse mt-4">
              I Love You! 💝
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
