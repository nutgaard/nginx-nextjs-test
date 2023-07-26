export async function GET() {
    return new Response('Health: OK', {
        status: 200,
    });
}