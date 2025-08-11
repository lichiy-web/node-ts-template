import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';

const envBuffer = fs.readFileSync(path.resolve('.env'));
const rawEnv = dotenv.parse(envBuffer);

export const parseEnv = (): Environment => {
  const envAcc: Partial<
    Record<keyof Environment, string | object | number | boolean | null>
  > = {};

  for (const [key, value] of Object.entries(rawEnv)) {
    try {
      envAcc[key as keyof Environment] = JSON.parse(value) as
        | number
        | object
        | boolean
        | null;
    } catch {
      envAcc[key as keyof Environment] = value as string;
    }
  }

  return envAcc as Environment;
};
