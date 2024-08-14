import ExpoModulesCore

public class MyExpoWebviewModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('MyExpoWebview')` in JavaScript.
    Name("MyExpoWebview")

    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(MyExpoWebviewView.self) {
      Events("onLoad")

      Prop("url") { (view, url: URL) in
        if view.webView.url != url {
          let urlRequest = URLRequest(url: url)
          view.webView.load(urlRequest)
        }
      }
    }
  }
}
