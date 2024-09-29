export const objectCoords = {
    getObjectCoords: (name) => {
        return objectCoords[name]
    },
    reset: {
        cameraTarget: {
            x: -5,
            y: 2,
            z: -5,
        },
        cameraPosition: {
            x: 8,
            y: 10,
            z: 8,
        },
        cameraZoom: {
            x: 50,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.015,
        },
    },
    resetWMenu: {
        cameraTarget: {
            x: (-5 + 3),
            y: 2,
            z: (-5 - 3),
        },
        cameraPosition: {
            x: (8 + 3),
            y: 10,
            z: (8 - 3),
        },
        cameraZoom: {
            x: 50,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.012,
            y: 0.018,
            z: 0.015,
        },
    },
    softReset: {
        cameraTarget: {
            x: -5,
            y: 2,
            z: -5,
        },
        cameraPosition: {
            x: 4,
            y: 5,
            z: 4,
        },
        cameraZoom: {
            x: 125,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.005,
            y: 0.006,
            z: 0.02,
        },
    },
    trophy: {
        cameraTarget: {
            x: 1.57 * 2,
            y: 2.13 * 2,
            z: -1.77 * 2,
        },
        cameraPosition: {
            x: 1.57 * 2,
            y: 2.63 * 2,
            z: 8,
        },
        cameraZoom: {
            x: 250,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.015,
            y: 0.008,
            z: 0.005,
        },
    },
    laptop001: {
        cameraTarget: {
            x: 0.26 * 2,
            y: 1.80 * 2,
            z: -1.80 * 2,
        },
        cameraPosition: {
            x: 0.26 * 2,
            y: 1.90 * 2 + 1.25,
            z: 8,
        },
        cameraZoom: {
            x: 500,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.0028,
        },
    },
    coffeeMug: {
        cameraTarget: {
            x: (0.97 + 0.25) * 2,
            y: 1.64 * 2,
            z: -1.61 * 2,
        },
        cameraPosition: {
            x: (0.97 + 0.25) * 2,
            y: 3.71 * 2,
            z: 8,
        },
        cameraZoom: {
            x: 400,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.012,
            y: 0.008,
            z: 0.003,
        },
    },
    flask: {
        cameraTarget: {
            x: -1.71 * 2,
            y: 1.48 * 2,
            z: (0.65 - 0.25) * 2,
        },
        cameraPosition: {
            x: 1 * 2,
            y: (1.48 + 1) * 2,
            z: (0.65 - 0.25) * 2,
        },
        cameraZoom: {
            x: 300,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.004,
        },
    },
    globe: {
        cameraTarget: {
            x: (-1.27 + 0.25) * 2,
            y: 1.94 * 2,
            z: -1.47 * 2,
        },
        cameraPosition: {
            x: (1 + 0.25) * 2,
            y: (2.14 + 0.25) * 2,
            z: 8,
        },
        cameraZoom: {
            x: 400,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.01,
            y: 0.008,
            z: 0.004,
        },
    },
    painting1image: {
        cameraTarget: {
            x: (-1.25 + 0.25) * 2,
            y: 3.32 * 2,
            z: -2.12 * 2,
        },
        cameraPosition: {
            x: (-1.25 + 0.25) * 2,
            y: 3.32 * 2,
            z: 8,
        },
        cameraZoom: {
            x: 250,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.008,
        },
    },
    painting2image: {
        cameraTarget: {
            x: (-0.54 + 0.25) * 2,
            y: 2.76 * 2,
            z: -2.12 * 2,
        },
        cameraPosition: {
            x: (-0.54 + 0.25) * 2,
            y: 2.76 * 2,
            z: 8,
        },
        cameraZoom: {
            x: 250,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.008,
        },
    },
    painting3image: {
        cameraTarget: {
            x: (-1.19 + 0.25) * 2,
            y: 2.62 * 2,
            z: -2.12 * 2,
        },
        cameraPosition: {
            x: (-1.19 + 0.25) * 2,
            y: 2.62 * 2,
            z: 8,
        },
        cameraZoom: {
            x: 250,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.008,
        },
    },
    photo: {
        cameraTarget: {
            x: (1.88 + 0.25) * 2,
            y: 1.70 * 2,
            z: -1.83 * 2,
        },
        cameraPosition: {
            x: (1.88 + 0.25) * 2 - 3.0,
            y: 1.70 * 2 + 4.0,
            z: 8,
        },
        cameraZoom: {
            x: 475,
            y: 0,
            z: 0,
        },
        cameraSpeed: {
            x: 0.008,
            y: 0.008,
            z: 0.002,
        },
    },
}