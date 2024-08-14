import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyExpoWebview.web.ts
// and on native platforms to MyExpoWebview.ts
import MyExpoWebviewModule from './MyExpoWebviewModule';
import MyExpoWebviewView from './MyExpoWebviewView';
import { ChangeEventPayload, MyExpoWebviewViewProps } from './MyExpoWebview.types';

// Get the native constant value.
export const PI = MyExpoWebviewModule.PI;

export function hello(): string {
  return MyExpoWebviewModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyExpoWebviewModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyExpoWebviewModule ?? NativeModulesProxy.MyExpoWebview);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyExpoWebviewView, MyExpoWebviewViewProps, ChangeEventPayload };
