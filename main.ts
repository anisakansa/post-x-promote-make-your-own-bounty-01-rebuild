// post-x-promote-make-your-own-bounty-01 — make.fun bounty
// Promote make.fun's make-your-own-bounty post on X.
//
// The entry is one X post by the entrant. This program takes the post's
// URL from POST.json in the repo root, validates it, and copies it
// byte-for-byte to /output/POST.json. No network, no wall clock, no
// randomness: the same input always produces the same output.
//
// A valid URL must be an https://x.com/ or https://twitter.com/ link
// that contains /status/ — that is what identifies a single post.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const IN_PATH = join(ROOT, "POST.json");
const OUT_PATH = "/output/POST.json";

const raw = readFileSync(IN_PATH, "utf8");
const parsed = JSON.parse(raw);

if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  throw new Error("POST.json must contain a JSON object");
}
if (typeof parsed.url !== "string") {
  throw new Error("POST.json must contain a string field 'url'");
}
if (
  !parsed.url.startsWith("https://x.com/") &&
  !parsed.url.startsWith("https://twitter.com/")
) {
  throw new Error("url must start with https://x.com/ or https://twitter.com/");
}
if (parsed.url !== parsed.url.trim()) {
  throw new Error("url must not have leading or trailing whitespace");
}
const statusIndex = parsed.url.indexOf("/status/");
if (statusIndex === -1) {
  throw new Error("url must contain /status/");
}
const statusId = parsed.url.slice(statusIndex + "/status/".length);
if (statusId.length === 0) {
  throw new Error("url must have a status id after /status/");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, raw);
