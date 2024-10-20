import { NextResponse } from 'next/server';
import { cloudinary } from '@/lib/cloudinary'; // Import the Cloudinary config

export async function POST(request) {
  try {
    const formData = await request.formData(); // Get image from request
    const file = formData.get('file'); // Retrieve the file from formData

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    // Convert the file to a format that Cloudinary accepts
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: 'your_folder_name', // Optional: Specify a folder to upload images into
    });

    return NextResponse.json({
      message: 'Image uploaded successfully',
      url: uploadResult.secure_url, // Return the Cloudinary image URL
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error uploading image', error }, { status: 500 });
  }
}
