import type { FC } from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const TableauIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="8" fill="#E97627"/>
    <rect x="8" y="20" width="32" height="8" fill="white"/>
    <rect x="20" y="8" width="8" height="32" fill="white"/>
    <rect x="12" y="12" width="24" height="4" fill="#E97627"/>
    <rect x="12" y="32" width="24" height="4" fill="#E97627"/>
    <rect x="22" y="10" width="4" height="28" fill="#E97627"/>
  </svg>
);

export const SEOIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#seoGradient)"/>
    <circle cx="19" cy="19" r="7" fill="none" stroke="white" strokeWidth="2.5"/>
    <path d="24.5 24.5l7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M15 15l8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="32" cy="16" r="3" fill="white"/>
    <path d="M30.5 16h3M32 14.5v3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="12" y="32" width="12" height="2" rx="1" fill="white" opacity="0.8"/>
    <rect x="12" y="36" width="8" height="2" rx="1" fill="white" opacity="0.6"/>
  </svg>
);

export const GoogleAdsIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="adsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBC04"/>
        <stop offset="50%" stopColor="#EA4335"/>
        <stop offset="100%" stopColor="#4285F4"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#adsGradient)"/>
    <path d="M24 8L32 20H28L24 14L20 20H16L24 8Z" fill="white"/>
    <circle cx="16" cy="28" r="4" fill="white"/>
    <circle cx="32" cy="28" r="4" fill="white"/>
    <rect x="20" y="26" width="8" height="4" rx="2" fill="white"/>
    <path d="M12 36h24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="40" r="1.5" fill="white"/>
    <circle cx="24" cy="40" r="1.5" fill="white"/>
    <circle cx="30" cy="40" r="1.5" fill="white"/>
  </svg>
);

export const ContentStrategyIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="8" fill="#FF6B35"/>
    <rect x="8" y="12" width="32" height="24" rx="2" fill="white"/>
    <rect x="12" y="16" width="24" height="2" fill="#FF6B35"/>
    <rect x="12" y="20" width="20" height="2" fill="#FF6B35"/>
    <rect x="12" y="24" width="16" height="2" fill="#FF6B35"/>
    <rect x="12" y="28" width="12" height="2" fill="#FF6B35"/>
    <circle cx="36" cy="16" r="4" fill="#FF6B35"/>
    <path d="M34 16h4M36 14v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GoogleAnalyticsIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="8" fill="#E37400"/>
    <rect x="10" y="28" width="6" height="12" rx="3" fill="white"/>
    <rect x="18" y="20" width="6" height="20" rx="3" fill="white"/>
    <rect x="26" y="24" width="6" height="16" rx="3" fill="white"/>
    <rect x="34" y="16" width="6" height="24" rx="3" fill="white"/>
  </svg>
);

export const GoogleTagManagerIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="8" fill="#246FDB"/>
    <rect x="8" y="8" width="32" height="32" rx="4" fill="white"/>
    <rect x="12" y="12" width="24" height="4" fill="#246FDB"/>
    <rect x="12" y="20" width="16" height="3" fill="#246FDB"/>
    <rect x="12" y="26" width="20" height="3" fill="#246FDB"/>
    <rect x="12" y="32" width="12" height="3" fill="#246FDB"/>
    <rect x="30" y="20" width="6" height="6" fill="#246FDB"/>
  </svg>
);

export const PPCOptimizationIcon: FC<IconProps> = ({ width = 48, height = 48, className }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" className={className}>
    <rect width="48" height="48" rx="8" fill="#FBBC04"/>
    <circle cx="24" cy="24" r="12" fill="white"/>
    <path d="M18 24L22 28L30 20" stroke="#FBBC04" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L16 8M36 12L32 8M12 36L16 40M36 36L32 40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);