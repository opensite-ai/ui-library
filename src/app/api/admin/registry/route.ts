import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

const execAsync = promisify(exec);

function getRegistryStatus() {
  const registryPath = join(
    process.cwd(),
    "src",
    "data",
    "registry.generated.json"
  );
  const pkgPath = join(process.cwd(), "package.json");

  let metadata = null;
  if (existsSync(registryPath)) {
    const data = JSON.parse(readFileSync(registryPath, "utf-8"));
    metadata = data.metadata ?? null;
  }

  let localVersionRaw = "";
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
    localVersionRaw =
      pkg.dependencies?.["@opensite/ui"] ||
      pkg.devDependencies?.["@opensite/ui"] ||
      "";
  }

  const localVersion = localVersionRaw
    ? localVersionRaw.replace(/^[^0-9]*/, "")
    : null;

  return {
    metadata,
    localVersion,
    localVersionRaw: localVersionRaw || null,
  };
}

export async function GET() {
  return NextResponse.json({ success: true, ...getRegistryStatus() });
}

export async function POST() {
  const allowSync =
    process.env.NODE_ENV !== "production" ||
    process.env.ALLOW_REGISTRY_SYNC === "true";

  if (!allowSync) {
    return NextResponse.json(
      {
        success: false,
        error: "Registry sync disabled in this environment.",
      },
      { status: 403 }
    );
  }

  try {
    await execAsync("npm run sync:registry", {
      cwd: process.cwd(),
    });

    return NextResponse.json({ success: true, ...getRegistryStatus() });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Sync failed",
      },
      { status: 500 }
    );
  }
}
