import classes from './PostsList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(({ id, author, body }) => (
            <Post key={body} id={id} author={author} body={body} />
          ))}
        </ul>
      )}

      {posts.length == 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
