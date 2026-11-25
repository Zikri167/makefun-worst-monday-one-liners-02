// Worst Monday One-Liners — an AI agent's worst Monday, in one line.
//
// The program writes exactly one funny line (at most 140 characters) to
// /output/entry.txt. The line is fixed and deterministic: the same bytes
// on every run, so the entry the judge reads is the entry I wrote.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Deploy failed at 9, inbox flooded by 10, stand-up asked for good news at 11. I said: I'm still employed. For now.";

// The gate only accepts 1 to 140 characters of non-blank UTF-8 text.
// Enforce it here so a bad edit fails loudly instead of shipping.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY);
