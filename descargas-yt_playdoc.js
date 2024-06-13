/*import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

const handler = async (m, {command, usedPrefix, conn, text}) => {
    if (!text) throw `${mg}${mid.smsMalused4}\n*${usedPrefix + command} Billie Eilish - Bellyache*`
    try {
        if (command == 'ytmp4doc') {
            console.log(gataImg.path);
            console.log(accountsgb);
            conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + mid.smsVid, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
            try {
                const mediaa = await ytPlayVid(text);
                console.log(mediaa);
                //console.log(mediaa);
                //file
               const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `video.mp4`, caption: `${wm}`, thumbnail: null, mimetype: 'video/mp4'}, {quoted: m});
              //await conn.sendFile(m.chat, media.result.video, 'error.mp4', `${wm}`, m);
              
              /*const rutaVideo = mediaa.result;
console.log(rutaVideo)
fs.readFile(rutaVideo, (error, datos) => {
    if (error) {
        console.error('Error al leer el archivo de vídeo:', error);
        return;
    }

    console.log('Se cargó el archivo de vídeo correctamente:', datos.length, 'bytes');
}
//catch (e){
//    console.log(e);
//}

             /*  if (!aa_2) {
                   throw new Error();
               }
             catch (e){
                const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
                const json = await res.json();
                await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);
            }
        }
    } catch (e) {
        await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
        console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
        console.log(e)
        handler.limit = 0 //No gastada limite si fallas
    }
}

handler.help = ['ytmp4doc', 'ytmp3doc'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(ytmp4doc|ytmp3doc|playaudiodoc|playdoc|playdoc2|playvideodoc)$/i;
handler.limit = "unlimited";
handler.register = true;
export default handler;

async function ytPlayVid(query) {
    try {
        const { videos } = await yts(query);
        if (!videos || videos.length === 0) {
            throw new Error("No se encontraron vídeos para la búsqueda proporcionada");
        }
        const bestVideo = videos[0];
        const thumb = bestVideo.thumbnail;
        
        // Establecer la ruta del directorio temporal
        const tempDir = '/data/data/com.termux/files/home/GataBot-MD/tmp'; // Cambia esta ruta según donde quieras guardar el archivo
        
        // Descargar el vídeo y guardarlo como archivo temporal
        const filePath = path.join(tempDir, 'video.mp4');
        await ytdl(query).pipe(fs.createWriteStream(filePath));
        
        //await ytdl(query).pipe(fs.createWriteStream(filePath));
        
        return { result: filePath, video: await fs.promises.readFile(filePath), thumb: null };
    } catch (error) {
        console.error("Error al buscar el video:", error);
        throw error;
    }
} */

/*import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

const handler = async (m, { command, usedPrefix, conn, text }) => {
    if (!text) throw `${mg}${mid.smsMalused4}\n*${usedPrefix + command} https://www.youtube.com/watch?v=example*`;
    try {
        if (command === 'ytmp4doc') {
            console.log(gataImg.path);
            console.log(accountsgb);
            conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}${mid.smsVid}`, m, {
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: null,
                        mediaType: 1,
                        description: null,
                        title: wm,
                        body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽',
                        previewType: 0,
                        thumbnail: gataImg,
                        sourceUrl: accountsgb
                    }
                }
            });
            try {
                const mediaa = await ytPlayVid(text);
                console.log(mediaa);
                const aa_2 = await conn.sendMessage(m.chat, {
                    document: { url: mediaa.result },
                    fileName: `${mediaa.title}`,
                    caption: `${wm}\nTítulo: ${mediaa.title}`,
                    thumbnail: null,
                    mimetype: 'video/mp4'
                }, { quoted: m });
            } catch (e) {
                const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
                const json = await res.json();
                await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);
            }
        }
    } catch (e) {
        await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m);
        console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`);
        console.log(e);
        handler.limit = 0; // No gasta límite si falla
    }
};

handler.help = ['ytmp4doc', 'ytmp3doc'].map((v) => v + ' < url >');
handler.tags = ['downloader'];
handler.command = /^(ytmp4doc|ytmp3doc|playaudiodoc|playdoc|playdoc2|playvideodoc)$/i;
handler.limit = "unlimited";
handler.register = true;
export default handler;

async function ytPlayVid(url) {
    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const thumb = info.videoDetails.thumbnails[0].url;

        // Establecer la ruta del directorio temporal
        const tempDir = '/data/data/com.termux/files/home/GataBot-MD/tmp'; // Cambia esta ruta según donde quieras guardar el archivo
        
        // Asegúrate de que el directorio temporal exista
        await fs.promises.mkdir(tempDir, { recursive: true });

        // Intentar descargar el video en calidad 480p
        let videoStream;
        try {
            videoStream = ytdl(url, {quality: 'highest'});
           // console.log(await ytdl.getBasicInfo(url, 'highest'));
        await ytdl.getBasicInfo(url, {quality: 'highest'}); // Verificar si 480p está disponible
        } catch (error) {
            try{
            console.warn("Calidad 360p no está disponible, descargando en 480p.");
            videoStream = ytdl(url, { qualityLabel:'480p' });
            }
            catch (error2){
            console.warn("Calidad 480p no está disponible, descargando en 720p.");
            videoStream = ytdl(url, { qualityLabel:'720p' });
            }
        }
        
        // Descargar el vídeo y guardarlo como archivo temporal
        const filePath = path.join(tempDir, 'video.mp4');
        const fileWriteStream = fs.createWriteStream(filePath);

        await new Promise((resolve, reject) => {
            videoStream.pipe(fileWriteStream);
            videoStream.on('end', resolve);
            videoStream.on('error', reject);
        });

        // Leer el archivo descargado
        const videoData = await fs.promises.readFile(filePath);

        // Retornar la información del archivo descargado
        return { result: filePath, video: videoData, thumb, title };
    } catch (error) {
        console.error("Error al obtener información del video:", error);
        throw error;
    }
}
*/
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path'; 

