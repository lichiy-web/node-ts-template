declare interface Environment {
  PORT: number;
  HOST: string;
  IS_LOCAL: boolean;
  URL: { host: string; port: number };
  NEW_FEATURE: string | null;
}
