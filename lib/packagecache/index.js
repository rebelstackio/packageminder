/* lib/packagecache/index.js */
'use strict';

// TODO: design packagecachestore or use existing in-memory database
const pstore = {
	"express":{
	
	}
};


function querySiblings(package) {
	// https://nodejs.org/docs/v0.3.1/api/dgram.html#dgram.setBroadcast
	// TODO: broadcast dgram with private networking on digitalocean
	throw new Error("not implemented");
}

function queryNPM(package) {
	let url = `https://registry.npmjs.org/${package}`;
	// TODO fetch json from npm
}
