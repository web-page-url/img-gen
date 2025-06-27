import { NextRequest, NextResponse } from 'next/server';

const API_KEY = 'a68f9d89d31f6395ded27c9cbf991ad6503249e346692f577880ff5c8d26e948';
const API_URL = 'https://api.imagerouter.io/v1/openai/images/generations';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Enhance the prompt for better sticker results
    const enhancedPrompt = `${prompt}, sticker style, transparent background, high quality, detailed, vibrant colors, clean design, digital art`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: enhancedPrompt,
        model: 'HiDream-ai/HiDream-I1-Full:free',
        n: 1,
        size: '1024x1024',
      }),
    });

    if (!response.ok) {
      console.error('API Response:', response.status, response.statusText);
      return NextResponse.json(
        { success: false, error: 'Failed to generate image' },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    // Check if the response has the expected structure
    if (data && data.data && data.data.length > 0 && data.data[0].url) {
      return NextResponse.json({
        success: true,
        imageUrl: data.data[0].url,
        prompt: prompt,
      });
    } else {
      console.error('Unexpected API response structure:', data);
      return NextResponse.json(
        { success: false, error: 'Invalid response from image generation API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error generating sticker:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 