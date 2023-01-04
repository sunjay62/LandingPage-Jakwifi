import "react-html5video/dist/styles.css";
import React, { useState, useEffect } from "react";

function VideoList() {
  let videos = [
    "https://jakwifi-content.jdn.net.id/static/5_Rekomendasi_Hindari_Tekanan_Darah_Tinggi_Sebelum_Vaksinasi_COVID-19.mp4",
    "https://jakwifi-content.jdn.net.id/static/Gejala_umum_tertular_virus_covid19.mp4",
    "https://jakwifi-content.jdn.net.id/static/informasi_dan_edukasi_covid19.mp4",
    "https://jakwifi-content.jdn.net.id/static/Kenapa_Jakarta_Butuh_Pompa.mp4",
  ];
  let [currentVideo, setCurrentVideo] = useState(videos[0]);

  function handleVideoEnd() {
    // ... kode sebelumnya di sini
  }

  function handleSkip() {
    // Ambil index video saat ini
    const currentIndex = videos.indexOf(currentVideo);
    // Cek apakah ini adalah video terakhir atau tidak
    if (currentIndex === videos.length - 1) {
      // Jika ya, ganti dengan video pertama
      setCurrentVideo(videos[0]);
    } else {
      // Jika tidak, ganti dengan video berikutnya
      setCurrentVideo(videos[currentIndex + 1]);
    }
  }

  useEffect(() => {
    // ... kode sebelumnya di sini
    window.onbeforeunload = () => {
      // Ambil index video saat ini
      const currentIndex = videos.indexOf(currentVideo);
      // Ganti dengan video berikutnya
      setCurrentVideo(videos[currentIndex + 1]);
    };
  }, [currentVideo]);

  return (
    <div>
      <video
        id="myVideo"
        src={currentVideo}
        onEnded={handleVideoEnd}
        controls
        autoPlay
        loop
      />
      <button onClick={handleSkip}>Skip</button>
    </div>
  );
}

export default VideoList;
