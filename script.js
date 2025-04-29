document.addEventListener('click', function () {
    const video = document.getElementById('bgVideo');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');

    intro.style.display = 'none';
    main.style.display = 'flex';
    
    video.muted = false;
    video.volume = 0.3; // volumen al 30%
    video.play();
});

  // Estado de Discord con Lanyard
  const userId = "664747091637305364"; // Reemplaza con tu ID real de Discord
  
  async function fetchDiscordStatus() {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
      const data = await res.json();
  
      if (data.success) {
        const user = data.data;
        const isListening = user.listening_to_spotify;
        const status = user.discord_status;
  
        const container = document.getElementById("discord-status");
  
        container.innerHTML = `
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png" style="width:50px; border-radius:50%;">
            <div>
              <strong>${user.discord_user.username}</strong><br>
              ${isListening 
                ? `🎧 Escuchando <strong>${user.spotify.song}</strong> de ${user.spotify.artist}` 
                : `🟢 Estado: ${status}`}
            </div>
          </div>
        `;
      } else {
        console.error("No se pudo obtener el estado de Discord.");
      }
    } catch (error) {
      console.error("Error al obtener el estado de Discord:", error);
    }
  }
  
  fetchDiscordStatus();
  setInterval(fetchDiscordStatus, 15000); // Actualiza cada 15 segundos
  
