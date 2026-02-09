import { Link } from "react-router-dom";
import Icon from "../atoms/Icon"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
  { name: "github", url: "https://github.com/MMiiinnn" },
  { name: "linkedin", url: "https://www.linkedin.com/in/nguyen-trung-nghia-dev/" },
  { name: "facebook", url: "https://facebook.com" }, 
  { name: "instagram", url: "https://instagram.com/" }, 
];

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 px-6 lg:px-16 border-t border-zinc-900">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          <div className="flex-1 max-w-xl">
            <p className="font-body text-2xl lg:text-4xl font-semibold leading-tight mb-8">
              Our platform is trusted by millions & features best updated movies
              all around the world.
            </p>

            {/* Social Icons Group */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-green-600 hover:border-green-500 transition-all duration-300"
                >
                  <Icon
                    type="awesome"
                    iconAwesome={`fa-brands fa-${social.name}`}
                    className="text-white text-xl lg:text-2xl"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:items-end justify-between">
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm lg:text-lg font-body text-zinc-300">
              <Link to="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/search" className="hover:text-green-500 transition-colors">
                Discover
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/about" className="hover:text-green-500 transition-colors">
                About
              </Link>
              <span className="text-zinc-700">/</span>
              <a href="/#upcoming" className="hover:text-green-500 transition-colors">
                Movie Release
              </a>
            </nav>

            {/* Copyright Desktop */}
            <p className="hidden lg:block text-zinc-500 text-sm font-body">
              © {currentYear} FillFilm. All rights reserved.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-xs lg:text-sm text-zinc-500 font-body uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link to="/term" className="hover:text-white transition-colors">
              Term of service
            </Link>
            <Link to="/language" className="hover:text-white transition-colors">
              Language
            </Link>
          </div>

          {/* Copyright Mobile */}
          <p className="lg:hidden text-zinc-600 text-xs font-body">
            © {currentYear} FillFilm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
