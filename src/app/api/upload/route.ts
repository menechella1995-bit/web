import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('video') as unknown as File;
    const userName = data.get('userName') as string;
    const userEmail = data.get('userEmail') as string;
    const whatsapp = data.get('whatsapp') as string;
    const instructions = data.get('instructions') as string;

    if (!file) {
      return NextResponse.json({ error: 'No se subió ningún archivo' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Guardar el video
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    const path = join(process.cwd(), 'public/uploads', filename);
    await writeFile(path, buffer);

    // Guardar los metadatos del usuario incluyendo instrucciones y whatsapp
    const metadata = {
      userName,
      userEmail,
      whatsapp,
      instructions,
      originalName: file.name,
      uploadDate: new Date().toISOString(),
    };
    const metadataPath = join(process.cwd(), 'public/uploads', `${filename}.json`);
    await writeFile(metadataPath, JSON.stringify(metadata, null, 2));

    console.log(`Video guardado en ${path} con instrucciones para ${userName}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en upload:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
