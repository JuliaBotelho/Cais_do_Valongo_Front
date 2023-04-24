import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

/* function Model(props){
    const { scene } = useGLTF("../assets/bmw.glb");
    return <primitive object={scene} {...props} />
}  */

export default function Model3DCanvas(){
    const { scene } = useGLTF("/bmw.glb");

    return(
        <ModelWrapper>
            <Canvas dpr={[1,2]} shadows camera={{ fov:45 }} style={{"position":"absolute", height:"380px"}}>
                <color attach="background" args={["#101010"]}/>
                <PresentationControls speed={1.5} global zoom={.8} polar={[-0.1, Math.PI / 4]}>
                   {/*  <Stage environment={null}>
                    <primitive object={scene} scale={0.01}/>
                         <Model scale={0.01}/> 
                    </Stage> */}
                </PresentationControls>
            </Canvas>
        </ModelWrapper>
    )
}

const ModelWrapper =  styled.div`
    width:100%;
    height: 390px;
    margin-top: 20px;
`