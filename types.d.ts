export interface CategoryCardProps {
  categoryName: string;
  categoryImage: string;
  isActive: boolean;
}

export interface footerBannerApiResponse {
  imageUrl: string;
  urlToOffer: string;
}

export interface BlogDataType {
  title: string;
  imageUrl: string;
  urlToPost: string;
}

export interface BlogListProps {
  blogList: BlogDataType[];
}
