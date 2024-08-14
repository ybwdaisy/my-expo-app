import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyExpoWebviewViewProps } from './MyExpoWebview.types';

const NativeView: React.ComponentType<MyExpoWebviewViewProps> =
  requireNativeViewManager('MyExpoWebview');

export default function MyExpoWebviewView(props: MyExpoWebviewViewProps) {
  return <NativeView {...props} />;
}
