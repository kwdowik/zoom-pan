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
        description: 'should zoom to x: 100, y: 100 and scale: 1.01',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: 100,
            left: 50,
        },
        mousePositions: [
            {
                mouseX: 150,
                mouseY: 200,
                deltaScale: 1,
            }
        ],
        results: [
            'matrix(1.01, 0, 0, 1.01, 0, 0)',
            '100px 100px'
        ],
    },
    {
        description: 'should zoom to x: -294.11764705882354, y: 470.5882352941177 and scale: 1.19',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: -500,
            left: 0,
        },
        mousePositions: [
            {
                mouseX: 750,
                mouseY: 1200,
                deltaScale: -15,
            },
            {
                mouseX: -250,
                mouseY: -100,
                deltaScale: 40,
            },
        ],
        results: [
            'matrix(1.19, 0, 0, 1.19, 156.61764705882356, 184.4117647058824)',
            '-294.11764705882354px 470.5882352941177px'
        ],
    },
    {
        description: 'should zoom to x: 380.95238095238096px, y: 857.1428571428571px and scale: 2.625',
        minScale: .1,
        maxScale: 20,
        rect: {
            top: -500,
            left: 0,
        },
        mousePositions: [
            {
                mouseX: 750,
                mouseY: 1200,
                deltaScale: 25,
            },
            {
                mouseX: 750,
                mouseY: 1200,
                deltaScale: 40,
            },
            {
                mouseX: 800,
                mouseY: 1300,
                deltaScale: 20,
            },
            {
                mouseX: 800,
                mouseY: 1300,
                deltaScale: 25,
            },
        ],
        results: [
            'matrix(2.625, 0, 0, 2.625, -190.95238095238102, -437.1428571428574)',
            '380.95238095238096px 857.1428571428571px'
        ],
    },
]

module.exports = {
    panByTestCases,
    panToTestCases,
    zoomTestCases
};