import MainLayout from "../layout/MainLayout";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I’m NeoLearn AI. Ask me anything!", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState(""); // letter by letter
  const chatEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayText, isTyping]);

  // send message
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
    setInput("");
    setIsTyping(true);
    setDisplayText("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      // animate letter by letter
      let i = 0;
      const text = data.reply;
      const interval = setInterval(() => {
        setDisplayText(prev => prev + text[i]);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setMessages(prev => [...prev, { text, sender: "ai" }]);
          setDisplayText("");
          setIsTyping(false);
        }
      }, 50); // typing speed
    } catch (err) {
      setMessages(prev => [...prev, { text: "Hmm… I am thinking 🤔", sender: "ai" }]);
      setIsTyping(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col h-[85vh] max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">🤖 NeoLearn AI Tutor</h1>

        <div className="flex-1 overflow-y-auto space-y-4 px-2 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl max-w-[70%] text-sm leading-relaxed transition-all ${
                msg.sender === "user" ? "bg-primary ml-auto text-white" : "glass text-gray-300"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="p-4 rounded-2xl max-w-[50%] glass text-gray-400 italic">
              {displayText || "NeoLearn AI is typing..."}
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="flex items-center gap-3 glass p-3 rounded-xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask NeoLearn AI..."
            className="flex-1 bg-transparent outline-none text-white"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-primary px-4 py-2 rounded-xl text-white"
          >
            Send
          </button>
        </div>
      </div>
    </MainLayout>
  );
}