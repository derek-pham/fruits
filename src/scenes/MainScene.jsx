/* eslint-disable react/no-unknown-property */
import MainCamera from "./MainCamera";
import { Grid } from "@react-three/drei";
import Apple from "./Fruits/Apple";
import Banana from "./Fruits/Banana"
import Grape from "./Fruits/Grape"
import Strawberry from "./Fruits/Strawberry"

function MainScene() {
    return (
        <>
            <MainCamera />
            <color args={['#242424']} attach={'background'} />
            <Apple position={[0, 0, 0]} />
            <Banana position={[1.5, 0, 0]} />
            <Strawberry position={[3, 0, 0]} />
            <Grape position={[4.5, 0, 0]} />
            <Grid args={[10, 10]} position={[0, -1, 0]} />
        </>
    );
}

export default MainScene;
