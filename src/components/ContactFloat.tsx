import { Phone, X, Send } from "lucide-react";
import { useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.604 14.99c-.244-.123-1.446-.714-1.67-.795-.224-.082-.388-.123-.552.123-.163.245-.633.795-.776.959-.143.163-.286.184-.53.061-.245-.122-1.033-.38-1.968-1.213-.727-.648-1.217-1.45-1.36-1.694-.143-.245-.015-.378.108-.5.11-.109.244-.286.367-.428.123-.143.163-.245.245-.409.082-.163.041-.306-.02-.429-.062-.122-.551-1.326-.756-1.816-.2-.47-.402-.408-.552-.416l-.469-.01c-.163 0-.428.062-.652.307-.224.245-.857.836-.857 2.04 0 1.204.877 2.366 1 2.53.122.163 1.723 2.633 4.175 3.692.582.251 1.038.402 1.395.514.586.187 1.119.16 1.54.097.469-.07 1.446-.592 1.65-1.163.204-.571.204-1.061.143-1.163-.061-.102-.224-.163-.469-.286zM12.01 2.001c-5.523 0-10 4.477-10 10 0 1.762.46 3.453 1.334 4.94L2 22l5.2-1.335a9.955 9.955 0 0 0 4.81 1.24h.003c5.523 0 10-4.477 10-10s-4.477-10-10-10zm.003 18.37h-.003a8.354 8.354 0 0 1-4.431-1.27l-.318-.189-3.084.793.822-3.002-.208-.302a8.34 8.34 0 0 1-1.335-4.5c0-4.605 3.743-8.35 8.35-8.35 2.233 0 4.334.87 5.913 2.45a8.303 8.303 0 0 1 2.45 5.9c0 4.606-3.743 8.35-8.35 8.35z" />
    </svg>
  );
}

export default function ContactFloat() {
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const phoneNumber = "7396062116";
  const prefilledMessage =
    "Hi, I'm interested in the NEET Premium Medical Guidance. Can I get more details?";

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-x-0 bottom-6 z-100 pointer-events-none px-6 flex justify-between items-end">
      {/* ===== Call Button (Bottom Left) ===== */}
      <a
        href={`tel:${phoneNumber}`}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-white text-slate-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Call Us"
      >
        <Phone size={24} fill="currentColor" className="text-[#56b016]" />
      </a>

      {/* ===== WhatsApp Section (Bottom Right) ===== */}
      <div className="relative pointer-events-auto flex flex-col items-end">
        {/* WhatsApp Menu (The Popup) */}
        {isWhatsappOpen && (
          <div className="absolute bottom-20 right-0 w-[320px] sm:w-90 bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
            {/* WA Header */}
            <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">
                    C
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Your Councellor</p>
                  <p className="text-[10px] opacity-80">
                    Typically replies in a few minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsappOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* WA Chat Body */}
            <div className="p-4 min-h-30 relative bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                <p className="text-xs text-slate-800 leading-relaxed">
                  Hi there! 👋 <br />
                  How can we help you with your dream college today?
                </p>
              </div>
            </div>

            {/* WA Footer / Input Placeholder */}
            <div className="p-3 bg-white flex items-center gap-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-full flex items-center justify-between group hover:bg-[#20bd5a] transition-colors"
              >
                <span className="text-sm font-semibold">Start Chat</span>
                <Send size={16} />
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp Toggle Button */}
        <button
          onClick={() => setIsWhatsappOpen(!isWhatsappOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
            isWhatsappOpen
              ? "bg-white text-slate-500 rotate-90"
              : "bg-[#25D366] text-white"
          }`}
        >
          {isWhatsappOpen ? (
            <X size={28} />
          ) : (
            <WhatsAppIcon className="h-7 w-7" />
          )}
        </button>
      </div>
    </div>
  );
}
