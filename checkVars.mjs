const vars = ["DISCORD_TOKEN", "GUILD_ID"];

const checkVars = () => {
  const missing = vars.filter((envVar) => !process.env[envVar]);

  console.log(process.env.DISCORD_TOKEN);

  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
};

export default checkVars;
