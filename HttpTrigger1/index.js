// HttpTrigger1/index.js
export async function helloWorldFunction(context, req) {
    context.res = {
      status: 200,
      body: 'Hello, World!'
    };
  }
