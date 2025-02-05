import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-gray-900">
        <div tw="flex flex-col items-center text-center">
          <div tw="text-6xl mb-4">⚔️</div>
          <h1 tw="text-5xl font-bold text-white mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-3xl text-gray-300 font-medium max-w-[80%]">
            {PROJECT_DESCRIPTION}
          </h3>
        </div>
        <div tw="absolute bottom-8 text-gray-400 text-xl">
          Join the blade community
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
