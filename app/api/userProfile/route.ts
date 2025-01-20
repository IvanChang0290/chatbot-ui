import { NextResponse } from 'next/server';

export async function GET() {
    try {

        const userProfile = {
            company: '飛騰雲端系統股份有限公司',
            department: 'xx部門',
            position: 'xx職位',
            permissions: '管理員'
        };

        return NextResponse.json(userProfile);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch user profile' },
            { status: 500 }
        );
    }
}
