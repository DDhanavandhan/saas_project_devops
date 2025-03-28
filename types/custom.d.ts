import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      torusGeometry: any;
      coneGeometry: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

declare module '@react-three/fiber' {
  import { Object3D } from 'three';
  
  export interface ThreeElements {
    group: any;
    mesh: any;
    boxGeometry: any;
    sphereGeometry: any;
    torusGeometry: any;
    coneGeometry: any;
    cylinderGeometry: any;
    meshStandardMaterial: any;
    ambientLight: any;
    pointLight: any;
  }

  export interface CanvasProps {
    camera?: {
      position?: [number, number, number];
      fov?: number;
      near?: number;
      far?: number;
    };
    children?: React.ReactNode;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
}

declare module '@react-three/drei' {
  import { Object3D } from 'three';

  export interface OrbitControlsProps {
    enableDamping?: boolean;
    dampingFactor?: number;
    rotateSpeed?: number;
    zoomSpeed?: number;
    panSpeed?: number;
    children?: React.ReactNode;
  }

  export function OrbitControls(props: OrbitControlsProps): JSX.Element;
} 