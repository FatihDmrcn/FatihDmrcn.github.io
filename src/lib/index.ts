export const length = 2;
export const theme = ["night", "emerald", "night"];

export const color_key = [
    "--color-base-100",
    "--color-base-200",
    "--color-base-300",
    "--color-base-content",
    "--color-neutral",
    "--color-neutral-content"
];

export const color: { [key: string]: { [color: string]: string } } = {
    "night": {
        "--color-base-100": "oklch(20.768% 0.039 265.754)",
        "--color-base-200": "oklch(19.314% 0.037 265.754)",
        "--color-base-300": "oklch(17.86% 0.034 265.754)",
        "--color-base-content": "oklch(84.153% 0.007 265.754)",
        "--color-neutral": "oklch(27.949% 0.036 260.03)",
        "--color-neutral-content": "oklch(85.589% 0.007 260.03)",
    },
    "emerald": {
        "--color-base-100": "oklch(100% 0 0)",
        "--color-base-200": "oklch(93% 0 0)",
        "--color-base-300": "oklch(86% 0 0)",
        "--color-base-content": "oklch(35.519% 0.032 262.988)",
        "--color-neutral": "oklch(35.519% 0.032 262.988)",
        "--color-neutral-content": "oklch(98.462% 0.001 247.838)",
    }
}