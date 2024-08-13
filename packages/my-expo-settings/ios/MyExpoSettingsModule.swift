import ExpoModulesCore

public class MyExpoSettingsModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('MyExpoSettings')` in JavaScript.
    Name("MyExpoSettings")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants([
      "PI": Double.pi
    ])

    // Defines event names that the module can send to JavaScript.
    Events("onChangeTheme")

    Function("setTheme") { (theme: Theme) -> Void in
      UserDefaults.standard.set(theme.rawValue, forKey:"theme")
      sendEvent("onChangeTheme", [
        "theme": theme.rawValue
      ])
    }

    Function("getTheme") { () -> String in
      UserDefaults.standard.string(forKey: "theme") ?? Theme.system.rawValue
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(MyExpoSettingsView.self) {
      // Defines a setter for the `name` prop.
      Prop("name") { (view: MyExpoSettingsView, prop: String) in
        print(prop)
      }
    }
  }

  enum Theme: String, Enumerable {
    case light
    case dark
    case system
  }
}
