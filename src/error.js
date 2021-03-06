export default (app) => {
  // 404处理 catch 404 and forward to error handler
  app.use((req, res, next) => {
    console.log(404)
    var error = new Error('Not Found')
    error.status = 404
    next(error)
  })

  // 异常处理（error handlers）
  if (app.get('env') === 'development') {
    // development error handler
    // will print stacktrace
    app.use((error, req, res, next) => {
      error.status = error.status || 500
      res.status(error.status)
      res.render('shared/error', {
        layout: null,
        message: error.message,
        error: error
      })
    })
  } else {
    // production error handler
    // no stacktraces leaked to user
    app.use((error, req, res, next) => {
      error.status = error.status || 500
      res.status(error.status)
      res.render('shared/error', {
        layout: null,
        message: error.message,
        error: {}
      })
    })
  }
}
