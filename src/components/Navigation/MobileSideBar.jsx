import Icon from "../Atoms/Icon";

function MobileSideBar({ onOpen, onClose, links }) {
  return (
    <>
      {/* Overlay */}
      {onOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl
          ${onOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="hover:text-red-500">
            <Icon name="close" />
          </button>
        </div>

        <nav className="flex flex-col items-start px-6 gap-4">
          {links.map((link) => (
            <button
              key={link}
              className="w-full text-left text-xl font-heading hover:text-red-500 transition-colors py-2 border-b border-white/10"
              onClick={onClose}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default MobileSideBar;
