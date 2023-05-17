export interface tvShowProps {
    id: number;
    name: string;
    country: string;
    end_date: string | null;
    image_thumbnail_path: string;
    network: string;
    permalink: string;
    start_date: string;
    status: string;
}

export interface ApiDataProps {
    pages: number;
    page: number;
    total: string;
    tv_shows: tvShowProps
}

export interface ApiResponse {
    data: any | null;
    error: string | null;
    loading: boolean;
}

export interface TvShowProps {
    tvShow: tvShowInterface;
}
export interface tvShowInterface {
 tvShow: tvShowSeletedProps

}
export interface tvShowSeletedProps {
    id: number;
    country: string;
    description: string;
    description_source: string;
    end_date: string | null;
    genres: string[];
    image_path: string;
    image_thumbnail_path: string;
    name: string;
    permalink: string;
    pictures: string[];
    rating: string;
    runtime: number;
    network: string;
    start_date: string;
    status: string;
    url: string;
    youtube_link: string;
}