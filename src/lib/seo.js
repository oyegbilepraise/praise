const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://praisecodes.vercel.app").replace(/\/$/, ""),
  name: "Oyegbile Praise",
  title: "Oyegbile Praise — Full Stack & Mobile Developer",
  description:
    "Oyegbile Praise is a full stack and mobile developer in Lagos, Nigeria, building web and mobile products with React, Next.js, Flutter, Node.js and AI.",
  image: "/images/profile.jpg",
  twitter: "@OyegbilePraise",
  locale: "en_NG",
  sameAs: [
    "https://github.com/oyegbilepraise",
    "https://www.linkedin.com/in/oyegbile-praise-446459203/",
    "https://twitter.com/OyegbilePraise",
    "https://t.me/oyegbilepraise",
  ],
};

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export default site;
