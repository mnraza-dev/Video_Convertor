import React from "react";

const App = () => {
  return (
    <div className="bg-amber-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-semibold text-amber-900 ">
        Video Convertor
      </h1>
      <form className="bg-amber-300 p-5 rounded-xl mt-6 shadow-md drop-shadow-2xl">
        <input type="file" name="video" id="video" accept="video/*" />
        <select name="format" id="format">
          <option value="mp4">MP4</option>
          <option value="mkv">MKV</option>
          <option value="webm">Webm</option>
          <option value="mp3">MP3</option>
          <option value="m4a">M4A</option>
          <option value="flac">FLAC</option>
          <option value="ogg">OGG</option>
          <option value="wav">WAV</option>
        </select>
      </form>
    </div>
  );
};

export default App;
