const ModularScale = require('modularscale-js');

module.exports = function({ base, ratio, variants }) {
    const ms = function(size) {
        return Math.round(ModularScale(size, { base, ratio })) + 'px';
    }

    const sizes = [
        { size: 'sm',   value: -1 },
        { size: 'base', value: 0 },
        { size: 'lg',   value: 1 },
        { size: 'xl',   value: 2 },
        { size: '2xl',  value: 3 },
        { size: '3xl',  value: 4 },
        { size: '4xl',  value: 5 },
    ];


    return function({ addUtilities }) {
        const utilities = sizes.map(({ size, value }) => ({
            [`.ms-${size}`]: {
                fontSize: ms(value),
            },
        }));

        addUtilities(utilities, variants);
    }
}
