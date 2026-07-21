import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  TrainBattery = '/guides/train-battery-energy-guide',
  PassengersRations = '/guides/passengers-rations-respawn',
  Expeditions = '/guides/expeditions-return-plan',
  GliderIso = '/guides/glider-scouting-iso-guide',
  CraftingRecycler = '/guides/crafting-building-recycler',
  WagonsStorage = '/guides/wagons-storage-train-upgrades',
  ColdHunger = '/guides/cold-hunger-survival',
  CombatRobots = '/guides/combat-robots-emp-guide',
  CoopRoles = '/guides/co-op-roles-multiplayer-fixes',
  Achievements = '/guides/achievements-guide',
  DemoEarlyAccess = '/guides/demo-vs-early-access',
  SystemRequirements = '/system-requirements',
  Review = '/review',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
