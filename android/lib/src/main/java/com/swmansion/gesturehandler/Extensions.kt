package com.swmansion.gesturehandler

import android.content.Context
import android.view.accessibility.AccessibilityManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.UIManagerModule

val ReactContext.deviceEventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
    get() = this.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)

val ReactContext.UIManager: UIManagerModule
    get() = this.getNativeModule(UIManagerModule::class.java)!!

fun Context.isScreenReaderOn(): Boolean {
    val am = getSystemService(Context.ACCESSIBILITY_SERVICE) as AccessibilityManager
    if (am.isEnabled) {
        return true
    }
    return false
}
