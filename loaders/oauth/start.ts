import { OAUTH_URL_AUTH, SCOPES } from "../../utils/constant";

export interface Props {
  clientId: string;
  redirectUri: string;
  state: string;
}

/**
 * @name OAUTH_START
 * @title Start OAuth
 * @description Starts the OAuth authorization flow
 */
export default function start(props: Props) {
  const authParams = new URLSearchParams({
    client_id: props.clientId,
    redirect_uri: props.redirectUri,
    response_type: "code",
    scope: SCOPES,
    access_type: "offline",
    prompt: "consent",
    state: props.state,
  });

  const authorizationUrl = `${OAUTH_URL_AUTH}?${authParams.toString()}`

  return Response.redirect(authorizationUrl);
}
