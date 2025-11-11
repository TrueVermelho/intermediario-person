export default function Youtube() {
  return (
    <div className="video-section">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/SEU_VIDEO_ID"
          title="Título do Vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
