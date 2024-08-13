import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyExpoSettings.web.ts
// and on native platforms to MyExpoSettings.ts
import MyExpoSettingsModule from './MyExpoSettingsModule';
import MyExpoSettingsView from './MyExpoSettingsView';
import { ChangeEventPayload, MyExpoSettingsViewProps } from './MyExpoSettings.types';

// Get the native constant value.
export const PI = MyExpoSettingsModule.PI;

export function hello(): string {
  return MyExpoSettingsModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyExpoSettingsModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyExpoSettingsModule ?? NativeModulesProxy.MyExpoSettings);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyExpoSettingsView, MyExpoSettingsViewProps, ChangeEventPayload };
