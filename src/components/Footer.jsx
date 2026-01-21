import Icon from "./Atoms/Icon"; // Hoặc sử dụng font-awesome/lucide-react

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = ["facebook", "instagram", "twitter", "google"];

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
                  key={social}
                  href="#"
                  className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-green-600 hover:border-green-500 transition-all duration-300"
                >
                  <Icon
                    type="awesome"
                    iconAwesome={`fa-brands fa-${social}`}
                    className="text-white text-xl lg:text-2xl"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:items-end justify-between">
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm lg:text-lg font-body text-zinc-300">
              <a href="#" className="hover:text-green-500 transition-colors">
                Home
              </a>
              <span className="text-zinc-700">/</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Discover
              </a>
              <span className="text-zinc-700">/</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Influence
              </a>
              <span className="text-zinc-700">/</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Release
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
            <a href="#" className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Term of service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Language
            </a>
          </div>

          {/* Copyright Mobile */}
          <p className="lg:hidden text-zinc-600 text-xs font-body">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
