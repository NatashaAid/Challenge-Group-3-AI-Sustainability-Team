// src/components/Text.tsx
/*
*
*
Author: Jia Hao Foo
*
*
*/
import React from 'react';
import './style.css';

// Define the props interface
interface TextProps {
  color?: string;         // Text color
  fontSize?: string;      // Font size
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;  // Font weight
  children: React.ReactNode;  // The content to be displayed
}

// Create the Text component
function Text({ color = 'black', fontSize = '10', fontWeight = 'bold', children}: TextProps) {

  return (
    <span style={{ color, fontSize, fontWeight }}>
      {children}
    </span>
  );
};

export default Text;
