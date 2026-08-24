import { config } from "dotenv";
config({ path: ".env.local" });
config();

import { ensureLeadsSchema } from "../lib/db";

async function main() {
  await ensureLeadsSchema();
  console.log("Leads schema ready.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
