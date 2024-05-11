// In PostCard.tsx

import React from 'react';

interface Post {
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};

export default PostCard;
