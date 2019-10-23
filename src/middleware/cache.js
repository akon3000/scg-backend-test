const mcache = require('memory-cache')

module.exports = duration => (req, res, next) => {
  const key = `__express__${req.originalUrl || req.url}`
  const cachedBody = mcache.get(key)

  if (cachedBody) {
    return res.send(cachedBody)
  }

  res.sendResponse = res.send
  res.send = body => {
    mcache.put(key, body, duration * 1000)
    res.sendResponse(body)
  }
  return next()
}