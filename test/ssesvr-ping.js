
(async () => {
    const Fastify = require("fastify")
    const FastifyCors = require("@fastify/cors")

    const fastify = Fastify()
    await fastify.register(FastifyCors, {
        origin: '*',
    })
    fastify.get("/ping", (req, rep) => {
        rep.get
        console.log("enter", Object.assign(
            rep.getHeaders(),
            {
                'Content-Type': 'text/event-stream',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache',
            },
        ))
        rep.raw.writeHead(
            200,
            Object.assign(
                rep.getHeaders(),
                {
                    'Content-Type': 'text/event-stream',
                    'Connection': 'keep-alive',
                    'Cache-Control': 'no-cache',
                },
            )
        )
        const id = setInterval(() => {
            console.log("ping")
            rep.raw.write(`data: pong(at : ${(new Date()).toISOString()})\n\n`)
        }, 1000)
        rep.raw.on('close', () => {
            console.log("close")
            clearInterval(id)
        })
    })
    await fastify.listen(30000, '::')
})();