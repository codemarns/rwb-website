export type MenuProps = {
  id: string;
  slug: string;
  name: string;
}

// export type KeyFeatureProps = {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
// }

// export type ProductsProps = {
//   id: string;
//   icon: string;
//   image: string;
//   title: string;
//   description: string;
// }

// export type PartnersProps = {
//   id: string;
//   image: string;
//   title: string;
// }

// export type FeatureProps = {
//   id: string;
//   icon: string;
//   title: string;
//   image: string;
//   description: string;
// }

export type CommonFeatureProps = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
}

type TDetailsProps = {
  overline: string;
  headline: string;
  subheadline: string;
}

export type TProductsProps = CommonFeatureProps & {
  prod_image?: string;
  pattern_image?: string;
  slug?: string;
  details?: TDetailsProps;
  features?: CommonFeatureProps[]
}
