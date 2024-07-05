
const FAVORITE_PROGRAMMING_LANGUAGE = "TypeScript";

const http = require( "http" );
http.createServer( ( req, res ) => {

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( FAVORITE_PROGRAMMING_LANGUAGE );

} ).listen( 3000 );

// Running:
// node main.js
