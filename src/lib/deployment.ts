type DeploymentEnvironment = Record<string, string | undefined>;

export const defaultGoogleAnalyticsId = "G-KRT8VCTFXX";

export function isProductionDeployment(
  environment: DeploymentEnvironment = process.env,
): boolean {
  if (environment.DEPLOYMENT_ENV === "production") return true;
  if (environment.VERCEL_ENV === "production") return true;

  return environment.CF_PAGES === "1" && environment.CF_PAGES_BRANCH === "main";
}

export function resolveGoogleAnalyticsId(
  environment: DeploymentEnvironment = process.env,
): string {
  return environment.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() || defaultGoogleAnalyticsId;
}
