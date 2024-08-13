import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyExpoSettings.web.ts
// and on native platforms to MyExpoSettings.ts
import MyExpoSettingsModule from './MyExpoSettingsModule';
import MyExpoSettingsView from './MyExpoSettingsView';
import { ThemeChangeEvent, Theme } from './MyExpoSettings.types';

// Get the native constant value.
export const PI = MyExpoSettingsModule.PI;

export function getTheme(): Theme {
  return MyExpoSettingsModule.getTheme();
}

export function setTheme(theme: Theme): void {
  return MyExpoSettingsModule.setTheme(theme);
}

export async function setValueAsync(value: string) {
  return await MyExpoSettingsModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyExpoSettingsModule ?? NativeModulesProxy.MyExpoSettings);

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): Subscription {
  return emitter.addListener<ThemeChangeEvent>('onChangeTheme', listener);
}

export { MyExpoSettingsView, ThemeChangeEvent, Theme };
