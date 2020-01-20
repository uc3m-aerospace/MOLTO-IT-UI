class customErrorForDialog extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, customErrorForDialog);
    }

    this.name = 'customErrorForDialog';
    this.date = new Date();
    if (params) {
      Object.assign(this, ...params);
    }
  }
}

export default customErrorForDialog;
