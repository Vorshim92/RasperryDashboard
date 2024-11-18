import "./App.css";
import Dashboard from "dashboard";
import Alert from "components/alert";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";

function App() {
  return (
    <div className="app app-wrapper">
      <Dashboard className="app app-body" />
      <Alert />
      <div className="canvas-drone">
        <Canvas>
          <PresentationControls enabled={true} global={false} cursor={true} snap={true} speed={1} zoom={1} rotation={[0, 0, 0]} polar={[0, Math.PI / 2]} azimuth={[-Infinity, Infinity]} config={{ mass: 1, tension: 170, friction: 26 }}>
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
