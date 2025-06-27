import React from 'react';

const X3DPage = () => (
  <div style={{minHeight: '100vh', minWidth: '100vw', width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #181818 0%, #232526 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0, position: 'fixed', top: 0, left: 0, zIndex: 1000}}>
    <h1 style={{color: '#FFD700', fontWeight: 800, fontSize: '2rem', marginBottom: '1.5rem', display: 'none'}}>Visualizador 3D de Empanada</h1>
    <div className="sketchfab-embed-wrapper" style={{width: '100vw', height: '100vh', margin: 0, borderRadius: 0, overflow: 'hidden', boxShadow: 'none'}}>
      <iframe
        title="Empanada"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/d79ea03a77824729bb75ca7c72cf5ca5/embed"
        style={{width: '100vw', height: '100vh', minHeight: '100vh', minWidth: '100vw', background: '#181818', border: 'none'}}
      />
      <p style={{fontSize: 13, fontWeight: 'normal', margin: 5, color: '#FFD700', textAlign: 'center'}}> <a href="https://sketchfab.com/3d-models/empanada-d79ea03a77824729bb75ca7c72cf5ca5?utm_medium=embed&utm_campaign=share-popup&utm_content=d79ea03a77824729bb75ca7c72cf5ca5" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#FFD700'}}> Empanada </a> por <a href="https://sketchfab.com/DarkVolt?utm_medium=embed&utm_campaign=share-popup&utm_content=d79ea03a77824729bb75ca7c72cf5ca5" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#FFD700'}}> DarkVolt </a> en <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d79ea03a77824729bb75ca7c72cf5ca5" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#FFD700'}}>Sketchfab</a></p>
    </div>
  </div>
);

export default X3DPage; 