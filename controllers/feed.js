exports.getPost = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'first post', content: 'this is my first post content' }]
    })
}

exports.createPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    //create in data base
    res.status(201).json({
        message: 'Post created !',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}