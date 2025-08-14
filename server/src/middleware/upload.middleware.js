const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowTypes = /jpeg|jpg|png/;
    const ext = allowTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowTypes.test(file.mimetype);
    if (ext && mime) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpg, .jpeg, .pnh allowed'));
    }
};

const upload = multer({ storage, fileFilter });
module.exports = upload;