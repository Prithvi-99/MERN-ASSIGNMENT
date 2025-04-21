import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Text Updater</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-4 text-lg">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
