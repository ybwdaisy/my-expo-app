import * as React from 'react';

import { MyExpoWebviewViewProps } from './MyExpoWebview.types';

export default function MyExpoWebviewView(props: MyExpoWebviewViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
