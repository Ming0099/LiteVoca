export async function fetchHello() {
    const response = await fetch('/api/hello');
    const text = await response.text();
    return text;
}  