export default {
  expo: {
    name: "FichajeXpert-Tomas",
    slug: "fichajexpert",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.tomassolano.fichajexpert",
      buildNumber: "10",
      infoPlist: {
        NSCameraUsageDescription: "FichajeXpert utiliza la cámara para escanear códigos QR y verificar fichajes de empleados",
        NSMicrophoneUsageDescription: "El micrófono no se usa actualmente, pero es requerido por módulos de terceros",
        NSLocationWhenInUseUsageDescription: "La aplicación necesita acceso a la ubicación para registrar los fichajes.",
        NSLocationAlwaysAndWhenInUseUsageDescription: "La aplicación necesita acceso a la ubicación para registrar los fichajes.",
        NSPhotoLibraryUsageDescription: "Se requiere acceso a la galería para posibles funcionalidades futuras"
      },
      entitlements: {
        "aps-environment": "development"
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.tomassolano.fichajexpert",
      versionCode: 1,
      permissions: [
        "CAMERA",
        "ACCESS_FINE_LOCATION"
      ]
    },
    web: {
      bundler: "metro",
      output: "single",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "La aplicación necesita acceso a la ubicación para registrar los fichajes.",
          locationAlwaysPermission: "La aplicación necesita acceso a la ubicación para registrar los fichajes en segundo plano.",
          locationWhenInUsePermission: "La aplicación necesita acceso a la ubicación para registrar los fichajes."
        }
      ],
      [
        "expo-notifications",
        {
          icon: "./assets/images/notification-icon.png",
          color: "#ffffff",
          sounds: ["./assets/sounds/notification.wav"],
          mode: "production",
          isRemoteNotificationsEnabled: false
        }
      ],
      [
        "expo-camera",
        {
          cameraPermission: "La aplicación necesita acceso a la cámara para escanear códigos QR."
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      eas: {
        projectId: "cc1af024-9bcf-4b49-830d-0f96f79898b5"
      }
    }
  }
};
