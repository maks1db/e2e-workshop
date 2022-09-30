
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html'],

  theme: {
    extend: {

      fontSize: {
        xxs: ['10px', '16px'],
        '3xl+': ['32px', '40px'],
      },
      spacing: {
        '2px': '2px',
        18: '4.5rem',
        120: '30rem',
        128: '32rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      boxShadow: {
        'ornament-m': '0px 4px 20px rgba(0, 0, 0, 0.06)',
        'ornament-l': '0px 8px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('child', '& > *');
    },
  ],
  safelist: [
    'bg-ornament-background-action-light-pressed',
    'bg-ornament-background-action-light-hover',
    'bg-ornament-background-action-light',
    'bg-ornament-space-space-80',
    'bg-ornament-additional-a1',
    'bg-ornament-content-error-dark',
    'bg-ornament-content-success-dark',
    'bg-ornament-content-info-dark',
    'bg-ornament-background-action-pressed',
    'bg-ornament-additional-e1',
    'bg-ornament-additional-f1',
    'bg-ornament-additional-e2',
    'bg-ornament-background-main',
    'bg-ornament-background-primary',
  ],
};
