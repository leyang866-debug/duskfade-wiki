/** Site configuration — the single source of truth for Duskfade metadata. */

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  domain: string;
  tagline: string;
  legalNotice: string;
  social: { official?: string; discord?: string; youtube?: string; twitter?: string; reddit?: string };
  game: { name: string; platform: string; developer: string; publisher: string; genre: string; releaseDate?: string };
  ogImageWidth: number;
  ogImageHeight: number;
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'Duskfade Guide',
  shortName: 'Duskfade',
  description: 'Master Duskfade with our guide covering platforming, combat, bosses, abilities, upgrades, secrets, collectibles, and essential tips for every region.',
  domain: 'duskfade.store',
  tagline: 'Practical Clockpunk guides for every player.',
  legalNotice: 'Duskfade Guide is a fan-made community resource and is not affiliated with Weird Beluga or Fireshine Games.',
  social: {
    official: 'https://weirdbeluga.com',
    discord: 'https://discord.gg/sA9kqxnPyx',
    youtube: 'https://www.youtube.com/@weirdbeluga',
    twitter: 'https://x.com/WeirdBeluga',
  },
  game: {
    name: 'Duskfade',
    platform: 'PC, PlayStation 5, Xbox Series X|S, Nintendo Switch 2',
    developer: 'Weird Beluga',
    publisher: 'Fireshine Games',
    genre: '3D Action Platformer',
    releaseDate: '2026-08-13',
  },
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  defaultAuthor: 'Duskfade Guide',
};

export const siteUrl: string = (process.env.SITE_URL || 'https://duskfade.store').replace(/\/$/, '');
export const ga4MeasurementId = 'G-VMFD61CYCK';
export const googleSiteVerification = 'F3kn_GACjrJqk5FPxImRmvfTxa_N9mTeZiHfUkXEpa0';
