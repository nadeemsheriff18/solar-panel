import { NextRequest, NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, location, plan } = body;

    // ⛔ Disable this part for deployment (Vercel doesn't support writing to disk)
    /*
    const row = `"${name}","${email}","${phone}","${location}","${plan}","${new Date().toLocaleString()}"\n`;
    const filePath = path.join(process.cwd(), 'contacts.csv');

    // Add header if file doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(
        filePath,
        'Name,Email,Phone,Location,Plan,Submitted At\n',
        'utf8'
      );
    }

    // Append the row
    fs.appendFileSync(filePath, row, 'utf8');
    */

    // ✅ Deployment-safe fallback response
    console.log('Form submission:', { name, email, phone, location, plan });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
