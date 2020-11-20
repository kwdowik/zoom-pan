const panByTestCases = [
    {
        description: 'should pan by passed originX and originY (x: 100, y: 100)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: 100,
                originY: 100,
            }
        ],
        result: 'matrix(1, 0, 0, 1, 100, 100)'
    },
    {
        description: 'should pan by passed originX and originY (x: 50, y: 50)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: 100,
                originY: 100,
            },
            {
                originX: -50,
                originY: -50,
            }
        ],
        result: 'matrix(1, 0, 0, 1, 50, 50)'
    },
    {
        description: 'should pan by passed originX and originY (x: -50, y: 50)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: -100,
                originY: 100,
            },
            {
                originX: 50,
                originY: -50,
            }
        ],
        result: 'matrix(1, 0, 0, 1, -50, 50)'
    }
]

const panToTestCases = [
    {
        description: 'should pan to passed originX and originY without changing scale (x: -50, y: -50)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: -100,
                originY: 100,
                scale: 1,
            },
            {
                originX: -50,
                originY: -50,
                scale: 1,
            }
        ],
        result: 'matrix(1, 0, 0, 1, -50, -50)'
    },
    {
        description: 'should pan by passed originX and originY with scale 2.0 (x: 50, y: 50)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: 100,
                originY: 100,
                scale: 2.0,
            },
            {
                originX: 50,
                originY: 50,
                scale: 2.0,
            }
        ],
        result: 'matrix(2, 0, 0, 2, 50, 50)'
    },
    {
        description: 'should pan by passed originX and originY with scale 1.0 and 2.5 (x: 750, y: 500)',
        minScale: .1,
        maxScale: 20,
        origins: [
            {
                originX: 100,
                originY: 100,
                scale: 1.0,
            },
            {
                originX: 750,
                originY: 500,
                scale: 2.5,
            }
        ],
        result: 'matrix(2.5, 0, 0, 2.5, 750, 500)'
    },
]

const zoomTestCases = [
    {
        description: 'should zoom to x: 100, y: 100 and scale: 1.1',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: 100,
            left: 50,
        },
        positions: [
            {
                x: 150,
                y: 200,
                deltaScale: 1,
            }
        ],
        results: [
            'matrix(1.1, 0, 0, 1.1, 0, 0)',
            '100px 100px'
        ],
    },
    {
        description: 'should zoom to x: -2500, y: 4000px and scale: 0.5',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: -500,
            left: 0,
        },
        positions: [
            {
                x: 750,
                y: 1200,
                deltaScale: -15,
            },
            {
                x: -250,
                y: -100,
                deltaScale: 40,
            },
        ],
        results: [
            'matrix(0.5, 0, 0, 0.5, 2925, -2070)',
            '-2500px 4000px'
        ],
    },
    {
        description: 'should zoom to x: 40px, y: 90px and scale: 20',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: -500,
            left: 0,
        },
        positions: [
            {
                x: 750,
                y: 1200,
                deltaScale: 25,
            },
            {
                x: 750,
                y: 1200,
                deltaScale: 40,
            },
            {
                x: 800,
                y: 1300,
                deltaScale: 20,
            },
            {
                x: 800,
                y: 1300,
                deltaScale: 25,
            },
        ],
        results: [
            'matrix(20, 0, 0, 20, -2890, -6561.428571428572)',
            '40px 90px'
        ],
    },
]

module.exports = {
    panByTestCases,
    panToTestCases,
    zoomTestCases
};
