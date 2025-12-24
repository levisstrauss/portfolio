// "use client"
//
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { Calendar, Clock, ArrowRight } from "lucide-react"
// import { blogPosts } from "@/lib/data"
//
// export function BlogSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//
//   return (
//     <section id="blog" className="py-24 md:py-32 relative">
//       {/* Background accent */}
//       <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
//
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//         className="container mx-auto px-6"
//       >
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary text-sm font-medium uppercase tracking-widest">Blog</span>
//           <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
//             Latest <span className="text-gradient">Articles</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
//             Thoughts on AI, software engineering, and building great products
//           </p>
//         </motion.div>
//
//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {blogPosts.map((post, index) => (
//             <motion.article
//               key={post.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass p-6 rounded-2xl group hover:border-primary/40 transition-all cursor-pointer hover:shadow-lg"
//               whileHover={{ y: -5 }}
//             >
//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {post.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-xs px-2 py-1 bg-primary/15 dark:bg-primary/10 text-primary rounded-md font-medium"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//
//               {/* Title */}
//               <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
//                 {post.title}
//               </h3>
//
//               {/* Excerpt */}
//               <p className="text-foreground/60 dark:text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
//                 {post.excerpt}
//               </p>
//
//               {/* Meta */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4 text-xs text-foreground/50 dark:text-muted-foreground font-medium">
//                   <span className="flex items-center gap-1">
//                     <Calendar size={14} />
//                     {new Date(post.date).toLocaleDateString("en-US", {
//                       month: "short",
//                       day: "numeric",
//                       year: "numeric",
//                     })}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={14} />
//                     {post.readTime}
//                   </span>
//                 </div>
//                 <motion.span className="text-primary flex items-center gap-1 text-sm font-medium" whileHover={{ x: 5 }}>
//                   Read
//                   <ArrowRight size={16} />
//                 </motion.span>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//
//         {/* View All Link */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="#"
//             className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
//             whileHover={{ x: 5 }}
//           >
//             View All Articles
//             <ArrowRight size={18} />
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
