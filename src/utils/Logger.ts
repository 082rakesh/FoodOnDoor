const isDebugMode = __DEV__;

export class Logger {
  static log(message: string) {
    if (isDebugMode) {
      console.log(message);
    }
  }
}
