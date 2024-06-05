import React from 'react';
import PostHeader from './PostHeader';
import { Box, Image } from '@chakra-ui/react';
import PostFooter from './PostFooter';

const FeedPost = () => {
    return (
        <>
            <PostHeader />
            <Box>
                <Image src='IMG_E1775.JPG' alt='user profile pic'/>
            </Box>
            <PostFooter />
        </>
    );
}

export default FeedPost;
