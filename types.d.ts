import { LucideProps } from "lucide-react";

export interface CategoryCardProps {
  categoryName: string;
  icon: React.ReactNode;
  isActive: boolean;
  handleTabActive: (tab: Tabs) => void;
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

export type Tabs =
  | "Electronics"
  | "Fashion"
  | "Web Hosting"
  | "Domains"
  | "Beauty & Makeup";

export interface MobileMenuProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export interface CategoryCarouselProps {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
}

export interface TopDealCarouselProps {
  data: footerBannerApiResponse[];
}

export interface TrendDealResponseStateProp {
  company_name: string;
  offers: footerBannerApiResponse[];
}
