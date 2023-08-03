const config = {
    presets: [require('@obosbbl/grunnmuren-tailwind')],
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        // Grunnmuren React components
        './node_modules/@obosbbl/grunnmuren-react/dist/**/*.mjs',
        // Quick fix for production builds on Azure.
        '../node_modules/@obosbbl/grunnmuren-react/dist/**/*.mjs',
        // The layout component
        './node_modules/@code-obos/obos-layout/src/**/*.{ts,tsx}',
        // Quick fix for production builds on Azure.
        '../node_modules/@code-obos/obos-layout/src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            // change the Tailwind grunnmuren preset to use OBOS fonts loaded via next/font
            fontFamily: {
                sans: ['var(--font-obos)'],
            },
        },
    },
};

module.exports = config;