import SocketIO from "nodman-socket";

export default ({server}) => {
    const io = SocketIO.run({
        server, config: {
            path: '/socket.io',
            serveClient: false,

            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false,
            cors: {
                origin: (origin, callback) => {
                    callback(null, true);
                }
            }
        }
    });

    io.on('connection', (socket) => {
        socket.emit('hello', 'hello world')
    });
}
