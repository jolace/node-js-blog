exports.index = (req, res) => {
    res.json({ title: 'Index vo usSers js' });
}

exports.get = (req, res) => {
    res.json({ title: 'get vo usSers js', userId: req.params.userId });
}

exports.store = (req, res) => {
    res.json({ title: 'store vo usSers js' });
}

exports.update = (req, res) => {
    res.json({ title: 'update vo usSers js' });
}

exports.delete = (req, res) => {
    res.json({ title: 'delete vo usSers js' });
}