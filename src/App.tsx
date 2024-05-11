// In App.tsx

import React, { useState } from 'react';
import PostCard from './components/PostCard';
import { useGetPostsQuery, useNewPostMutation } from './redux/api';

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const [newPost, { isLoading: isCreating, error: createError }] = useNewPostMutation();
  const [newPostData, setNewPostData] = useState<Post>({
    title: "",
    body: "",
    userId: 0,
    id: 0
  });

  const handleCreatePost = async () => {
    try {
      await newPost(newPostData);
      setNewPostData({
        title: "",
        body: "",
        userId: 0,
        id: 0
      })
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log({ isLoading, isError, isSuccess, data, error });

  return (
    <div>
      <hr />
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPostData.title}
          onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPostData.body}
          onChange={(e) => setNewPostData({ ...newPostData, body: e.target.value })}
        ></textarea>
        <button onClick={handleCreatePost} disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Post"}
        </button>
        {createError && (
          <div>Error creating post</div>
        )}
      </div>
      <hr />
      <h1>
        {data?.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </h1>
    </div>
  );
};

export default App;