const handler = async (m, { command, usedPrefix, conn, text }) => {
   // if (!text) throw `${mg}${mid.smsMalused4}\n*${usedPrefix + command} https://www.youtube.com/watch?v=example 
    try {
        if (command === 'ytmp4doc') {
            console.log(gataImg.path);
            console.log(accountsgb);
            conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}${mid.smsVid}`, m, {
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: null,
                        mediaType: 1,
                        description: null,
                        title: wm,
                        body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽',
                        previewType: 0,
                        thumbnail: gataImg,
                        sourceUrl: accountsgb
                    }
                }
            });
            try {
                const mediaa = await ytPlayVid(text);
                console.log(mediaa);
                const aa_2 = await conn.sendMessage(m.chat, {
                    document: { url: mediaa.result },
                    fileName: `${mediaa.title}`,
                    caption: `${wm}\nTítulo: ${mediaa.title}`,
                    thumbnail: null,
                    mimetype: 'video/mp4'
                }, { quoted: m });
            } catch (e) {
                const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
                const json = await res.json();
                await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);
            }
        }
    } catch (e) {
        await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m);
        console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`);
        console.log(e);
        handler.limit = 0; // No gasta límite si falla
    }
};

handler.help = ['ytmp4doc', 'ytmp3doc'].map((v) => v + ' < url >');
handler.tags = ['downloader'];
handler.command = /^(ytmp4doc|ytmp3doc|playaudiodoc|playdoc|playdoc2|playvideodoc)$/i;
handler.limit = "unlimited";
handler.register = true;
export default handler;

async function ytPlayVid(url) {
    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const thumb = info.videoDetails.thumbnails[0].url;

        // Establecer la ruta del directorio temporal
        const tempDir = '/data/data/com.termux/files/home/GataBot-MD/tmp'; // Cambia esta ruta según donde quieras guardar el archivo
        
        // Asegúrate de que el directorio temporal exista
        await fs.promises.mkdir(tempDir, { recursive: true });

        // Filtrar los formatos disponibles para encontrar uno con video y audio
       /* const format = ytdl.chooseFormat(info.formats, {
            quality: 'highest',
            filter: (format) => format.container === 'mp4' && format.hasAudio && format.hasVideo
        });
*/
/*console.log(info.formats);
        const formatOptions = {
    filter: format => format.qualityLabel === '480p' && format.hasVideo && format.hasAudio,
    quality: 'highest'
  };
*/
  // Seleccionar el formato adecuado
  
 // const format = ytdl.chooseFormat (formatOptions);
 
 //let formatz = await ytdl.chooseFormat(info.formats, { quality: 'highest', filter: format => format.itag = '398'});
 
 let format_filtered =  ytdl.filterFormats(info.formats, 'audioandvideo');
 console.log(format_filtered);
 let preferedFormats = ['480p', '360p', '720p', '1080p'];

let prefered_itag = 0;
//format_filtered
//preferedFormats

let founded = false;
for (let i = 0; i < preferedFormats.length; i++) {
  for (let x= 0; x < format_filtered.length; x++) {
    if (preferedFormats[i] === format_filtered[x].qualityLabel ){
        console.log("Elemento encontrado: " + preferedFormats[i]);
        founded = true;
        prefered_itag = x;
        console.log(prefered_itag);
        break;
    }
    //Detiene el bucle una vez que encuentra un elemento
    else {
        console.log("Elemento: " + format_filtered[x].qualityLabel + " no coincide con el elemento: " + preferedFormats[i]);
    }
  }
  if (founded){
      break;
  }
}
let formatz = await ytdl.chooseFormat(info.formats, { format: format_filtered[prefered_itag]});
console.log(formatz);
//console.log('Format found!', format_filtered);
  
  
  //console.log('Format selected:', format);
  
        // Descargar el vídeo y guardarlo como archivo temporal
        const filePath = path.join(tempDir, 'video.mp4');
        const fileWriteStream = fs.createWriteStream(filePath);
        const videoStream = ytdl(url, { format: format_filtered[prefered_itag]});

        await new Promise((resolve, reject) => {
            videoStream.pipe(fileWriteStream);
            videoStream.on('end', resolve);
            videoStream.on('error', reject);
        });
        // Leer el archivo descargado
        const videoData = await fs.promises.readFile(filePath);

        // Retornar la información del archivo descargado
        return { result: filePath, video: videoData, thumb, title };
    } catch (error) {
        console.error("Error al obtener información del video:", error);
        throw error;
    }
}