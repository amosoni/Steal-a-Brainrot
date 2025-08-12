import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const resolvedParams = await params;
    console.log('API Route - filename:', resolvedParams.filename);
    console.log('API Route - full path:', join(process.cwd(), 'public', resolvedParams.filename));
    
    // 检查文件是否存在
    const filePath = join(process.cwd(), 'public', resolvedParams.filename);
    console.log('API Route - checking file exists:', filePath);
    
    if (!existsSync(filePath)) {
      console.log('API Route - file not found:', filePath);
      return new NextResponse('Image not found', { status: 404 });
    }
    
    const fileBuffer = readFileSync(filePath);
    const filename = resolvedParams.filename;
    const extension = filename.split('.').pop()?.toLowerCase();
    
    let contentType = 'image/webp';
    if (extension === 'svg') {
      contentType = 'image/svg+xml';
    } else if (extension === 'png') {
      contentType = 'image/png';
    } else if (extension === 'jpg' || extension === 'jpeg') {
      contentType = 'image/jpeg';
    }
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch {
    return new NextResponse('Image not found', { status: 404 });
  }
} 
 