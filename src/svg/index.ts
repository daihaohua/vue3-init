const req = require.context('./icon', true, /\.svg$/);
req.keys().map(req)