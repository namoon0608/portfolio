/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            'head-semibold': [
                '28px',
                {
                    fontWeight: '600',
                },
            ],
            'head-bold': [
                '28px',
                {
                    fontWeight: '700',
                },
            ],
            'heading1-bold': [
                '36px',
                {
                    fontWeight: '700',
                },
            ],
            'heading1-semibold': [
                '36px',
                {
                    fontWeight: '600',
                },
            ],
            'heading2-bold': [
                '30px',
                {
                    fontWeight: '700',
                },
            ],
            'heading2-semibold': [
                '30px',
                {
                    fontWeight: '600',
                },
            ],
            'heading3-bold': [
                '24px',
                {
                    fontWeight: '700',
                },
            ],
            'heading3-semibold': [
                '24px',
                {
                    fontWeight: '600',
                },
            ],
            'heading4-medium': [
                '20px',
                {
                    fontWeight: '500',
                },
            ],
            'heading4-semibold': [
                '20px',
                {
                    fontWeight: '600',
                },
            ],
            'heading4-bold': [
                '20px',
                {
                    fontWeight: '700',
                },
            ],
            'body-bold': [
                '18px',
                {
                    fontWeight: '700',
                },
            ],
            'body-semibold': [
                '18px',
                {
                    fontWeight: '600',
                },
            ],
            'body-medium': [
                '18px',
                {
                    fontWeight: '500',
                },
            ],
            'body-normal': [
                '18px',
                {
                    fontWeight: '400',
                },
            ],
            'body1-bold': [
                '18px',
                {
                    fontWeight: '700',
                },
            ],
            'base-regular': [
                '16px',
                {
                    fontWeight: '400',
                },
            ],
            'base-medium': [
                '16px',
                {
                    fontWeight: '500',
                },
            ],
            'base-semibold': [
                '16px',
                {
                    fontWeight: '600',
                },
            ],
            'base-bold': [
                '16px',
                {
                    fontWeight: '700',
                },
            ],
            'small-regular': [
                '14px',
                {
                    fontWeight: '400',
                },
            ],
            'small-medium': [
                '14px',
                {
                    fontWeight: '500',
                },
            ],
            'small-semibold': [
                '14px',
                {
                    fontWeight: '600',
                },
            ],
            'small-large-semibold': [
                '14px',
                {
                    fontWeight: '700',
                },
            ],
            'subtle-large': [
                '13px',
                {
                    fontWeight: '400',
                },
            ],
            'subtle-large-semibold': [
                '13px',
                {
                    fontWeight: '600',
                },
            ],
            'subtle-large-bold': [
                '13px',
                {
                    fontWeight: '700',
                },
            ],
            'subtle-regular': [
                '12px',
                {
                    fontWeight: '400',
                },
            ],
            'subtle-medium': [
                '12px',
                {
                    fontWeight: '500',
                },
            ],
            'subtle-semibold': [
                '12px',
                {
                    fontWeight: '600',
                },
            ],
            'tiny-regular': [
                '11px',
                {
                    fontWeight: '400',
                },
            ],
            'x-small-semibold': [
                '7px',
                {
                    fontWeight: '600',
                },
            ],
        },
        extend: {
            colors: {
                primary: '#050816',
                secondary: '#aaa6c3',
                tertiary: '#151030',
                white: '#FFFFFF',
                'black-100': '#100d25',
                'black-200': '#090325',
                'white-100': '#f3f3f3',
            },
            boxShadow: {
                card: '0px 35px 120px -15px #211e35',
            },
            screens: {
                xs: '450px',
                xxs: '320px',
            },
        },
    },
    plugins: [],
};
