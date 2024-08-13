import * as React from 'react';

import { MyExpoSettingsViewProps } from './MyExpoSettings.types';

export default function MyExpoSettingsView(props: MyExpoSettingsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
