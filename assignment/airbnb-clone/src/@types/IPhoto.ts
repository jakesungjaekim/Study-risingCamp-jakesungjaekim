export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: { [key: string]: string };
  links: { [key: string]: string };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  topic_submissions: any;
  location: {
    name: string;
    city: string | null;
    country: string | null;
  };
}
