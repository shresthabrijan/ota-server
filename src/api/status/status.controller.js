const os = require('os')

exports.getCpuInfo = (req, res) => {
  res.send({
    success: true,
    data: os.cpus()
  })
}

exports.status = (req, res) => {
  res.send({
    success: true,
    data: 'OK'
  })
}
