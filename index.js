
(() => {
    const { renderer } = require("./src/renderer");
    const container = document.getElementById("container");
    const instance = renderer({ minScale: .1, maxScale: 30, element: container.children[0] });
    container.addEventListener("wheel", (event) => {
        if (!event.ctrlKey) {
            return;
        }
        event.preventDefault();
        instance.zoom({
            deltaScale: event.deltaY,
            mouseX: event.pageX,
            mouseY: event.pageY
        });
    });
    container.addEventListener("dblclick", () => {
        instance.panTo({
            originX: 0,
            originY: 0,
            scale: 1,
        });
    });
    container.addEventListener("mousemove", (event) => {
        if (!event.ctrlKey) {
            return;
        }
        event.preventDefault();
        instance.panBy({
            originX: event.movementX,
            originY: event.movementY
        });
    })
    return () => {
        container.removeEventListener("wheel");
        container.removeEventListener("mousemove");
        container.removeEventListener("dbclick");
    }
})();