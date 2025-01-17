export default async function TimePage() {
    const timeRequest = await fetch('http://127.0.0.1:8700/chuanyun/time', {
        next: { revalidate: 10 }
    })
    const time = await timeRequest.json()
    console.log(time)

    return <div>Current timestamp: {time?.msg}</div>
}