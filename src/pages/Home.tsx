import { Container, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

// @ts-ignore
function YellowBox(props) {
    const ref = useRef();
    const { size } = useThree();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += delta));

    // Calculate scale based on canvas size
    const scale = Math.min(size.width, size.height) / 200;

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? scale * 1.5 : scale}
            onClick={() => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerDown={() => hover(false)}
        >
           <boxGeometry args={[1, 1, 1]} />
           <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Home() {
    const theme = useTheme();

    return (
        <Container sx={{ m: 0, p: 0, width: '100vw', height: "50vh", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.background.default }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <YellowBox position={[0, 0, 0]} />
                <OrbitControls enablePan={false} enableZoom={false}/>
            </Canvas>
        </Container>
    );
}

export default Home;