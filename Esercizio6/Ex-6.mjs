// Our HTTP server now sends a JSON response body.
// Change the location in the response to "Mars".
// Run the server and make a request to it with curl using the --verbose flag.
// What is the value of the Content-Length response header? 19

import http from 'node:http';
const PORT = process.eventNames.PORT || 3100;

const server = http.createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader("Content-Type", "application/json");

    response.end(JSON.stringify({ location: "Mars" }));

})

server.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))