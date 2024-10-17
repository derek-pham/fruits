/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, Html, PresentationControls } from "@react-three/drei";
import { useInterfaceContext } from "../Interface/InterfaceContext";
import { useEffect, useRef, useState } from "react";
import { RigidBody, Physics } from '@react-three/rapier'
import sliceSFX from '/sfx/slice-1.wav'

function AppleSplit({ position = [0, 0, 0] }) {
    const { listNumber } = useInterfaceContext()
    const [itemScale, setItemScale] = useState(2)
    const [renderFront, setRenderFront] = useState(true)
    const [renderHtml, setRenderHtml] = useState(true)
    const { scene } = useGLTF('/models/appleSplit.glb'); // load the model
    const appleSplitFrontRef = useRef()
    const appleSplitFront = scene.children[0].children[1].children[0]
    const appleSplitBack = scene.children[0].children[0].children[0]
    const [appleFrontRigidBodyState, setAppleFrontRigidBodyState] = useState('fixed')

    const appleSplitFrontMaterial = appleSplitFront.material; // Extract front material
    const appleSplitBackMaterial = appleSplitBack.material;

    const audio = new Audio(sliceSFX)
    audio.volume = 0.2;

    const sliceFruit = () => {
        audio.play()
        setAppleFrontRigidBodyState('')
        setRenderHtml(false)
        setTimeout(() => {
            appleSplitFrontRef.current.applyImpulse({ x: 0, y: 20, z: 10 })
            appleSplitFrontRef.current.applyTorqueImpulse({ x: 4, y: Math.random(), z: Math.random() })
        }, 10)

        setTimeout(() => {
            setRenderFront(false)
        }, 3000)
    }

    useEffect(() => {
        if (listNumber == 0) {
            setItemScale(2);
        } else {
            setItemScale(1.5);
        }
    }, [listNumber]);

    return (
        <>
            <PresentationControls
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                snap={{ mass: 1, tension: 100 }}
            >
                <mesh
                    castShadow
                    position={position}
                    geometry={appleSplitBack.geometry}
                    scale={itemScale}
                    material={appleSplitBackMaterial}
                >
                </mesh>
            </PresentationControls>
            {renderFront &&
                <Physics>
                    <RigidBody type={appleFrontRigidBodyState} ref={appleSplitFrontRef}>
                        <mesh
                            position={position}
                            geometry={appleSplitFront.geometry}
                            scale={itemScale}
                            onClick={sliceFruit}
                            material={appleSplitFrontMaterial}
                        >
                            {renderHtml &&
                                <Html center>
                                    <div
                                        style={{
                                            width: '225px',
                                            height: '225px',
                                            borderRadius: '100px',
                                            cursor: 'url(icons/french-knife.png), auto',
                                        }}
                                        onClick={sliceFruit}
                                    ></div>
                                </Html>
                            }
                        </mesh>
                    </RigidBody>
                </Physics>
            }
        </>
    );
}

export default AppleSplit;
