import { createContext, useContext, useState } from "react";

const BlogContext=createContext()
let blogs=[
    {
        id:1,
        image:"./images/img_2.png",
        title:"basic of html",
        catgeory:"HTML",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:2,
        image:"./images/img_1.jpg",
        title:"basic of html",
        catgeory:"HTML",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:3,
        image:"./images/img_7.jpg",
        title:"basic of html",
        catgeory:"HTML",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:4,
        image:"./images/img_6.jpg",
        title:"basic of CSS",
        catgeory:"CSS",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:5,
        image:"./images/img_5.jpg",
        title:"basic of CSS - 2",
        catgeory:"CSS",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:6,
        image:"./images/img_4.jpg",
        title:"ADVANCE CSS",
        catgeory:"CSS",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:7,
        image:"./images/img_3.jpg",
        title:"basic of REACT",
        catgeory:"REACT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:8,
        image:"./images/img_2.png",
        title:"basic of REACT - 2",
        catgeory:"REACT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:9,
        image:"./images/img_5.jpg",
        title:"ADVANCE REACT",
        catgeory:"REACT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:10,
        image:"./images/img_4.jpg",
        title:"BASIC OF JAVASCRIPT",
        catgeory:"JAVASCRIPT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:11,
        image:"./images/img_3.jpg",
        title:"DOM IN JAVASCRIPT",
        catgeory:"JAVASCRIPT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
    {
        id:12,
        image:"./images/img_1.jpg",
        title:"ADVANCE JAVASCRIPT",
        catgeory:"JAVASCRIPT",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa perferendis sapiente nulla quia quas amet delectus, voluptatem aliquam veritatis porro. Laborum, laboriosam aperiam adipisci corrupti at quisquam, magnam repellat aspernatur deserunt animi asperiores commodi nostrum facere sequi fuga culpa? Perspiciatis, fugit, at voluptatem modi reprehenderit pariatur aperiam iste quod dolore doloremque nisi tempore minima nostrum sapiente. Rerum molestias, hic minima quaerat modi cumque aliquam? Quis qui aliquid aspernatur, nulla consequatur molestiae ab officia voluptate blanditiis minima eum vero nobis illum, nam sequi sapiente! Eum debitis, laborum labore, facilis accusamus quae nemo sint placeat praesentium doloribus impedit iusto delectus, facere fugit. Provident, quo hic. Aperiam ea neque iste, harum qui facilis vel! Assumenda neque itaque repellendus quod quidem quisquam natus inventore praesentium temporibus laudantium eum id ratione, enim obcaecati sit quae minima dicta possimus nemo quas modi quis excepturi. Consequuntur vel explicabo a soluta nostrum sit officia! Repellat, incidunt. Laborum.",
    },
]

const BlogsProvider=({children})=>{
    const [data,setData]=useState(blogs)
    return (
        <BlogContext.Provider value={[data,setData]}>
            {children}
        </BlogContext.Provider>
    )
}
const useBlog=()=>useContext(BlogContext)

export {useBlog,BlogsProvider}
