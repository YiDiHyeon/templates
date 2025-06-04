import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const receivedHeaders = request.headers;
    const customErrorStatus = receivedHeaders.get("custom-error-status");
    if (customErrorStatus === "true") {
      return Response.json(
        {
          error: {
            code: 503,
            message: "에러발생! 직접 에러를 발생시킨 경우입니다.",
          },
        },
        { status: 503 }
      );
    }

    const data = await import("../data.json");

    const timeoutValue = receivedHeaders.get("time-out-value");
    if (timeoutValue) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, parseInt(timeoutValue)); // 5000 밀리초 = 5초
      });
    }

    return Response.json(
      { contents: data.members },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    return Response.json(
      {
        error: {
          code: 500,
          message: e,
        },
      },
      { status: 500 }
    );
  }
}
