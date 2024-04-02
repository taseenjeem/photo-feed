import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(response, { params }) {
  const data = await getPhotoById(params?.id);
  return NextResponse.json(data);
}
