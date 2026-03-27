import { NextResponse } from 'next/server';
import { readdir, writeFile, unlink } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const portfolioDir = join(process.cwd(), 'public/portfolio');
    const files = await readdir(portfolioDir);

    const videos = files
      .filter((file) => !file.startsWith('.'))
      .map((file) => ({
        name: file,
        url: `/portfolio/${file}`,
      }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error listando portafolio:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('video') as unknown as File;

    if (!file) {
      return NextResponse.json({ error: 'No se subió ningún archivo' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    const path = join(process.cwd(), 'public/portfolio', filename);
    await writeFile(path, buffer);

    console.log(`Video de portafolio guardado en ${path}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en portfolio upload:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { filename } = await request.json();
    const path = join(process.cwd(), 'public/portfolio', filename);
    await unlink(path);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error eliminando portafolio:', error);
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
