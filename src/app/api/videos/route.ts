import { NextResponse } from 'next/server';
import { readdir, readFile, unlink } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const uploadDir = join(process.cwd(), 'public/uploads');
    const files = await readdir(uploadDir);

    const videos = await Promise.all(
      files
        .filter((file) => !file.endsWith('.json') && !file.startsWith('.'))
        .map(async (file) => {
          let userData = { 
            userName: 'Desconocido', 
            userEmail: 'N/A',
            whatsapp: 'N/A',
            instructions: 'Sin instrucciones'
          };
          try {
            const jsonPath = join(uploadDir, `${file}.json`);
            const jsonData = await readFile(jsonPath, 'utf8');
            userData = JSON.parse(jsonData);
          } catch (e) {
            console.error(`Error leyendo metadatos para ${file}:`, e);
          }

          return {
            name: file,
            url: `/uploads/${file}`,
            userName: userData.userName,
            userEmail: userData.userEmail,
            whatsapp: userData.whatsapp,
            instructions: userData.instructions,
          };
        })
    );

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error listando videos:', error);
    return NextResponse.json([]);
  }
}

export async function DELETE(request: Request) {
  try {
    const { filename } = await request.json();
    const videoPath = join(process.cwd(), 'public/uploads', filename);
    const jsonPath = join(process.cwd(), 'public/uploads', `${filename}.json`);

    await unlink(videoPath);
    try {
      await unlink(jsonPath);
    } catch (e) {
      // Ignorar si el json no existe
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error eliminando video:', error);
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
