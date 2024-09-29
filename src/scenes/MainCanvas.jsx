import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import { CameraProvider } from "./CameraControls/CameraContext"
import { InterfaceContextProvider } from "./Interface/InterfaceContext"
import Interface from "./Interface/Interface"

function MainCanvas() {
    return (
        <>
            <div style={{ height: '100vh', width: '100vw' }}>
                <InterfaceContextProvider>
                    {/* <Interface/> */}
                    <Canvas gl={{ antialias: true, alpha: false }} camera={{ fov: 75, position: [4, 5, 4] }}>
                        <CameraProvider>
                            <MainScene />
                        </CameraProvider>
                    </Canvas>
                </InterfaceContextProvider>
            </div>
        </>
    )
}

export default MainCanvas
