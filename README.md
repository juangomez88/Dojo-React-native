# Dojo-React-native

## Instalar dependicas:
Se necesitaran para el realizar el proyecto en windows:

  * Node: Se recomienda la version LTS de Node, link de descarga: [Node](https://nodejs.org/en/download) 
  * React Native command line interface.
  
  * JDK.

  * Android Studio.
  

React Native también requiere el kit de desarrollo Java SE (JDK) , que también se puede instalar con Chocolatey. Este puede se instalado
con el simbolo del sistema de administrador (Click derecho sobre el simbolo del sistema y seleccione "Ejecutar Adminitrador"), luego ejecute
el siguiente comando:

`choco install -y nodejs-lts microsoft-openjdk11`

## Instale el SDK de Android:
Android Studio instala el último SDK de Android de forma predeterminada. Sin embargo, crear una aplicación React Native con código nativo requiere el Android 13 (Tiramisu)SDK en particular. Se pueden instalar SDK de Android adicionales a través del Administrador de SDK en Android Studio.

## Configure las variables de entorno ANDROID_HOME: 
Las herramientas React Native requieren la configuración de algunas variables de entorno para poder crear aplicaciones con código nativo.

1. Abra el Panel de control de Windows.
1. Haga clic en Cuentas de usuario, luego haga clic en Cuentas de usuario nuevamente
1. Haga clic en Cambiar mis variables de entorno
1. Haga clic en Nuevo... para crear una nueva ANDROID_HOMEvariable de usuario que apunte a la ruta a su SDK de Android:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/a3968d45-7fef-4ece-ab44-045ad28475a1)


El SDK se instala, de forma predeterminada, en la siguiente ubicación:

`%LOCALAPPDATA%\Android\Sdk`

## En caso de necesitar las intrucciones desde  la documentación oficial:
### [Configurar el entorno de desarrollo](https://reactnative.dev/docs/environment-setup?guide=native&os=windows) 


# Iniciar el proyecto con react native:
`npx react-native@latest init NOMBRE_PROYECTO`

# [Opcional] Usar una versión o plantilla específica:
`npx react-native@X.XX.X init AwesomeProject --version X.XX.X`
