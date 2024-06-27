const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Blog = require('../models/blog');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('./public/upload'));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

// Route to render add new blog form
router.get('/add-new', (req, res) => {
    res.render('addBlog', {
        user: req.user,
    });
});

router.get('/:id' , async (req,res) => {
    const blog = await Blog.findById(req.params.id).populate('createdBy');
    return res.render("blog" ,{
        user: req.user,
        blog,
    })
})

// Route to handle blog creation
router.post('/', upload.single('coverImage'), async (req, res) => {
    const { title, body } = req.body;

    let coverImageUrl = '';
    if (req.file) {
        coverImageUrl = `/upload/${req.file.filename}`;
    }

    try {
        const blog = await Blog.create({
            body,
            title,
            createdBy: req.user._id,
            coverImageUrl,
        });
        res.redirect(`/blog/${blog._id}`);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
