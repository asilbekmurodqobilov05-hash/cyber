import { NextResponse } from "next/server";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { assertRateLimit } from "@/lib/server/rate-limit";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "anonymous";

  try {
    assertRateLimit(forwardedFor);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Too many requests." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please provide valid contact details and a message." }, { status: 400 });
  }

  if (hasSupabaseEnv()) {
    try {
      const supabase = await createSupabaseServerClient();
      const { error } = await supabase.from("messages").insert(parsed.data);

      if (error) {
        return NextResponse.json({ error: "Unable to store your message right now." }, { status: 500 });
      }
    } catch {
      return NextResponse.json({ error: "Unable to store your message right now." }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
