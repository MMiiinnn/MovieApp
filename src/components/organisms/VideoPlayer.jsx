import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Icon from "../atoms/Icon";

const VideoPlayer = () => {
  const { movie } = useOutletContext();
  const [server, setServer] = useState(0);

  // Danh sách các server streaming ổn định nhất hiện nay
  const servers = [
    {
      name: "Server 1",
      tag: "Auto - Best",
      url: `https://multiembed.mov/?video_id=${movie.id}&tmdb=1`,
    },
    {
      name: "Server 2",
      tag: "Hybrid",
      url: `https://player.smashy.stream/movie/${movie.id}`,
    },
    {
      name: "Server 3",
      tag: "Pro",
      url: `https://vidsrc.pro/embed/movie/${movie.id}`,
    },
    {
      name: "Server 4",
      tag: "Alt",
      url: `https://vidsrc.cc/v2/embed/movie/${movie.id}`,
    },
  ];

  return (
    <div className="w-full relative group animate-in fade-in zoom-in duration-700 space-y-6">
      
      {/* 🛠️ Server Selection UI: Tối ưu cho cả Mobile & Desktop */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-1 relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-green-500 rounded-full"></div>
          <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
            Select Server:
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {servers.map((srv, index) => (
            <button
              key={srv.name}
              onClick={() => setServer(index)}
              className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-[10px] lg:text-xs font-black uppercase tracking-wider transition-all duration-500 border-2 ${
                server === index
                  ? "bg-green-600 text-white border-green-500 shadow-[0_0_20px_rgba(22,163,74,0.3)] scale-105"
                  : "bg-zinc-900/50 text-zinc-500 border-zinc-800/50 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
              }`}
            >
              <span className="hidden lg:inline">{srv.name}</span>
              <span className="lg:hidden">{index + 1}</span>
              <span className={`ml-1.5 opacity-60 font-medium hidden md:inline-block`}>
                ({srv.tag})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 📺 Video Container Section */}
      <div className="relative w-full">
        {/* Glow Effect: Hiệu ứng ánh sáng nền động */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-blue-500/20 rounded-[1.5rem] lg:rounded-[2.5rem] blur-2xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity duration-1000"></div>
        
        <div className="w-full aspect-video bg-black rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/5 relative z-10 ring-1 ring-white/10">
          <iframe
            key={servers[server].url} // KEY quan trọng: Ép iframe load lại khi đổi server
            src={servers[server].url}
            className="absolute inset-0 w-full h-full border-0 focus:outline-none"
            title={`Watching ${movie.title}`}
            allowFullScreen
            scrolling="no"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
            // Sandbox: Cho phép popups để server phim có thể khởi tạo player, 
            // nhưng không cho phép top-navigation để tránh tự nhảy trang quảng cáo.
            // sandbox="allow-forms allow-scripts allow-same-origin allow-presentation allow-popups"
            referrerPolicy="origin"
            loading="lazy"
            style={{ overflow: 'hidden' }}
          />
        </div>
      </div>

      {/* 💡 User Tips & Support Note */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3 text-zinc-500 text-[10px] md:text-xs italic bg-zinc-900/30 py-2 px-4 rounded-full border border-zinc-800/50 w-fit">
          <Icon name="info" className="w-3.5 h-3.5 text-green-500" />
          <span>
            Tip: If a server fails, try switching to <b>Server 1</b> or <b>Server 3</b>.
          </span>
        </div>
        
        
      </div>
    </div>
  );
};

export default VideoPlayer;