import { useState, useEffect } from "react";
import { createContext } from "react";
import { baseUrl } from "./baseUrl";
import "./App.css";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";

const BlogContext = createContext();
export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  async function fetchPosts(
    page = 1,
    tag = null,
    category = null,
    blogId = null
  ) {
    setData({ ...data, loading: true });
    let url = `${baseUrl}/${blogId ? "get-blog" : "get-blogs"}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;
    if (blogId) url += `&blogId=${blogId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Data fetch failed");
      const json = await response.json();
      setData({
        ...data,
        loading: false,
        posts: json.posts,
        totalPages: json.totalPages,
        page: json.page,
        blog: blogId ? json.blog : null,
        relatedBlogs: blogId ? json.relatedBlogs : [],
      });
    } catch (error) {
      console.error(error);
      setData({
        ...data,
        posts: [],
        totalPages: null,
        page: 1,
        loading: false,
        blog: null,
        relatedBlogs: [],
      });
    }
  }
  const [data, setData] = useState({
    page: 1,
    totalPages: null,
    loading: false,
    posts: [],
    blog: null,
    relatedBlogs: [],
  });
  function handleChange(p) {
    setData({ ...data, page: p });
    navigate({ search: `?page=${p}` });
  }
  useEffect(() => {
    console.log(location.pathname);
    console.log(location.pathname.includes("blog"));
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchPosts(Number(page), tag, null, null);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchPosts(Number(page), null, category, null);
    } else if (location.pathname.includes("blog")) {
      const blogId = location.pathname.split("/").at(-1);
      console.log(blogId);
      fetchPosts(Number(page), null, null, blogId);
    } else fetchPosts(Number(page), null, null, null);
  }, [location.pathname, location.search]);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <BlogContext.Provider value={{ ...data, fetchPosts, handleChange }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/tags/:tag" element={<TagPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}
export { BlogContext };
