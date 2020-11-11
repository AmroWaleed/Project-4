const posts = [
    {
    id: 1,
    title: 'eat fried chicken',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 2,
    title: 'how to studey react',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 3,
    title: 'how to vote',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'amr',
    },
    ];

    
    const gitAllPosts = (req,res)=>{
        console.log('getAllPosts')
        res.json(posts)};
    
    // const createNewPost=(req,res)=>{
    //     console.log('creat new post')
    //     res.json(posts);
    // }    

    
        
   

    


    module.exports = {gitAllPosts,/* createNewPost*/};