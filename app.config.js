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
      [
        "expo-router",
        {
          origin: "https://yourappdomain.com"
        }
      ],
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
    },
    // Configuración adicional para manejar versiones específicas
    dependencies: {
      "@expo/config-plugins": "~9.0.0",
      "@react-native-community/datetimepicker": "8.2.0",
      "@react-native-picker/picker": "2.9.0",
      "expo": "~52.0.46",
      "expo-camera": "~16.0.18",
      "expo-file-system": "~18.0.12",
      "expo-location": "~18.0.10",
      "expo-notifications": "~0.29.14",
      "expo-router": "~4.0.21",
      "expo-secure-store": "~14.0.1",
      "expo-sharing": "~13.0.1",
      "expo-splash-screen": "~0.29.24",
      "expo-system-ui": "~4.0.9",
      "react-native": "0.76.9",
      "react-native-gesture-handler": "~2.20.2",
      "react-native-reanimated": "~3.16.1",
      "react-native-screens": "~4.4.0",
      "react-native-svg": "15.8.0"
    }
  }
};
