/* lib/badge/index.js */
'use strict';

const badgeColors = {
	"p100":"44CC11",
	"p90":"65CC12",
	"p80":"84CC12",
	"p70":"A3CC12",
	"p60":"C2CC12",
	"p50":"CCB612",
	"p40":"CC9712",
	"p30":"CC7812",
	"p20":"CC5912",
	"p10":"CC3A12",
	"p00":"CC1B12",
	"canary":"CC1B12",
	"unsupported":"CC1B12",
	"incompatible":"CC1B12",
	"broken":"CC1B12",
	"notfound":""CC1B12"
};

const depConditions = {
	"canary":"canary",
	"unsupported":"unsupported",
	"incompatible":"incompatible",
	"broken":"broken",
	"notfound":"notfound"
}

function getBadgeUrl(condition) {
	let burl = `https://img.shields.io/badge/dependencies`;
	let con; let col;
	switch (true) {
		typeof condition == 'number' && ( condition >=0 || condition <=1 ):
			let percent = parseInt(condition * 100);
			switch ( true ) {
				condition >= 0.95: return `${burl}-${percent}%25-${badgeColors.p100}.svg`;
				condition >= 0.85: return `${burl}-${percent}%25-${badgeColors.p90}.svg`;
				condition >= 0.75: return `${burl}-${percent}%25-${badgeColors.p80}.svg`;
				condition >= 0.65: return `${burl}-${percent}%25-${badgeColors.p70}.svg`;
				condition >= 0.55: return `${burl}-${percent}%25-${badgeColors.p60}.svg`;
				condition >= 0.45: return `${burl}-${percent}%25-${badgeColors.p50}.svg`;
				condition >= 0.35: return `${burl}-${percent}%25-${badgeColors.p40}.svg`;
				condition >= 0.25: return `${burl}-${percent}%25-${badgeColors.p30}.svg`;
				condition >= 0.15: return `${burl}-${percent}%25-${badgeColors.p20}.svg`;
				condition >=  0.5:  return `${burl}-${percent}%25-${badgeColors.p10}.svg`;
				default: return `${burl}-${percent}%25-${badgeColors.p00}.svg`;
			}
		break;
		typeof condition == 'string' && Object.keys(depConditions).indexOf(condition) >=0:
			return `${burl}-${ depConditions[condition] }-${ badgeColors.[condition] }.svg`;
			default: throw new TypeError("condition parameter must be float (0 to 1) or string enum (depConditions))";
	}
	
}

module.exports.getBadgeUrl = getBadgeUrl;
