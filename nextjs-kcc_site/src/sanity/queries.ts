export const POSTS_PREVIEW_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt
}`;

export const ALL_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  excerpt
}`;

export const POST_BY_SLUG_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  image,
  excerpt
}`;

export const FEATURED_GALLERY_QUERY = `*[
  _type == "gallery"
  && featured == true
  && defined(image)
]|order(publishedAt desc)[0...6]{
  _id,
  title,
  description,
  category,
  image,
  "alt": image.alt,
  publishedAt
}`;

export const GALLERY_QUERY = `*[
  _type == "gallery"
  && defined(image)
]|order(publishedAt desc){
  _id,
  title,
  description,
  category,
  image,
  "alt": image.alt,
  "caption": image.caption,
  featured,
  tags,
  publishedAt
}`;
