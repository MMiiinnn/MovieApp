import { useState } from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import geminiService from "../../services/geminiService"; 
import toast from "react-hot-toast";
import Icon from "../atoms/Icon";

const TestConnection = () => {
    const [status, setStatus] = useState("");

    const handleTest = async () => {
      // Use this ID to update the toast when the AI is connected or disconnected
        const loadingToast = toast.loading("Connecting to Gemini...");
        setStatus("loading");
        
        try {
            const response = await geminiService.generateText("Say 'Hello from Gemini!' if you can hear me.");
            if (response) {
                toast.success("AI Connection Successful!", { id: loadingToast });
                toast(response, { icon: '🤖', duration: 3000 });
                setStatus("success");
            } else {
                throw new Error("No response");
            }
        } catch (error) {
            toast.error("Connection Failed. Check API Key.", { id: loadingToast });
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <Button 
                variant="outline" 
                onClick={handleTest} 
                className="text-xs py-2 px-4"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Connecting..." : "Test AI Availability"}
            </Button>
            {status === "success" && <span className="text-green-500 text-xs">● Online</span>}
            {status === "error" && <span className="text-red-500 text-xs">● Offline</span>}
        </div>
    );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 px-6 lg:px-16 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl lg:text-7xl font-black uppercase italic  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            About FillFilm
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your ultimate destination for discovering movies. 
            Powered by TMDB, enhanced by Google Gemini AI, and designed for you.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-green-500/50 transition-colors group">
            <div className="text-4xl mb-4 text-green-500">
                <Icon name="movie" className="text-5xl group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Discovery</h3>
            <p className="text-zinc-500 text-sm">
              Explore thousands of movies and TV shows with comprehensive details, trails, and cast info.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-green-500/50 transition-colors group">
            <div className="text-4xl mb-4 text-blue-500">
                <Icon name="bolt" className="text-5xl group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Speed</h3>
            <p className="text-zinc-500 text-sm">
              Lightning fast search and navigation powered by modern web technologies.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-green-500/50 transition-colors group">
            <div className="text-4xl mb-4 text-red-500">
                 <Icon name="favorite" className="text-5xl group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Personal</h3>
            <p className="text-zinc-500 text-sm">
              Create your own watchlist and keep track of everything you want to see.
            </p>
          </div>
        </section>

        {/* Tech Stack / Credits */}
        <section className="border-t border-zinc-900 pt-12 text-center space-y-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-600">
            Built using
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-zinc-400 font-mono text-sm">
            <span className="px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">React</span>
            <span className="px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">TailwindCSS</span>
            <span className="px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">TMDB API</span>
            <span className="px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">Zustand</span>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 flex justify-center ">
           <Link to="/" className="block">
            <Button variant="primary" className="px-8 py-3 rounded-full! uppercase font-bold tracking-widest text-lg!">
              Start Exploring
            </Button>
           </Link>
        </section>

        {/* AI Connection Test  */}
        <section className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 text-center">
            <h3 className="text-zinc-500 font-bold mb-4 uppercase tracking-widest text-xs">System Status</h3>
            <TestConnection />
        </section>

        <footer className="text-center text-zinc-700 text-xs pb-10 uppercase tracking-widest">
            © {new Date().getFullYear()} FillFilm. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
