import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyExpoSettingsViewProps } from './MyExpoSettings.types';

const NativeView: React.ComponentType<MyExpoSettingsViewProps> =
  requireNativeViewManager('MyExpoSettings');

export default function MyExpoSettingsView(props: MyExpoSettingsViewProps) {
  return <NativeView {...props} />;
}
