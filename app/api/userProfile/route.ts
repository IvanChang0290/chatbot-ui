import { NextResponse } from 'next/server';

export async function GET() {
    try {

        const userProfile = {
            company: '1',
            department: '2',
            position: '3',
            permissions: '4'
        };

        return NextResponse.json(userProfile);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch user profile' },
            { status: 500 }
        );
    }
}
