package expo.modules.myexposettings

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable

enum class Theme(val value: String) : Enumerable {
  LIGHT("light"),
  DARK("dark"),
  SYSTEM("system")
}
class MyExpoSettingsModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('MyExpoSettings')` in JavaScript.
    Name("MyExpoSettings")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants(
      "PI" to Math.PI
    )

    // Defines event names that the module can send to JavaScript.
    Events("onChangeTheme")

    Function("setTheme") { theme: Theme ->
      getPreferences().edit().putString("theme", theme.value).commit()
      this@MyExpoSettingsModule.sendEvent("onChangeTheme", bundleOf("theme" to theme.value))
    }

    Function("getTheme") {
      return@Function getPreferences().getString("theme", Theme.SYSTEM.value)
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(MyExpoSettingsView::class) {
      // Defines a setter for the `name` prop.
      Prop("name") { view: MyExpoSettingsView, prop: String ->
        println(prop)
      }
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }
}

