export const VideoPitch = ({ videoId, title }) => {
  return (
    <div className="video-pitch-section">
      <div className="section-header">
        <i className="fas fa-video"></i>
        <h2>Pitch de Vendas</h2>
        <p>Conheça nossa solução em detalhes</p>
      </div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "SmartGlass Seguro - Pitch de Vendas"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};