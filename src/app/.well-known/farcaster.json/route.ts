import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4Njk5OTksICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiaGVsbG5vZXRoLW55Yy1zd29yZHNoYXJlLnZlcmNlbC5hcHAifQ",
      signature: "L7nzVka4QfslIUsb8cQ_AxEI7kNsU4tNkPoPWKDi3mdUefGF6UjLkxczkoDZOU8OFOQUo2A96IUsIhfAJTve0hs"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
