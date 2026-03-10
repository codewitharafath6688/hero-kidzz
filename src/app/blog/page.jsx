import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Top Educational Toys for Kids in 2026",
    author: "Admin",
    date: "March 10, 2026",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1200",
    content: `
Educational toys are essential for children's development. They help kids
improve creativity, imagination, and logical thinking skills.

When children play with learning toys like puzzles, building blocks, and
interactive games, they develop problem-solving abilities naturally.

Parents should choose toys that are both fun and educational so children
learn while playing.
`,
  },
  {
    id: 2,
    title: "Why Learning Toys Are Important for Child Development",
    author: "Admin",
    date: "March 5, 2026",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200",
    content: `
Learning toys stimulate a child's brain and encourage curiosity.
They improve memory, attention span, and coordination.

Educational games can also help children develop communication skills
when they play with friends or parents.

Choosing the right toys at an early age can make learning more enjoyable
and help children build strong cognitive foundations.
`,
  },
  {
    id: 3,
    title: "Best Puzzle Games for Kids",
    author: "Admin",
    date: "February 25, 2026",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200",
    content: `
Puzzle games are one of the best ways to improve a child's thinking ability.
They teach patience, concentration, and logical reasoning.

Kids also learn how to recognize patterns and shapes through puzzle games.
This strengthens problem-solving skills and builds confidence.

Parents should encourage puzzle play because it supports both fun and
learning at the same time.
`,
  },
];

const BlogPage = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-2 text-base-content/70">
            Tips and ideas for kids learning and educational toys
          </p>
        </div>

        {/* Blog Articles */}
        <div className="space-y-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl border border-base-300 bg-base-100 shadow-lg"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover rounded-t-2xl"
                />
              </figure>

              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">{blog.title}</h2>

                {/* Author + Date */}
                <div className="flex items-center gap-6 text-sm text-base-content/60">
                  <span className="flex items-center gap-2">
                    <FaUserAlt /> {blog.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>

                {/* Full Content */}
                <p className="leading-relaxed whitespace-pre-line text-base-content/80">
                  {blog.content}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPage;