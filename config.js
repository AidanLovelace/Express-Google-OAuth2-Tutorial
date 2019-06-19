const port = 3002;
const baseURL = `http://localhost:${port}`;

module.exports = {
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: port,
  oauth2Credentials: {
    client_id: "",
    project_id: "subscrubber",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "",
    redirect_uris: [
      `${baseURL}/auth_callback`
    ],
    scopes: [
      'https://www.googleapis.com/auth/youtube.readonly'
    ]
  }
};