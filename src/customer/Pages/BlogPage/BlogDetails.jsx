import React, { useState } from "react";
import MyButton from "../../components/common/Button/Button";
import { GoThumbsup } from "react-icons/go";

const dummyData = {
  post: {
    title: "The Allure of the Bad Boy: Unpacking the Mystique",
    content:
      "<h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>Introduction</h2><p>In the world of romance and intrigue, few archetypes captivate as profoundly as the \"bad boy.\" His charm, wrapped in a rebellious exterior and a devil-may-care attitude, has intrigued women and puzzled men for generations. But what lies beneath this enigmatic persona? Is it just a facade, or is there a deeper allure that makes the bad boy so irresistibly fascinating?</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>The Charisma of Rebellion</h2><p>The bad boy defies norms and expectations, creating an aura of unpredictability. His rejection of conventional behavior signals a sense of freedom that many find exhilarating. Unlike the nice guy who adheres to societal rules, the bad boy's nonconformity suggests confidence and strength. His rebellious nature can be seen as a declaration of independence, a trait that many admire and envy.</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>The Confidence Factor</h2><p>Confidence is undeniably attractive, and the bad boy has it in spades. His self-assured demeanor can often be mistaken for arrogance, but it’s this very trait that sets him apart. He walks into a room and commands attention without uttering a word. This level of self-confidence, whether genuine or a well-crafted act, draws people in and creates a magnetic pull that is hard to resist.</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>The Mystery and Depth</h2><p>A key component of the bad boy's charm is his air of mystery. He reveals little about himself, leaving much to the imagination. This enigmatic quality invites curiosity and a desire to uncover the man behind the mask. The bad boy often hints at a deeper, more complex inner life, suggesting that beneath his tough exterior lies a world of untold stories and hidden vulnerabilities.</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>The Thrill of the Chase</h2><p>Human nature is wired to seek challenge and excitement, and the bad boy delivers both in abundance. His unpredictability keeps others on their toes, making interactions with him feel like an adventure. The thrill of the chase, the uncertainty of his next move, and the possibility of taming the untamable add to his allure, making every encounter feel electric.</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>The Influence of Media and Culture</h2><p>Popular media and culture have played a significant role in romanticizing the bad boy image. From James Dean in \"Rebel Without a Cause\" to modern-day characters in movies and TV shows, the bad boy is often depicted as the misunderstood hero. This portrayal reinforces the notion that beneath his rough exterior lies a heart of gold, waiting for the right person to unlock it.</p><h2 style='color: #1a202c; font-size: 1.5em; font-weight: bold; margin-top: 1em;'>Conclusion</h2><p>The bad boy attitude, with its mix of confidence, mystery, and rebellion, continues to captivate and mystify. While he may not always be the best choice for a long-term partner, the allure of the bad boy is undeniable. Understanding the deeper psychological and cultural factors that contribute to his charm can help unravel the mystique and perhaps offer insights into our own desires and attractions.</p><p>In the end, the bad boy is more than just a trope; he is a complex character that embodies a blend of traits that resonate on multiple levels. Whether seen as a cautionary tale or an object of fascination, the bad boy remains a compelling figure in the landscape of romance and human behavior.</p>",
    author: "Jane Doe",
    datePosted: "2023-05-01T10:00:00Z",
    bannerImage: [
      "https://i.postimg.cc/wj4P5RLL/pexels-simon-robben-55958-340779.jpg",
    ],
    likes: [],
    comments: [
      {
        _id: "comment1",
        author: "John Smith",
        content:
          "Great post! I love the in-depth analysis of the bad boy persona.",
        datePosted: "2023-05-02T12:00:00Z",
        replies: [
          {
            _id: "reply1",
            author: "Jane Doe",
            content: "Thank you, John! I'm glad you enjoyed it.",
            datePosted: "2023-05-02T13:00:00Z",
          },
        ],
      },
      {
        _id: "comment2",
        author: "Emily White",
        content:
          "I found this article very insightful. The bad boy image is definitely more than just a stereotype.",
        datePosted: "2023-05-03T14:00:00Z",
        replies: [
          {
            _id: "reply2",
            author: "John Smith",
            content:
              "Absolutely, Emily! It's fascinating to see how deep this persona goes.",
            datePosted: "2023-05-03T15:00:00Z",
          },
        ],
      },
    ],
  },
};

const BlogDetails = () => {
  const [post, setPost] = useState(dummyData.post);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = {
      _id: Date.now().toString(),
      author: "Anonymous",
      content: newComment,
      datePosted: new Date().toISOString(),
      replies: [],
    };
    setPost((prevPost) => ({
      ...prevPost,
      comments: [...prevPost.comments, newCommentObj],
    }));
    setNewComment("");
  };

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div key={comment._id} className="mb-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-800">{comment.content}</p>
          <div className="text-xs text-gray-500 mt-2">
            <span>By {comment.author}</span>
            <span className="mx-2">|</span>
            <span>{new Date(comment.datePosted).toLocaleDateString()}</span>
          </div>
          {/* {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-6">
              <h4 className="text-sm font-bold mb-2">Replies:</h4>
              {renderComments(comment.replies)}
            </div>
          )} */}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <span className="text-gray-600">By {post.author}</span>
        <span className="mx-3">|</span>
        <span className="text-gray-600">
          {new Date(post.datePosted).toLocaleDateString()}
        </span>
      </div>
      <div className="mb-6">
        {post.bannerImage && post.bannerImage.length > 0 && (
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={post.bannerImage[0]}
            alt="Banner"
          />
        )}
      </div>
      <div
        className="prose prose-lg mb-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-center items-center gap-x-4">
          <button className="rounded-full p-3 text-[20px] hover:text-black text-white">
            <GoThumbsup />
          </button>
          <div className="text-gray-600">Likes: {post.likes.length}</div>
        </div>
        
        <div className="text-gray-600">Comments: {post.comments.length}</div>
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div>{renderComments(post.comments)}</div>
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <textarea
            className="w-full p-4 bg-gray-100 rounded-lg"
            rows="4"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />

          <MyButton buttonText="Post Comment" />
        </form>
      </section>
    </div>
  );
};

export default BlogDetails;
