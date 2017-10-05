const baseUrl = '';

const issuer = {
	issuer: "",
	authorization_endpoint: `${baseUrl}/auth`,
	token_endpoint: `${baseUrl}/token`,
	userinfo_endpoint: `${baseUrl}/me`,
	jwks_uri: `${baseUrl}/certs`,

	check_session_iframe: `${baseUrl}/session/check`,
	end_session_endpoint: `${baseUrl}/session/end`,
	registration_endpoint: `${baseUrl}/reg`,
	token_introspection_endpoint: `${baseUrl}/token/introspection`,
	token_revocation_endpoint: `${baseUrl}/token/revocation`,
};

module.exports = issuer;
