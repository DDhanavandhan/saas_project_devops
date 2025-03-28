import React from 'react';
import { ThreeElements } from '@react-three/fiber';
import { TextProps } from '@react-three/drei';

declare module 'react' {
  interface FormEvent<T = Element> extends React.SyntheticEvent<T> {
    target: EventTarget & T;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ...ThreeElements;
    }
  }
}

declare module '@react-three/fiber' {
  export function useFrame(callback: (state: any, delta: number) => void): void;
}

declare module '@react-three/drei' {
  export function Text(props: TextProps): JSX.Element;
} 