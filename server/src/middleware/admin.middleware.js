const User = require('../models/user.model');

const verifyAdmin = async (req, res , next) => {
    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) {
        return res.status(403).json({ message: 'Admin access required' });
    }
    next();
};

module.exports = verifyAdmin;
