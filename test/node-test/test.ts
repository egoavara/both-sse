import EventSource from 'both-sse'

const prom = new Promise(resolve => {

    console.log('run')
    const ev = new EventSource('http://localhost:30000/ping')
    ev.onmessage = ((ev) => {
        console.log('data')
        console.log(ev.data)
    })
    ev.onerror = ((ev) => {
        console.log('error')
        console.log(ev.data)
    })
    ev.onopen = ()=>{
        console.log('open')
    }
})

prom.then(() => {
    console.log('then')
})