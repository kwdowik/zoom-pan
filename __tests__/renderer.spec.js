const assert = require('assert');
const { renderer } = require('../src/renderer');
const { panByTestCases, panToTestCases, zoomTestCases } = require('./renderer.testCases');

describe('renderer', () => {
    let _element;
    beforeEach(() => {
        _element = {
            getBoundingClientRect: () => ({ left: 0, top: 0 }),
            style: {
                transform: "",
                transformOrigin: "",
            }
        }
    })
    describe('#canPan()', () => {
        describe('#panBy()', () => {
            panByTestCases.forEach(({ description, minScale, maxScale, origins, result }) =>
                it(description, () => {
                    const instance = renderer({ minScale, maxScale, element: _element })
                    origins.forEach(({ originX, originY }) => instance.panBy({ originX, originY }))
                    assert.equal(_element.style.transform, result);
                }),
            );
        });
        describe('#panTo()', () => {
            panToTestCases.forEach(({ description, minScale, maxScale, origins, result }) =>
                it(description, () => {
                    const instance = renderer({ minScale, maxScale, element: _element })
                    origins.forEach(({ originX, originY, scale }) => instance.panTo({ originX, originY, scale }))
                    assert.equal(_element.style.transform, result);
                }),
            );
        });
    });
    describe('#canZoom()', () => {
        describe('#zoom()', () => {
            zoomTestCases.forEach(({ description, positions, minScale, maxScale, rect, results }) =>
                it(description, () => {
                    const newElement = { ..._element, getBoundingClientRect: () => rect };
                    const instance = renderer({ minScale, maxScale, element: newElement });
                    positions.forEach(({ x, y, deltaScale }) => instance.zoom({ x, y, deltaScale }))
                    assert.equal(_element.style.transform, results[0]);
                    assert.equal(_element.style.transformOrigin, results[1]);
                }),
            )
        })
    })
});