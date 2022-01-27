export const breakpoints = {
    large: 600,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
        `@media screen and (min-width: ${breakpoints[key]}px) { ${style} }`;
};
