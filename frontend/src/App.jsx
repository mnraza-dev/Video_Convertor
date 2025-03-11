import React from "react";

const App = () => {
  return (
    <div className="bg-amber-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-semibold text-amber-900 ">
        Video Convertor
      </h1>

      <form className="bg-amber-300 p-5 w-3/5 h-[50vh] rounded-xl mt-6 shadow-2xl drop-shadow-2xl flex flex-col justify-center items-center  gap-4">
        <h2 className="text-3xl font-semibold text-amber-900">Select Video</h2>

        <div className="flex rounded-md drop-shadow-md ">
          <input
            type="file"
            name="video"
            id="video"
            className="drop-shadow-md cursor-pointer bg-amber-200 p-4 rounded-l-lg   "
            accept="video/*"
          />

          <select name="format" id="format" className="bg-amber-400 p-4 rounded-lg cursor-pointer hover:bg-amber-300">
            <option value="mp4">MP4</option>
            <option value="mkv">MKV</option>
            <option value="webm">Webm</option>
            <option value="mp3">MP3</option>
            <option value="m4a">M4A</option>
            <option value="flac">FLAC</option>
            <option value="ogg">OGG</option>
            <option value="wav">WAV</option>
          </select>
        </div>
        <button className="w-fit bg-amber-700 text-amber-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-amber-800">
          Convert
        </button>
      </form>
    </div>
  );
};

export default App;
