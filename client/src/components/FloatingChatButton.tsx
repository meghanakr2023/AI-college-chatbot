import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function FloatingChatButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open chat"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#7B1E2B",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(123,30,43,0.45)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 8px 30px rgba(123,30,43,0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 4px 20px rgba(123,30,43,0.45)";
      }}
    >
      {/* Pulse ring */}
      <span
        style={{
          position: "absolute",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "rgba(123,30,43,0.35)",
          animation: "chatPulse 2.5s ease-out infinite",
        }}
      />
      <MessageCircle
        style={{ width: "26px", height: "26px", color: "#ffffff", position: "relative", zIndex: 1 }}
        strokeWidth={2}
        fill="rgba(255,255,255,0.15)"
      />

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes chatPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.65); opacity: 0;   }
          100% { transform: scale(1.65); opacity: 0;   }
        }
      `}</style>
    </button>
  );
}
