import { NextResponse } from 'next/server';

// Store counter in memory (will reset when server restarts)
let questionCounter = 0;

export async function GET(request: Request) {
    try {
        // Get the increment parameter from the URL
        const { searchParams } = new URL(request.url);
        const shouldIncrement = searchParams.get('increment') === 'true';
        
        // Only increment if the increment parameter is true
        if (shouldIncrement) {
            questionCounter++;
        }
        
        const recommendedQuestions = [
            {
                id: 1,
                text: `測試問題1 (${questionCounter})?`
            },
            {
                id: 2,
                text: `測試問題2 (${questionCounter})?`
            },
            {
                id: 3,
                text: `測試問題3 (${questionCounter})?`
            }
        ];

        return NextResponse.json(recommendedQuestions);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch recommended questions' },
            { status: 500 }
        );
    }
}
