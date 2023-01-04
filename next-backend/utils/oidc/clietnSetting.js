import { Log, OidcClient } from "oidc-client-ts";
// Log.setLogger(console);
// Log.setLevel(Log.INFO);

const url = 'http://localhost:3000'+ "/oidc-client";

export const settings = {
    authority: "http://159.75.212.177:83",
    client_id: "SCR-bk",
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid profile",

    response_mode: "query",

    filterProtocolClaims: true
};

export {
    Log,
    OidcClient
};


