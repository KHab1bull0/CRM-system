window.onload = function() {
    const ui = window.ui;
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      ui.authActions.authorize({
        bearerAuth: {
          name: "bearerAuth",
          schema: {
            type: "apiKey",
            in: "header",
            name: "Authorization"
          },
          value: storedToken
        }
      });
    }
  
    ui.authActions.subscribe((data) => {
      if (data.payload && data.payload.bearerAuth) {
        localStorage.setItem('token', data.payload.bearerAuth);
      }
    });
  }