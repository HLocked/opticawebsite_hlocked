export default function NewsSection() {
  const posts = [
    {
      id: 'fuel-store',
      tag: 'Company',
      title: 'FUEL STORE: A New Era of Energy',
      date: 'April 30, 2025',
      href: '#',
      image: '/imgs/industry-2.webp'
    },
    {
      id: 'defense-innovation',
      tag: 'Company',
      title: 'Transforming Defense Through Material Innovation',
      date: 'April 14, 2025',
      href: '#',
      image: '/imgs/industry-2.webp'
    },
    {
      id: 'introducing-optica',
      tag: 'Company',
      title: 'Introducing Optica: A Bold Era in Metals',
      date: 'February 10, 2025',
      href: '#',
      image: '/imgs/industry-2.webp'
    }
  ]

  return (
    <section id="news" className="relative themed-bg px-12 py-6">
      <div className="mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-medium text-black dark:text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Newsroom</h2>
          <a href="#" className="text-sm underline underline-offset-4 text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100">See All</a>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <a key={post.id} href={post.href} className="group block">
              <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-3">
                <div className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-1">{post.tag}</div>
                <div className="text-lg text-black dark:text-white leading-snug mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {post.title}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">{post.date}</div>
                <div className="mt-2"><span className="inline-block text-xs px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white">Read more</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


