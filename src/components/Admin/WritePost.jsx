// import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import DOMPurify from "dompurify";
// import axios from "axios";

// const WritePost = () => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [displayContent, setDisplayContent] = useState("");
//   const [showDraft, setShowDraft] = useState(false);

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setContent(data);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(title, content, category, author);
//     try {
//       //   // Make POST request to your backend endpoint
//       const response = await axios.post(
//         "https://amatech-backend.onrender.com/api/v1/post/",
//         {
//           title,
//           content,
//           category,
//           author,
//         }
//       );

//       console.log("Post created:", response.data);
//       // Handle success, maybe redirect user or show a success message
//     } catch (error) {
//       console.error("Error creating post:", error);
//       // setError("An error occurred while creating the post. Please try again.");
//     }
//   };
//   const handleClick = () => {
//     setDisplayContent(DOMPurify.sanitize(content));
//     setShowDraft(true);
//   };

//   return (
//     <div className="top-0 left-0 w-full h-full flex items-center justify-center">
//       <div className="model-container">
//         <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[1000px] lg:h-[800px] rounded shadow-md">
//           {/* Model content */}
//           <h2 className="text-xl font-semibold mb-5 uppercase">Write a Post</h2>
//           <form className="px-6 mt-11">
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Post title"
//                 className="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
//               />
//               <input
//                 type="text"
//                 name="authorInput"
//                 id="authorInput"
//                 value={author}
//                 onChange={(e) => setAuthor(e.target.value)}
//                 placeholder="Enter author name"
//                 className="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
//               />
//               <div>
//                 <label
//                   htmlFor="category"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="mt-1 block w-full border-gray-300 py-6 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select a category...</option>
//                   <option value="Technology">Technology</option>
//                   <option value="Travel">Travel</option>
//                   <option value="Food">Food</option>
//                   <option value="Fashion">Fashion</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mt-9">
//               <CKEditor
//                 editor={ClassicEditor}
//                 data={content}
//                 onChange={handleEditorChange}
//               />
//             </div>
//             <div>
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 // onClick={handleClick}
//                 className="hover:shadow-md mt-4 rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none"
//               >
//                 Display Content
//               </button>
//             </div>
//           </form>
//         </div>
//         {showDraft && (
//           <div className="bg-white p-5 mt-5 rounded shadow-md">
//             <h2 className="text-xl font-semibold mb-5">Displayed Content</h2>
//             <div dangerouslySetInnerHTML={{ __html: displayContent }} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WritePost;
