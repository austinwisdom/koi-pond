import { MeshReflectorMaterial, useTexture } from "@react-three/drei"
import { CircleGeometry } from "three"
import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";

const Ceiling = () => {
    const cubeRef = useRef()

    let geometry, material;

				// geometry = new CircleGeometry( 40, 64 );
				// groundMirror = new Reflector( geometry, {
				// 	clipBias: 0.003,
				// 	textureWidth: window.innerWidth * window.devicePixelRatio,
				// 	textureHeight: window.innerHeight * window.devicePixelRatio,
				// 	color: 0xb5b5b5
				// } );
				// groundMirror.position.y = 0.5;
				// groundMirror.rotateX( - Math.PI / 2 );
				// scene.add( groundMirror );
    
    return (
      <>
      <RoundedBox
                ref={cubeRef}
                position={[0, 15, -15]}
                args={[65, 5, 10]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
               
            >   
      <MeshReflectorMaterial 
        resolution={512} 
        args={[10, 10]} 
        mirror={1} 
        mixBlur={10} 
        mixStrength={0.8} 
        rotation={[-Math.PI / 2, 0, Math.PI / 2]} 
        blur={[100, 100]}>
        {(Material, props) => <Material color="#fff" metalness={0.5} normalScale={[1, 1]} {...props} />}
      </MeshReflectorMaterial>
      </RoundedBox>
      </>
    )
  }

export default Ceiling