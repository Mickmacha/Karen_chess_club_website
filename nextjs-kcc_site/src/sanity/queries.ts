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

export const FEATURED_PRODUCTS_QUERY = `*[
  _type == "product"
  && featured == true
  && defined(image)
]|order(publishedAt desc)[0...8]{
  _id,
  title,
  slug,
  description,
  price,
  category,
  image,
  inStock,
  publishedAt
}`;

export const ALL_PRODUCTS_QUERY = `*[
  _type == "product"
  && defined(image)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  description,
  price,
  category,
  image,
  inStock,
  featured,
  publishedAt
}`;

export const PRODUCTS_BY_CATEGORY_QUERY = `*[
  _type == "product"
  && category == $category
  && defined(image)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  description,
  price,
  category,
  image,
  inStock,
  publishedAt
}`;

export const FEATURED_TOURNAMENTS_QUERY = `*[
  _type == "tournament"
  && featured == true
  && defined(image)
]|order(date asc)[0...6]{
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  difficulty,
  format,
  maxParticipants,
  currentParticipants,
  entryFee,
  registrationDeadline,
  prizeFund,
  registrationOpen,
  image
}`;

export const ALL_TOURNAMENTS_QUERY = `*[
  _type == "tournament"
  && defined(image)
]|order(date asc){
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  difficulty,
  format,
  maxParticipants,
  currentParticipants,
  entryFee,
  registrationDeadline,
  prizeFund,
  featured,
  registrationOpen,
  image
}`;

export const TOURNAMENTS_BY_DIFFICULTY_QUERY = `*[
  _type == "tournament"
  && difficulty == $difficulty
  && defined(image)
]|order(date asc){
  _id,
  title,
  slug,
  description,
  date,
  time,
  location,
  difficulty,
  format,
  maxParticipants,
  currentParticipants,
  entryFee,
  registrationDeadline,
  registrationOpen,
  image
}`;
